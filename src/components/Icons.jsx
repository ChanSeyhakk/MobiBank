const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Logo = (p) => (
  <svg width="48" height="40" viewBox="0 0 48 40" {...p}>
    <path d="M3 12c0-7 8-10 14-5l7 6-7 6C11 24 3 22 3 12Z" fill="#2f7cf6" />
    <path d="M45 12c0-7-8-10-14-5l-7 6 7 6c6 5 14 3 14-7Z" fill="#1a5fe0" />
    <path d="M3 28c0-5 7-8 13-4l8 6-6 6C9 40 3 36 3 28Z" fill="#6aa7ff" opacity=".85" />
    <path d="M45 28c0-5-7-8-13-4l-8 6 6 6c9 4 15 0 15-8Z" fill="#4c93fb" opacity=".85" />
  </svg>
)

export const Transfer = () => (
  <svg {...base}><path d="M7 7h10l-3-3M17 17H7l3 3" /></svg>
)
export const Bills = () => (
  <svg {...base}><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3" /></svg>
)
export const TopUp = () => (
  <svg {...base}><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></svg>
)
export const More = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="7" cy="7" r="2.2" /><circle cx="17" cy="7" r="2.2" />
    <circle cx="7" cy="17" r="2.2" /><circle cx="17" cy="17" r="2.2" />
  </svg>
)
export const Eye = () => (
  <svg {...base}><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></svg>
)
export const Chat = () => (
  <svg {...base}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
)
export const Home = () => (
  <svg {...base}><path d="M3 11 12 3l9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9Z" fill="currentColor" /></svg>
)
export const Card = () => (
  <svg {...base}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18" /></svg>
)
export const Savings = () => (
  <svg {...base}><path d="M6 14c0-4 3-7 7-7 3 0 5 2 5 5s-2 6-6 6c-3 0-6-1-6-4Z" /><path d="M10 7 9 4M15 7l1-3" /></svg>
)
export const Profile = () => (
  <svg {...base}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg>
)
export const Wallet = () => (
  <svg {...base} strokeWidth="2.2"><path d="M5 5h14v14H5z" opacity="0" /><path d="M7 16V8l5 5 5-5v8" /></svg>
)
export const Cart = () => (
  <svg {...base} strokeWidth="2.2"><path d="M4 5h2l2 10h9l2-7H7" /><circle cx="10" cy="19" r="1" /><circle cx="16" cy="19" r="1" /></svg>
)
export const Bolt = () => (
  <svg {...base} strokeWidth="2.2"><path d="M13 3 6 13h5l-1 8 7-10h-5l1-8Z" /></svg>
)
export const Apple = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
  </svg>
)
export const Play = () => (
  <svg width="30" height="30" viewBox="0 0 24 24">
    <path d="M3.6 2.3 13.3 12 3.6 21.7a1.8 1.8 0 0 1-.6-1.4V3.7c0-.6.2-1.1.6-1.4Z" fill="#00d4ff" />
    <path d="m16.5 8.8-3.2 3.2L3.6 2.3c.5-.4 1.200-.5 1.900-.1l11 6.600Z" fill="#00e676" />
    <path d="m16.5 15.200-11 6.600c-.7.400-1.400.300-1.900-.100l9.700-9.700 3.200 3.200Z" fill="#ff3d57" />
    <path d="m16.500 8.800 3.900 2.300c1.100.7 1.100 1.600 0 2.200l-3.900 1.900-3.200-3.200 3.200-3.200Z" fill="#ffc400" />
  </svg>
)
