import Subs from './components/subs'
import './globals.css'
import DNavbar from './components/dnavbar'
import Navbar from './components/navbar'
import React  from 'react'
import { useEffect, useState } from 'react'
import Team from './components/team'
import Cora from './components/cora'
import Footer from './components/footer'
import Logs from './components/logs'
import Metatag from './components/metatag'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head />
      <body>
        <Navbar />
        
        {children}</body>
        <DNavbar />
        <br />
        <br />
        <Cora />
        <br />
        <br />
        <Subs />
        <br />
        <Metatag/>
        <Team />
        <Logs/>
        <Footer/>
        
    </html>
  )
}



