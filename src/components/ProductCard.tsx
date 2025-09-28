import type { Item } from '../types'

export default function ProductCard({item}:{item:Item}){
  return (
    <div className="rounded-2xl overflow-hidden bg-white border card-hover">
      <div className="aspect-[3/4] overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover"/>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-medium truncate">{item.name}</h3>
          {item.tags[0] && <span className="text-xs bg-black text-white px-2 py-0.5 rounded-full">{item.tags[0]}</span>}
        </div>
        <div className="text-sm text-neutral-600 flex items-center justify-between mt-1">
          <span>{item.color}</span>
          <span className="font-semibold text-neutral-900">{item.price}</span>
        </div>
      </div>
    </div>
  )
}
