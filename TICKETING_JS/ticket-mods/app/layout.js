import Nav from './(components)/Nav';
import { Inter } from 'next/font/google'
import './globals.css'

import {config} from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tickets App',
  description: 'Generated by Meet the Woo!',
  // create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
         <Nav /> {/* If we want to show up Navigation in our every page */}
         <div className="flex-grow overflow-y-auto text-default-text bg-black"> {children} </div>
        </div>
        </body>
    </html>
  )
}
