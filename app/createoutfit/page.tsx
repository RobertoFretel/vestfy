import { BaseLayout } from "@/components/Homepage";
import Image from "next/image";

export default function Page () {
  return <BaseLayout>
    <main className="flex-grow p-4">
      <h2 className="text-xl font-bold text-center my-4">{`> OUTFIT CREATOR <`}</h2>
      
      <div className="border-2 border-black p-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <Image src="/placeholder.svg" alt="T-shirt" width={150} height={150} className="col-span-2" />
          <Image src="/placeholder.svg" alt="Pants" width={150} height={150} />
          <div className="grid grid-cols-2 gap-2">
            <Image src="/placeholder.svg" alt="Accessory 1" width={70} height={70} />
            <Image src="/placeholder.svg" alt="Accessory 2" width={70} height={70} />
            <Image src="/placeholder.svg" alt="Accessory 3" width={70} height={70} />
            <Image src="/placeholder.svg" alt="Accessory 4" width={70} height={70} />
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-center my-4">{`> PANTS <`}</h3>
      <div className="grid grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <Image key={i} src="/placeholder.svg" alt={`Pants option ${i+1}`} width={150} height={150} />
        ))}
      </div>
    </main>
  </BaseLayout>
}