'use client'
import { useAppContext } from '@/lib/context'

const PageTools = () => {
  const { isWide } = useAppContext()

  return (
    <main
      className={`container mt-6 space-y-4${isWide ? '' : ' lg:max-w-4xl'}`}
    >
      <h1 className='text-xl text-center'>Hello</h1>
    </main>
  )
}

export default PageTools
