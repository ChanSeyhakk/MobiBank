import { useState } from 'react'

const featureItems = [
  { icon: 'arrows', title: 'Send money in a few taps', text: 'Move money to the people you care about, without making a trip to a branch.' },
  { icon: 'receipt', title: 'Stay on top of bills', text: 'Keep everyday payments together and make bill time feel a little less like a chore.' },
  { icon: 'chart', title: 'Know where you stand', text: 'See your balance and recent activity at a glance, whenever you need to.' },
  { icon: 'target', title: 'Build your savings', text: 'Set a goal, keep an eye on your progress, and celebrate the little wins along the way.' },
  { icon: 'card', title: 'Your cards, in one place', text: 'Find your card details and manage your cards from one simple mobile experience.' },
  { icon: 'bell', title: 'Helpful account updates', text: 'Get timely reminders and updates, so the important things do not slip by.' },
]

const faqs = [
  { question: 'Is MobiBank available to download?', answer: 'Not yet. This website is a preview of the MobiBank experience. App downloads and account services are not connected.' },
  { question: 'How do I open an account?', answer: 'Account opening is not available in this demo. We will share details here when MobiBank is ready.' },
  { question: 'Can I make a real transfer or payment?', answer: 'No. The balances and transactions shown on this site are examples only. No money moves and no banking service is connected.' },
  { question: 'How does MobiBank help protect my information?', answer: 'Security is built into the product design. Visit our Security page for practical guidance. Never share your password or one-time codes with anyone.' },
  { question: 'I need help with something else. What can I do?', answer: 'You can use the message preview form below to draft a question on this page. It does not send or store your message.' },
]

function Icon({ name }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  const drawings = {
    arrows: <><path d="M7 7h12l-3-3" /><path d="M17 17H5l3 3" /><path d="M19 7l-4 4" /><path d="M5 17l4-4" /></>,
    receipt: <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" /><path d="M9 8h6M9 12h6M9 16h3" /></>,
    chart: <><path d="M4 19V5M4 19h17" /><path d="m7 15 4-4 3 2 5-6" /></>,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
    card: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h3" /></>,
    bell: <><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 1 1 8 0v3M12 14v3" /></>,
    eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
    help: <><circle cx="12" cy="12" r="10" /><path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.8c-1.1 1.1-1.8 1.5-1.8 3.2M12 17.5h.01" /></>,
  }
  return <svg className="h-[23px] w-[23px]" viewBox="0 0 24 24" aria-hidden="true" {...common}>{drawings[name]}</svg>
}

function PageIntro({ label, title, description }) {
  return (
    <section className="mx-auto max-w-[1280px] px-[clamp(20px,6.5vw,84px)] pb-[58px] pt-[82px] max-[600px]:pb-[38px] max-[600px]:pt-[58px]">
      <span className="text-[13px] font-bold uppercase leading-[1.4] tracking-[.11em] text-brand">{label}</span>
      <h1 className="mt-5 text-[clamp(48px,6vw,76px)] font-bold leading-[1.08] tracking-[-1.5px] text-navy max-[600px]:text-[clamp(43px,12vw,60px)]">{title}</h1>
      <p className="mt-[22px] max-w-[610px] text-[19px] leading-[1.65] max-[600px]:text-[17px]">{description}</p>
    </section>
  )
}

export function FeaturesPage() {
  const [notice, setNotice] = useState('')

  return (
    <main>
      <PageIntro label="Made for everyday" title={<>A little more ease<br />in your everyday.</>} description="Thoughtful tools to help you keep track, stay organized, and feel good about your money." />
      <section className="mx-auto grid max-w-[1280px] grid-cols-3 gap-5 px-[clamp(20px,6.5vw,84px)] pb-[72px] max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1 max-[600px]:pb-12" aria-label="MobiBank features">
        {featureItems.map((feature) => (
          <article className="min-h-[230px] rounded-[20px] border border-[#e8eef7] bg-white/90 p-7 shadow-[0_12px_32px_rgba(37,76,130,.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(37,76,130,.1)] max-[600px]:min-h-0 max-[600px]:p-6" key={feature.title}>
            <span className="inline-grid h-12 w-12 place-items-center rounded-[15px] bg-[#eaf2fe] text-brand"><Icon name={feature.icon} /></span>
            <h2 className="mt-5 text-[19px] font-bold leading-[1.3] text-navy">{feature.title}</h2>
            <p className="mt-2.5 text-[15px] leading-[1.65]">{feature.text}</p>
          </article>
        ))}
      </section>
      <section className="mx-auto mb-20 flex max-w-[1112px] items-center justify-between gap-8 rounded-3xl bg-navy px-[42px] py-9 text-[#dce7fc] max-[600px]:mx-5 max-[600px]:mb-[52px] max-[600px]:flex-col max-[600px]:items-start max-[600px]:p-7">
        <div><span className="text-[13px] font-bold uppercase tracking-[.11em] text-brand">Coming soon</span><h2 className="mt-[9px] text-[28px] font-bold text-white max-[600px]:text-[25px]">Your everyday banking companion.</h2><p className="mt-[9px] max-w-[620px] leading-relaxed">MobiBank is not available to download just yet. We’re putting the finishing touches on your mobile experience.</p></div>
        <div className="flex-none">
          <button className="rounded-full bg-brand px-[23px] py-[14px] font-semibold text-white transition hover:bg-brand-dark" type="button" onClick={() => setNotice('MobiBank is not available to download yet.')}>Get the app</button>
          {notice && <p className="mt-2 text-sm text-white" role="status">{notice}</p>}
        </div>
      </section>
    </main>
  )
}

export function SecurityPage() {
  const guidelines = [
    { icon: 'lock', title: 'Keep your sign-in details private', text: 'Use a unique password and never share it, or a one-time verification code, with anyone.' },
    { icon: 'eye', title: 'Pause before you tap', text: 'Be cautious with unexpected links or messages asking you to urgently verify your account.' },
    { icon: 'shield', title: 'Keep your device up to date', text: 'Install operating system and app updates when they are available, and use a screen lock.' },
  ]
  return (
    <main>
      <PageIntro label="Your security matters" title={<>Bank with<br />more peace of mind.</>} description="Security is part of the experience from the start. Here are a few simple ways to help protect your information." />
      <section className="mx-auto grid max-w-[1280px] grid-cols-[.9fr_1.1fr] items-start gap-[50px] px-[clamp(20px,6.5vw,84px)] pb-[72px] max-[1000px]:grid-cols-1 max-[600px]:pb-12">
        <div className="rounded-3xl bg-[linear-gradient(145deg,#dcecff,#f4f8ff)] p-9 max-[1000px]:grid max-[1000px]:grid-cols-[62px_1fr] max-[1000px]:gap-x-[22px] max-[600px]:block max-[600px]:p-7">
          <span className="grid h-[62px] w-[62px] place-items-center rounded-[20px] bg-white text-brand"><Icon name="shield" /></span>
          <div><span className="mt-[25px] inline-block text-[13px] font-bold uppercase tracking-[.11em] text-brand max-[1000px]:mt-0 max-[600px]:mt-5">A safer start</span><h2 className="mt-[26px] max-w-[350px] text-[29px] font-bold leading-[1.2] text-navy max-[1000px]:mt-2 max-[1000px]:max-w-none max-[600px]:text-[26px]">Good security starts with good habits.</h2><p className="mt-3.5 leading-[1.7] max-[1000px]:mt-2.5">MobiBank’s services are not live yet. This preview does not collect your banking credentials or connect to financial accounts.</p></div>
        </div>
        <div className="grid gap-7">
          {guidelines.map((item, index) => (
            <article className="grid grid-cols-[48px_1fr] items-start gap-[18px] border-b border-[#e6edf7] pb-6 last:border-0 last:pb-0 max-[600px]:grid-cols-[42px_1fr] max-[600px]:gap-[13px]" key={item.title}>
              <span className="inline-grid h-12 w-12 place-items-center rounded-[15px] bg-[#eaf2fe] text-brand max-[600px]:h-[42px] max-[600px]:w-[42px]"><Icon name={item.icon} /></span>
              <div><span className="text-xs font-bold tracking-[.08em] text-brand">0{index + 1}</span><h2 className="mt-1 text-[19px] font-bold leading-[1.3] text-navy">{item.title}</h2><p className="mt-[7px] text-[15px] leading-[1.65]">{item.text}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto mb-20 max-w-[1112px] rounded-[18px] border border-[#dfeafa] bg-white px-[30px] py-[26px] max-[1000px]:mx-5 max-[600px]:mb-[52px] max-[600px]:p-[22px]"><strong className="text-navy">Think something is wrong?</strong><p className="mt-[7px] leading-relaxed">Do not share passwords or verification codes. Once support is available, contact us through the official MobiBank app or website.</p><a className="mt-3.5 inline-flex gap-2 font-bold text-brand hover:underline" href="#help">Visit the help center <span aria-hidden="true">→</span></a></section>
    </main>
  )
}

export function HelpPage() {
  const [query, setQuery] = useState('')
  const [openFaq, setOpenFaq] = useState(faqs[0].question)
  const [message, setMessage] = useState('')
  const filteredFaqs = faqs.filter(({ question, answer }) => `${question} ${answer}`.toLowerCase().includes(query.trim().toLowerCase()))

  function previewMessage(event) {
    event.preventDefault()
    setMessage('This is a local preview only. Your message has not been sent or saved.')
  }

  return (
    <main>
      <PageIntro label="We're here to help" title={<>Questions?<br />Start right here.</>} description="Find quick answers below. MobiBank is a preview, so account and support services are not available yet." />
      <section className="mx-auto grid max-w-[1280px] grid-cols-[minmax(0,1.5fr)_minmax(280px,.75fr)] items-start gap-9 px-[clamp(20px,6.5vw,84px)] pb-[72px] max-[1000px]:grid-cols-1 max-[600px]:pb-12">
        <div className="rounded-[20px] border border-[#e5ebf4] bg-white p-8 shadow-[0_12px_32px_rgba(37,76,130,.05)] max-[600px]:p-6">
          <div><span className="text-[13px] font-bold uppercase tracking-[.11em] text-brand">The essentials</span><h2 className="mt-[9px] text-[30px] font-bold tracking-[-.5px] text-navy max-[600px]:text-[26px]">Frequently asked questions</h2></div>
          <label className="mt-[25px] flex items-center gap-3 rounded-xl border border-[#dfe7f3] bg-white px-[15px] text-muted focus-within:border-brand focus-within:shadow-[0_0_0_3px_rgba(31,111,235,.12)]"><Icon name="help" /><span className="sr-only">Search help articles</span><input className="h-[50px] w-full bg-transparent font-sans text-navy outline-none" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search for an answer..." /></label>
          <div className="mt-4 border-t border-[#e5ebf4]">
            {filteredFaqs.map(({ question, answer }) => {
              const isOpen = openFaq === question
              return (
                <article className="border-b border-[#e5ebf4] px-1" key={question}>
                  <button className="flex min-h-[62px] w-full items-center justify-between gap-[18px] text-left font-semibold text-navy" type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? '' : question)}>{question}<span className="text-[22px] text-brand" aria-hidden="true">{isOpen ? '−' : '+'}</span></button>
                  {isOpen && <p className="max-w-[640px] pb-5 pr-[35px] text-[15px] leading-[1.7]">{answer}</p>}
                </article>
              )
            })}
            {filteredFaqs.length === 0 && <p className="px-1 py-[22px] leading-relaxed">No matches yet. Try a different search, or browse all questions.</p>}
          </div>
        </div>
        <aside className="max-[1000px]:max-w-[580px] rounded-[20px] border border-[#e5ebf4] bg-white p-[26px] shadow-[0_12px_32px_rgba(37,76,130,.05)]">
          <span className="inline-grid h-12 w-12 place-items-center rounded-[15px] bg-[#eaf2fe] text-brand"><Icon name="help" /></span>
          <span className="mt-5 block text-[13px] font-bold uppercase tracking-[.11em] text-brand">Still have a question?</span>
          <h2 className="mt-[7px] text-2xl font-bold text-navy">Draft a message</h2>
          <p className="mt-2.5 text-sm leading-[1.65]">This preview form stays on this page. It does not send or save your details.</p>
          <form className="mt-[22px] grid gap-[9px]" onSubmit={previewMessage}>
            <label className="mt-1.5 text-[13px] font-semibold text-navy" htmlFor="help-email">Email address</label>
            <input className="w-full rounded-[10px] border border-[#dfe7f3] bg-[#fbfcff] p-3 font-sans text-sm text-navy outline-none focus:border-brand focus:ring-[3px] focus:ring-brand/15" id="help-email" type="email" placeholder="you@example.com" autoComplete="email" required />
            <label className="mt-1.5 text-[13px] font-semibold text-navy" htmlFor="help-message">How can we help?</label>
            <textarea className="w-full resize-y rounded-[10px] border border-[#dfe7f3] bg-[#fbfcff] p-3 font-sans text-sm text-navy outline-none focus:border-brand focus:ring-[3px] focus:ring-brand/15" id="help-message" rows="4" placeholder="Write your question..." required />
            <button type="submit" className="mt-1.5 justify-self-start rounded-full bg-brand px-[23px] py-[14px] font-semibold text-white transition hover:bg-brand-dark">Preview message</button>
          </form>
          {message && <p className="mt-2.5 rounded-[9px] bg-[#eaf5ef] px-3 py-[11px] text-[13px] leading-relaxed text-[#17653f]" role="status">{message}</p>}
        </aside>
      </section>
    </main>
  )
}

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [notice, setNotice] = useState('')

  function previewSignIn(event) {
    event.preventDefault()
    setNotice('Sign-in is a preview only. No account is authenticated, and your details have not been sent or saved.')
  }

  return (
    <main>
      <PageIntro label="Welcome back" title={<>Your money,<br />all in one place.</>} description="Sign in to your MobiBank account to pick up right where you left off." />
      <section className="mx-auto grid max-w-[1112px] grid-cols-[.9fr_1.1fr] items-stretch gap-[30px] px-[clamp(20px,6.5vw,84px)] pb-[72px] max-[1000px]:grid-cols-1 max-[600px]:pb-12">
        <div className="flex flex-col items-start rounded-[22px] bg-[linear-gradient(150deg,#1f6feb,#123f99)] p-[38px] text-[#e4efff] max-[600px]:p-7">
          <span className="grid h-[62px] w-[62px] place-items-center rounded-[20px] bg-white text-brand"><Icon name="shield" /></span>
          <span className="mt-[30px] text-[13px] font-bold uppercase tracking-[.11em] text-[#c1d8ff]">A note about this demo</span>
          <h2 className="mt-3 text-[31px] font-bold leading-[1.2] text-white">This is a sign-in preview.</h2>
          <p className="mt-3.5 leading-[1.7]">MobiBank account services are not connected yet. You can try the form, but your credentials will never leave this page or be saved.</p>
          <a href="#security" className="mt-auto inline-flex gap-2 pt-7 font-semibold text-white">Learn about staying safe <span aria-hidden="true">→</span></a>
        </div>
        <div className="rounded-[22px] border border-[#e5ebf4] bg-white p-9 shadow-[0_12px_32px_rgba(37,76,130,.06)] max-[600px]:p-7">
          <span className="text-[13px] font-bold uppercase tracking-[.11em] text-brand">Secure access</span>
          <h2 className="mt-[9px] text-[29px] font-bold text-navy">Log in to MobiBank</h2>
          <p className="mt-2 leading-relaxed">Enter your details to preview the sign-in flow.</p>
          <form className="mt-6 grid gap-2.5" onSubmit={previewSignIn}>
            <label className="text-sm font-semibold text-navy" htmlFor="login-email">Email address</label>
            <input className="h-12 w-full rounded-[10px] border border-[#dfe7f3] bg-[#fbfcff] px-[13px] font-sans text-sm text-navy outline-none focus:border-brand focus:ring-[3px] focus:ring-brand/15" id="login-email" type="email" name="email" autoComplete="username" placeholder="you@example.com" required />
            <div className="mt-2 flex items-center justify-between gap-2.5">
              <label className="text-sm font-semibold text-navy" htmlFor="login-password">Password</label>
              <button type="button" className="text-[13px] font-semibold text-brand" onClick={() => setNotice('Password reset is not available in this preview. No account information has been requested.')}>Forgot password?</button>
            </div>
            <div className="flex items-center rounded-[10px] border border-[#dfe7f3] bg-[#fbfcff] focus-within:border-brand focus-within:ring-[3px] focus-within:ring-brand/15">
              <input className="h-12 w-full rounded-[10px] border-0 bg-transparent px-[13px] font-sans text-sm text-navy outline-none" id="login-password" type={showPassword ? 'text' : 'password'} name="password" autoComplete="current-password" placeholder="Enter your password" required />
              <button type="button" className="flex-none px-[13px] py-2.5 text-[13px] font-semibold text-brand" aria-label={showPassword ? 'Hide password' : 'Show password'} aria-pressed={showPassword} onClick={() => setShowPassword((visible) => !visible)}>{showPassword ? 'Hide' : 'Show'}</button>
            </div>
            <label className="my-2 flex cursor-pointer items-center gap-[9px] text-sm"><input className="h-4 w-4 accent-brand" type="checkbox" name="remember" /> <span>Remember me on this device</span></label>
            <button type="submit" className="min-h-12 rounded-full bg-brand px-[23px] py-[14px] font-semibold text-white transition hover:bg-brand-dark">Log in</button>
          </form>
          {notice && <p className="mt-4 rounded-[10px] bg-[#fff7e6] p-3 text-[13px] leading-relaxed text-[#70510a]" role="status">{notice}</p>}
          <p className="mt-[22px] border-t border-[#e8edf5] pt-[18px] text-sm">Need a hand? <a className="font-semibold text-brand hover:underline" href="#help">Visit our Help Center</a></p>
        </div>
      </section>
    </main>
  )
}

export function AboutPage() {
  return (
    <main>
      <PageIntro label="A simpler way forward" title={<>Money should feel<br />a little more simple.</>} description="MobiBank is a digital banking concept built around clarity, convenience, and giving you more confidence in your everyday finances." />
      <section className="mx-auto grid max-w-[1280px] grid-cols-[1.2fr_1fr_1fr] gap-5 px-[clamp(20px,6.5vw,84px)] pb-[72px] max-[1000px]:grid-cols-2 max-[1000px]:pb-[72px] max-[600px]:grid-cols-1 max-[600px]:pb-12">
        <article className="min-h-[280px] rounded-[20px] bg-[linear-gradient(145deg,#1f6feb,#174db4)] p-8 text-[#e5efff] max-[1000px]:col-span-full max-[600px]:col-auto"><span className="text-[13px] font-bold uppercase tracking-[.11em] text-[#c1d8ff]">Our idea</span><h2 className="mt-[18px] text-[30px] font-bold leading-[1.2] text-white">Less friction.<br />More focus on you.</h2><p className="mt-3.5 leading-[1.65]">We believe banking should fit into your life, not the other way around. That means clear tools, thoughtful design, and security you can understand.</p></article>
        <article className="min-h-[230px] rounded-[20px] border border-[#e8eef7] bg-white/90 p-7 shadow-[0_12px_32px_rgba(37,76,130,.05)] max-[600px]:min-h-0 max-[600px]:p-6"><span className="inline-grid h-12 w-12 place-items-center rounded-[15px] bg-[#eaf2fe] text-brand"><Icon name="chart" /></span><h2 className="mt-5 text-[19px] font-bold leading-[1.3] text-navy">Built around real life</h2><p className="mt-2.5 text-[15px] leading-[1.65]">From daily spending to long-term goals, the experience is designed to make the money moments that matter feel easier to manage.</p></article>
        <article className="min-h-[230px] rounded-[20px] border border-[#e8eef7] bg-white/90 p-7 shadow-[0_12px_32px_rgba(37,76,130,.05)] max-[600px]:min-h-0 max-[600px]:p-6"><span className="inline-grid h-12 w-12 place-items-center rounded-[15px] bg-[#eaf2fe] text-brand"><Icon name="shield" /></span><h2 className="mt-5 text-[19px] font-bold leading-[1.3] text-navy">Designed with care</h2><p className="mt-2.5 text-[15px] leading-[1.65]">We put privacy, security, and transparency at the heart of the MobiBank experience.</p></article>
      </section>
    </main>
  )
}
