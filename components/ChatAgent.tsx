'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader2, Bot } from 'lucide-react'

interface Message { role: 'user' | 'assistant'; content: string }

const SUGGESTIONS = [
  'What projects has Benjamin built?',
  'What tech stack does Benjamin use?',
  'Is Benjamin available to hire?',
  'Tell me about RideFlow',
]

export default function ChatAgent() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'assistant', content: "Hi! I'm Benjamin's AI assistant. Ask me anything about his work, projects, or skills." }])
    }
  }, [open, messages.length])

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  async function send(text?: string) {
    const msg = (text ?? input).trim()
    if (!msg || loading) return
    setInput('')
    const newMessages: Message[] = [...messages, { role: 'user', content: msg }]
    setMessages(newMessages)
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply || 'Sorry, I ran into an error.' }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Network error — please try again.' }])
    }
    setLoading(false)
  }

  return (
    <>
      {/* FAB */}
      <button onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
        style={{ background: 'var(--accent)', boxShadow: '0 0 30px rgba(124,106,247,0.4)' }}>
        {open ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] rounded-2xl border shadow-2xl overflow-hidden flex flex-col"
          style={{ background: 'var(--card)', borderColor: 'var(--border2)', maxHeight: '520px', boxShadow: '0 25px 60px rgba(0,0,0,0.6)' }}>
          {/* Header */}
          <div className="px-4 py-3.5 border-b flex items-center gap-3" style={{ borderColor: 'var(--border)', background: 'var(--bg2)' }}>
            <div className="h-8 w-8 rounded-full flex items-center justify-center" style={{ background: 'var(--accent)' }}>
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Ask about Benjamin</p>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>Powered by Claude AI</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: '280px' }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className="max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed"
                  style={m.role === 'user'
                    ? { background: 'var(--accent)', color: 'white', borderBottomRightRadius: '4px' }
                    : { background: 'var(--bg2)', color: 'var(--text)', borderBottomLeftRadius: '4px', border: '1px solid var(--border)' }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-3.5 py-2.5 rounded-2xl text-sm" style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderBottomLeftRadius: '4px' }}>
                  <Loader2 className="h-4 w-4 animate-spin" style={{ color: 'var(--accent)' }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && (
            <div className="px-3 pb-2 flex gap-1.5 flex-wrap">
              {SUGGESTIONS.map(s => (
                <button key={s} onClick={() => send(s)}
                  className="text-xs px-2.5 py-1 rounded-full border transition-all"
                  style={{ borderColor: 'var(--border2)', color: 'var(--muted)', background: 'var(--bg2)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent2)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--muted)' }}>
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t flex gap-2" style={{ borderColor: 'var(--border)' }}>
            <input value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
              placeholder="Ask me anything…"
              className="flex-1 rounded-xl px-3 py-2.5 text-sm focus:outline-none border"
              style={{ background: 'var(--bg2)', borderColor: 'var(--border2)', color: 'var(--text)' }} />
            <button onClick={() => send()} disabled={!input.trim() || loading}
              className="h-10 w-10 rounded-xl flex items-center justify-center transition-all disabled:opacity-40"
              style={{ background: 'var(--accent)' }}>
              <Send className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
