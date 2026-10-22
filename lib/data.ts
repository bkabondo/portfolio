// Order mirrors the Projects section of Resume2026.pdf (VideoSumm AI is portfolio-only).
export const PROJECTS = [
  {
    id: 'timelock',
    name: 'TimeLock',
    tagline: 'AI-Powered Time Capsule',
    description: 'Seal personal messages with a future unlock date, receive AI-generated oracle hints, share capsules with recipients, and experience the reveal when time is up — memories preserved with a digital twist.',
    tech: ['Python', 'Next.js', 'Supabase', 'Claude AI', 'Resend', 'Tailwind'],
    live: 'https://timelockbk.vercel.app',
    github: 'https://github.com/bkabondo/timelock',
    emoji: '⏳',
    color: '#f97316',
    logo: '/logos/timelock.svg',
  },
  {
    id: 'autovision',
    name: 'AutoVision AI',
    tagline: 'Deep Learning Car Recognition',
    description: 'AI-powered car identification game with 267 iconic cars spanning 1955–2024. Four modes: quiz, Which Is Which, Guess the Year, and AI Scanner. Claude Vision explains visual reasoning like a real CNN feature extractor.',
    tech: ['Python', 'Next.js', 'Claude Vision', 'Deep Learning', 'Computer Vision', 'Tailwind'],
    live: 'https://autovisionbk.vercel.app',
    github: 'https://github.com/bkabondo/autovision',
    emoji: '🚗',
    color: '#00d4ff',
    logo: '/logos/autovision.svg',
  },
  {
    id: 'rideflow',
    name: 'RideFlow',
    tagline: 'Premium Luxury Ride Platform',
    description: 'A full-stack black-car booking platform: custom quote system, Google Maps autocomplete, Stripe payment intents with manual capture, driver assignment, and real-time ride tracking.',
    tech: ['Python', 'Next.js', 'Supabase', 'Stripe', 'Google Maps', 'Tailwind'],
    live: 'https://rideflowbk.vercel.app',
    github: 'https://github.com/bkabondo/rideflow',
    emoji: '🚗',
    color: '#c9a028',
    logo: '/logos/rideflow.svg',
  },
  {
    id: 'mindforge',
    name: 'MindForge',
    tagline: 'AI Flashcard Generator',
    description: 'Create study decks, auto-generate flashcards from any topic using Claude AI, and master them with SM-2 spaced repetition. Flip animations, progress tracking, and smart scheduling — all in one app.',
    tech: ['Python', 'Next.js', 'Supabase', 'Claude AI', 'Stripe', 'Tailwind'],
    live: 'https://mindforgebk.vercel.app',
    github: 'https://github.com/bkabondo/mindforge',
    emoji: '🧠',
    color: '#7c6af7',
    logo: '/logos/mindforge.svg',
  },
  {
    id: 'finsage',
    name: 'FinSage',
    tagline: 'AI Financial Coach',
    description: 'Track transactions, manage budgets, and get Claude AI-generated insights on your last 30 days of spending. Personalized recommendations and spending breakdowns to help you save smarter.',
    tech: ['Python', 'Next.js', 'Supabase', 'Claude AI', 'Chart.js', 'Tailwind'],
    live: 'https://finsagebk.vercel.app',
    github: 'https://github.com/bkabondo/finsage',
    emoji: '💰',
    color: '#22c55e',
    logo: '/logos/finsage.svg',
  },
  {
    id: 'videosum',
    name: 'VideoSumm AI',
    tagline: 'Turn Any Video Into Smart Notes',
    description: 'Paste a YouTube link and get AI-generated key notes, full transcript, chapter detection, and a chat interface to ask anything about the video content. Works even on videos without captions.',
    tech: ['Python', 'Next.js', 'Claude AI', 'YouTube API', 'Tailwind'],
    live: 'https://videosummbk.vercel.app',
    github: 'https://github.com/bkabondo/videosum',
    emoji: '🎬',
    color: '#7c6af7',
    logo: '/logos/videosum.svg',
  },
]

// Categories mirror the Technical Skills section of Resume2026.pdf.
export const SKILLS = [
  { category: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'C', 'SQL', 'HTML/CSS'] },
  { category: 'Backend', items: ['Python Serverless Functions', 'REST APIs', 'PostgREST', 'JWT / Cookie Auth', 'Webhooks'] },
  { category: 'Frontend & Frameworks', items: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'] },
  { category: 'Cloud & DevOps', items: ['Vercel', 'Supabase', 'Docker', 'Azure AI Services', 'Snowflake'] },
  { category: 'Databases & Tools', items: ['PostgreSQL', 'Git', 'Linux', 'macOS'] },
  { category: 'AI & APIs', items: ['Claude AI (Anthropic SDK)', 'OpenAI API', 'Stripe API', 'Geolocation APIs'] },
]

export const CONTACT = {
  email: 'kabondobenjamin1@gmail.com',
  phone: '(+1) 682 247 ****',
  address: '2901 Stadium Dr, Fort Worth TX',
  github: 'https://github.com/bkabondo',
  linkedin: 'https://www.linkedin.com/in/benjaminkabondo/',
  instagram: 'https://www.instagram.com/kabondob/',
}

// The chat agent's system prompt lives in api/chat.py (the only consumer).
// Keep Benjamin's facts there, not here, so there is a single source of truth.
