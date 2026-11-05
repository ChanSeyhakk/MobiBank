import StoreButtons from './StoreButtons.jsx'
import PhoneMockup from './PhoneMockup.jsx'

export default function Hero() {
  return (
    <main className="mx-auto grid min-h-[calc(100vh-96px)] max-w-[1280px] grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] items-center px-[clamp(20px,6.5vw,84px)] max-[1000px]:min-h-0 max-[1000px]:grid-cols-1 max-[1000px]:pb-10">
      <section className="py-10 pb-[120px] max-[1000px]:pb-0">
        <span className="inline-flex rounded-full bg-[#dcebfd] px-[18px] py-[9px] text-[16px] font-semibold text-brand">Banking, Made Simple</span>
        <h1 className="mt-[30px] text-[clamp(44px,5.6vw,72px)] font-bold leading-[1.12] tracking-[-1.5px] text-navy max-[520px]:text-[clamp(42px,12vw,60px)]">
          Your Bank
          <br />
          in Your Pocket
        </h1>
        <p className="mt-[26px] max-w-[470px] text-[20px] leading-[1.55] text-[#4a5878] max-[520px]:text-[18px]">
          Manage your money, pay bills, and reach your financial goals — anytime,
          anywhere. All from the MobiBank mobile app.
        </p>
        <StoreButtons />
      </section>

      <section className="relative mx-auto h-[720px] w-full max-w-[520px] max-[1000px]:h-[680px] max-[520px]:h-[620px]" aria-label="MobiBank app preview">
        <PhoneMockup />
      </section>
    </main>
  )
}
