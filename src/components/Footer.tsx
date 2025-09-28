export default function Footer(){
  return (
    <footer className="container max-w-6xl py-10">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <div className="font-bold text-lg">Akula Chinna</div>
          <p className="text-neutral-600">Independent boutique. Timeless basics, seasonal edits.</p>
        </div>
        <form className="flex gap-2 justify-end">
          <input placeholder="Your email for new drops" className="max-w-xs w-full border rounded-lg px-3 py-2 text-sm" />
          <button className="rounded-xl px-4 py-2 bg-black text-white">Subscribe</button>
        </form>
      </div>
      <div className="text-xs text-neutral-500 mt-6">© {new Date().getFullYear()} Akula — Showcase only. No online sales.</div>
    </footer>
  )
}
