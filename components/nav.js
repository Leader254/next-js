import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="my-nav">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/news">News</Link>
    </div>
  )
}

export default Navbar