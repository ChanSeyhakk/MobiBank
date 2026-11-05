import {
  Transfer, Bills, TopUp, More, Eye, Chat,
  Home, Card, Savings, Profile, Wallet, Cart, Bolt,
} from './Icons.jsx'

const actions = [
  { label: 'Transfer', icon: <Transfer /> },
  { label: 'Pay Bills', icon: <Bills /> },
  { label: 'Top Up', icon: <TopUp /> },
  { label: 'More', icon: <More /> },
]

const transactions = [
  { title: 'Salary Deposit', date: 'Apr 25, 2025', amount: '+ $1,200.00', income: true, color: '#26b58a', icon: <Wallet /> },
  { title: 'Grocery Store', date: 'Apr 24, 2025', amount: '- $48.30', color: '#3f5fd9', icon: <Cart /> },
  { title: 'Electricity Bill', date: 'Apr 22, 2025', amount: '- $65.00', color: '#f0584f', icon: <Bolt /> },
]

const tabs = [
  { label: 'Home', icon: <Home />, active: true },
  { label: 'Cards', icon: <Card /> },
  { label: 'Savings', icon: <Savings /> },
  { label: 'Profile', icon: <Profile /> },
]

function Plant() {
  return (
    <svg className="plant" viewBox="0 0 260 420" aria-hidden="true">
      <defs>
        <linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8fc9a0" />
          <stop offset="1" stopColor="#4f9a6e" />
        </linearGradient>
      </defs>
      <g fill="url(#leaf)" opacity=".85">
        <path d="M130 250C100 190 110 110 150 40c30 60 30 140-20 210Z" />
        <path d="M130 260C80 240 40 190 36 120c50 20 90 70 94 140Z" />
        <path d="M130 260c40-30 90-40 130-20-20 50-80 80-130 20Z" />
        <path d="M128 270C90 250 50 260 20 300c40 20 90 10 108-30Z" />
      </g>
    </svg>
  )
}

export default function PhoneMockup() {
  return (
    <div className="phone-scene">
      <div className="blob blob-big" />
      <div className="blob blob-pill" />
      <div className="blob blob-dot" />

      <div className="tagline" aria-hidden="true">
        <span>Simple.<br />Secure.<br />Always with you.</span>
        <svg viewBox="0 0 60 70" width="60" height="70">
          <path d="M44 6C48 30 36 50 12 58" fill="none" stroke="#2f7cf6" strokeWidth="2.5" strokeLinecap="round" />
          <path d="m10 44 3 15 16-6" fill="none" stroke="#2f7cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="plant-wrap"><Plant /></div>
      <div className="pot" />

      <div className="phone">
        <div className="phone-screen">
          <div className="notch" />

          <div className="app-top">
            <div className="status">
              <span>9:41</span>
              <span className="status-icons">
                <i /><i /><i className="battery" />
              </span>
            </div>
            <div className="greet-row">
              <div>
                <small>Good morning,</small>
                <h3>Sokha <span role="img" aria-label="wave">👋</span></h3>
              </div>
              <span className="chat-ico"><Chat /></span>
            </div>
          </div>

          <div className="balance-card">
            <small>Total Balance</small>
            <div className="balance-row">
              <strong>$2,450.00</strong>
              <span className="eye"><Eye /></span>
            </div>
          </div>

          <div className="app-body">
            <div className="actions">
              {actions.map((a) => (
                <button key={a.label} className="action" type="button">
                  <span className="action-ico">{a.icon}</span>
                  {a.label}
                </button>
              ))}
            </div>

            <div className="tx-head">
              <h4>Recent Transactions</h4>
              <span className="text-[9.5px] font-semibold text-brand">See all</span>
            </div>

            <ul className="tx-list">
              {transactions.map((t) => (
                <li key={t.title}>
                  <span className="tx-ico" style={{ background: t.color }}>{t.icon}</span>
                  <span className="tx-info">
                    <b>{t.title}</b>
                    <small>{t.date}</small>
                  </span>
                  <span className={`tx-amt ${t.income ? 'in' : ''}`}>{t.amount}</span>
                </li>
              ))}
            </ul>
          </div>

          <nav className="tabbar" aria-label="App">
            {tabs.map((t) => (
              <span key={t.label} className={`tab ${t.active ? 'active' : ''}`}>
                {t.icon}
                {t.label}
              </span>
            ))}
            <i className="home-indicator" />
          </nav>
        </div>
      </div>
    </div>
  )
}
