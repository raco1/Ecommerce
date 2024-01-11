import { Header } from '@/components/header'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8'>
      <Header />
      <h1>Hello World</h1>
    </div>
  )
}
