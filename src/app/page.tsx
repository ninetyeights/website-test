'use client'
import { _nav } from '@/constants/nav'
import { useAppContext } from '@/lib/context'
import Link from 'next/link'

const colors = [
  'bg-purple-400/90 dark:bg-purple-900/30',
  'bg-orange-400/90 dark:bg-orange-900/30',
  'bg-cyan-500/90 dark:bg-cyan-900/30',
  'bg-rose-400/90 dark:bg-rose-900/30',
  'bg-green-500/90 dark:bg-green-900/30',
  'bg-pink-500/90 dark:bg-pink-900/30',
]

export default function Home() {
  const { isWide } = useAppContext()
  console.log(isWide)
  return (
    <main
      className={`container mt-6 space-y-4${isWide ? '' : ' lg:max-w-4xl'}`}
    >
      <div
        className={`grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 ${
          isWide ? 'lg:grid-cols-4 xl:grid-cols-5' : ''
        } gap-4`}
      >
        {_nav.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            style={{
              transition: 'transform .4s cubic-bezier(0.34, 2.60, 0.64, 1)',
            }}
            className={`${colors[index]} group home__card text-white block h-36 rounded-lg p-4 shadow-lg space-y-1`}
          >
            <div className="flex items-center justify-between">
              <h4 className="text-xl">{item.name}</h4>
              {/* {item.icon} */}
            </div>
            <p className="text-sm">{item.description}</p>
          </Link>
        ))}
      </div>
      <div>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
        <p>
          aoisdjfpoaidjf opahd fjapodf haiosdfjopaidjfpoasjdfp oajpdfiajsdpo{' '}
        </p>
      </div>
    </main>
  )
}
