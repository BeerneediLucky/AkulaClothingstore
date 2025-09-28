import React from 'react'

const NAV = ['All', 'Men', 'Women', 'Boys', 'Girls'] as const

export default function Header({active, setActive, q, setQ}:{active:string, setActive:(s:string)=>void, q:string, setQ:(s:string)=>void}) {
  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-neutral-200">
      <div className="container max-w-6xl py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="font-extrabold tracking-tight text-xl">Akula Clothes Store.</div>
          <span className="text-xs px-2 py-1 rounded-full bg-black text-white hidden md:inline">Showcase</span>
        </div>
        <nav className="hidden md:flex gap-1">
          {NAV.map(c => (
            <button key={c} onClick={()=>setActive(c)} className={`px-3 py-1 rounded-full ${active===c ? 'bg-black text-white' : 'hover:bg-neutral-100'}`}>{c}</button>
          ))}
        </nav>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search items…" className="w-40 md:w-64 rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 ring-neutral-200"/>
      </div>
    </header>
  )
}
