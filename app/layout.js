import MainContainer from './components/maincontainer/MainContainer'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'News Sentinel',
  description: 'Developed by Team Gatiman - NSUT',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#3426ae] w-full h-full flex">
          <Navbar />
          <MainContainer>
            {children}
          </MainContainer>
        </div>
      </body>
    </html>
  )
}
