import Navigator from '@/components/Navigator'
import ContextProvider from '@/lib/context'
import 'overlayscrollbars/overlayscrollbars.css'
import './globals.css'

export const metadata = {
  title: '玖捌网',
  description: '',
  icons: {
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme-color='red'>
      {/* <body className="bg-default-bg text-default-fg"> */}
        <ContextProvider>
          <Navigator>{children}</Navigator>
        </ContextProvider>
      {/* </body> */}
    </html>
  )
}
