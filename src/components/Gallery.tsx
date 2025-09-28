import type { Item } from '../types'
import ProductCard from './ProductCard'

export default function Gallery({items}:{items:Item[]}){
  if(!items.length) return <p className="text-neutral-600">No items match your search.</p>
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map(i => <ProductCard key={i.id} item={i} />)}
    </div>
  )
}
