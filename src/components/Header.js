import { Link } from 'gatsby'
import React from 'react'

const Header = () => (
  <header className="flex border-b border-gray-300 justify-between p-4 md:px-0 relative">
    <div
      className="h-1 absolute top-0 left-0 right-0"
      style={{
        background:
          'linear-gradient(45deg, hsl(334, 38%, 80%), hsl(334, 38%, 60%))',
      }}
    />
    <div className="w-full md:w-8/12 mx-auto font-semibold text-sm">
      <Link to="/">rickard</Link>
    </div>
  </header>
)

export default Header
