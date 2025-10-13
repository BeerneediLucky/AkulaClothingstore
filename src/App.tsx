import { useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import StoreInfo from './components/StoreInfo'
import Footer from './components/Footer'
import { ITEMS } from './data/items'
import type { Category } from './types'
import OwnerSpotlight from './components/OwnerSpotlight';

const CATEGORIES: Category[] = ['All','Men','Women','Boys','Girls']
// Test
export default function App(){
  const [active, setActive] = useState<Category>('All')
  const [q, setQ] = useState('')

  const filtered = useMemo(()=>{
    return ITEMS.filter(i => (active === 'All' || i.category === active) && i.name.toLowerCase().includes(q.toLowerCase()))
  }, [active, q])
//Test-2
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header active={active} setActive={(s)=>setActive(s as Category)} q={q} setQ={setQ} />
      <Hero/>
      <section className="container max-w-6xl py-8 md:py-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Catalog</h2>
          <div className="flex gap-2 text-sm">
            {CATEGORIES.map(c => (
              <button key={c} onClick={()=>setActive(c)} className={`px-3 py-1 rounded-full ${active===c ? 'bg-black text-white' : 'border'}`}>{c}</button>
            ))}
          </div>
        </div>
        <Gallery items={filtered} />
      </section>
      {/* <Lookbook/> */}
      <OwnerSpotlight/>
      <StoreInfo/>
      <Footer/>
    </div>
  )
}
