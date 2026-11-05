import { useState } from 'react'
import { Apple, Play } from './Icons.jsx'

export default function StoreButtons() {
  const [notice, setNotice] = useState('')

  return (
    <div className="mt-9">
      <div className="flex flex-wrap gap-4">
        <button className="flex h-[52px] items-center gap-2.5 rounded-[9px] border border-[#2b2b2b] bg-black px-4 text-white transition hover:-translate-y-0.5" type="button" onClick={() => setNotice('MobiBank is not available on the App Store yet.')}>
          <Apple />
          <span className="flex flex-col text-left leading-none">
            <small className="text-[11px] tracking-[.2px]">Download on the</small>
            <strong className="mt-[3px] text-[20px] font-medium tracking-[-.3px]">App Store</strong>
          </span>
        </button>
        <button className="flex h-[52px] items-center gap-2.5 rounded-[9px] border border-[#2b2b2b] bg-black px-4 text-white transition hover:-translate-y-0.5" type="button" onClick={() => setNotice('MobiBank is not available on Google Play yet.')}>
          <Play />
          <span className="flex flex-col text-left leading-none">
            <small className="text-[11px] tracking-[.2px]">GET IT ON</small>
            <strong className="mt-[3px] text-[20px] font-medium tracking-[-.3px]">Google Play</strong>
          </span>
        </button>
      </div>
      {notice && <p className="mt-4 max-w-md text-sm text-navy" role="status">{notice} <a className="font-semibold text-brand underline" href="#features">Explore features</a></p>}
    </div>
  )
}
