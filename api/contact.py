"""Portfolio contact endpoint (Python).

Replaces app/api/contact/route.ts. Same contract:
  POST { firstName, lastName, email, phone, service, message }  ->  { ok: true } | { error }
Sends via Resend if RESEND_API_KEY is set, otherwise the keyless FormSubmit relay.
Uses only the standard library (urllib) — no extra dependencies.
"""
import html
import json
import os
import urllib.request
import urllib.error
from http.server import BaseHTTPRequestHandler

TO_EMAIL = "kabondobenjamin1@gmail.com"
FIELDS = ["firstName", "lastName", "email", "phone", "service", "message"]


def _post_json(url, payload, headers, timeout=20):
    data = json.dumps(payload).encode()
    req = urllib.request.Request(url, data=data, method="POST")
    req.add_header("Content-Type", "application/json")
    for k, v in headers.items():
        req.add_header(k, v)
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.status, resp.read().decode("utf-8", "ignore")


def send_via_resend(api_key, f):
    e = {k: html.escape(f.get(k, "")) for k in FIELDS}
    rows = (
        f'<tr><td style="padding:8px 0;color:#666;width:120px;">Name</td>'
        f'<td style="padding:8px 0;font-weight:600;color:#111;">{e["firstName"]} {e["lastName"]}</td></tr>'
        f'<tr><td style="padding:8px 0;color:#666;">Email</td>'
        f'<td style="padding:8px 0;"><a href="mailto:{e["email"]}" style="color:#7c6af7;">{e["email"]}</a></td></tr>'
    )
    if f.get("phone"):
        rows += f'<tr><td style="padding:8px 0;color:#666;">Phone</td><td style="padding:8px 0;color:#111;">{e["phone"]}</td></tr>'
    if f.get("service"):
        rows += f'<tr><td style="padding:8px 0;color:#666;">Service</td><td style="padding:8px 0;color:#111;">{e["service"]}</td></tr>'
    body = (
        '<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;border-radius:12px;">'
        '<h2 style="color:#111;margin-top:0;">New Portfolio Inquiry</h2>'
        f'<table style="width:100%;border-collapse:collapse;">{rows}</table>'
        '<div style="margin-top:16px;padding:16px;background:#fff;border-radius:8px;border-left:4px solid #7c6af7;">'
        f'<p style="margin:0;color:#333;white-space:pre-wrap;">{e["message"]}</p></div>'
        f'<p style="margin-top:16px;font-size:12px;color:#999;">Reply to this email to respond directly to {e["firstName"]}.</p></div>'
    )
    subject = f'Portfolio Inquiry — {f.get("service") or "General"} from {f["firstName"]} {f["lastName"]}'
    payload = {
        "from": "Portfolio Contact <onboarding@resend.dev>",
        "to": [TO_EMAIL],
        "reply_to": f["email"],
        "subject": subject,
        "html": body,
    }
    status, _ = _post_json(
        "https://api.resend.com/emails", payload,
        {"Authorization": f"Bearer {api_key}"},
    )
    if status >= 400:
        raise RuntimeError(f"Resend {status}")


def send_via_formsubmit(f):
    payload = {
        "name": f'{f["firstName"]} {f["lastName"]}',
        "email": f["email"],
        "phone": f.get("phone") or "—",
        "service": f.get("service") or "General",
        "message": f["message"],
        "_subject": f'Portfolio Inquiry — {f.get("service") or "General"} from {f["firstName"]} {f["lastName"]}',
        "_template": "table",
        "_captcha": "false",
        "_replyto": f["email"],
    }
    headers = {
        "Accept": "application/json",
        "Origin": "https://bkabondo.vercel.app",
        "Referer": "https://bkabondo.vercel.app/contact",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    }
    try:
        status, text = _post_json(f"https://formsubmit.co/ajax/{TO_EMAIL}", payload, headers)
    except urllib.error.HTTPError as e:
        raise RuntimeError(f"FormSubmit {e.code}")
    data = None
    try:
        data = json.loads(text)
    except Exception:
        pass
    if status >= 400 or (data and str(data.get("success")).lower() == "false"):
        raise RuntimeError((data or {}).get("message") or f"FormSubmit {status}")


class handler(BaseHTTPRequestHandler):
    def _json(self, status, payload):
        b = json.dumps(payload).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(b)))
        self.end_headers()
        self.wfile.write(b)

    def do_POST(self):
        try:
            length = int(self.headers.get("content-length") or 0)
            body = json.loads(self.rfile.read(length) or b"{}")
            f = {k: str(body.get(k, "") or "").strip() for k in FIELDS}

            if not f["firstName"] or not f["email"] or not f["message"]:
                return self._json(400, {"error": "Missing required fields"})

            api_key = os.environ.get("RESEND_API_KEY")
            if api_key:
                try:
                    send_via_resend(api_key, f)
                    return self._json(200, {"ok": True})
                except Exception:
                    pass  # fall through to FormSubmit

            send_via_formsubmit(f)
            return self._json(200, {"ok": True})
        except Exception as err:  # noqa: BLE001 — mirror the TS catch-all
            return self._json(500, {"error": str(err) or "Unknown error"})
