import './globals.css'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'

const poppins= Poppins({
  weight:['400','500','600','700'],
  subsets:['latin']
})
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next js app',
  description: 'Next js is a powerful framework',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
 
        <main>
        
        {children}
        </main>
    
        </body>
    </html>
  )
}
