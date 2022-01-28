import { useState } from 'react'
import { Navbar, Welcome, Foot, Services ,Transactions } from './components'

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Foot/>
    </div>
  )
}

export default App
