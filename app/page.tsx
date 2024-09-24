import { BaseLayout } from '@/components/Homepage'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="w-full max-w-md h-full">
      <BaseLayout>
        <>
        <div className="bg-black text-white text-xs py-1 px-4 whitespace-nowrap overflow-hidden">
          <div className="animate-marquee">
            NUOVA COLLEZIONE 2024 NUOVA COLLEZIONE 2024 NUOVA COLLEZIONE 2024
          </div>
        </div>
        <Image
          src="/placeholder.svg"
          alt="2024 Collection"
          width={400}
          height={200}
          className="w-full object-cover"
        />
        <h2 className="text-2xl font-bold text-center my-4">HOME</h2>
        <div className="grid grid-cols-2 gap-4 p-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border rounded-lg p-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
                <span className="text-sm">User_{i}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[...Array(6)].map((_, j) => (
                  <div key={j} className="bg-gray-100 aspect-square" />
                ))}
              </div>
            </div>
          ))}
        </div>
        </>
      </BaseLayout>
    </main>
  )
}
