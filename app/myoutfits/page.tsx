import { BaseLayout } from "@/components/Homepage"
import Image from 'next/image'

const OutfitBox = ({ items }: { items: string[] }) => (
  <div className="border-2 border-black p-4">
    <div className="grid grid-cols-2 gap-2">
      {items.map((item, index) => (
        <Image 
          key={index} 
          src={`/placeholder.svg`} 
          alt={item} 
          width={100} 
          height={100} 
          className={index === 0 ? "col-span-2" : ""}
        />
      ))}
    </div>
  </div>
)


export default function Page () {
  const outfits = [
    ['T-shirt', 'Pants', 'Shoes', 'Bag', 'Sunglasses', 'Accessory'],
    ['T-shirt', 'Pants', 'Shoes', 'Bag', 'Sunglasses', 'Watch'],
    ['Hoodie', 'Pants', 'Shoes', 'Bag', 'Sunglasses', 'Belt'],
    ['Hoodie', 'Pants', 'Shoes', 'Bag', 'Sunglasses', 'Accessory'],
  ]

  return <BaseLayout>
    <main className="flex-grow p-4 overflow-y-auto">
      <h2 className="text-xl font-bold text-center my-4">{`> YOUR OUTFITS <`}</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {outfits.map((outfit, index) => (
          <OutfitBox key={index} items={outfit} />
        ))}
      </div>
    </main>
  </BaseLayout>
}