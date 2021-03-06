import React from "react"

import Header from "./header"

function Layout( { children } ) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="flex-1  w-full ">
        {children}
      </main>

      <footer className="bg-blue-700">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white">
            Created with {` `}
            <a
              className="font-bold no-underline"
            >
              Gurprasad 
            </a>
            {` `} by FatehKhalsaTech
          </p>

          <p>
            <a
              className="font-bold text-white no-underline"
              href="https://github.com/FatehKhalsaTech/akalustat.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
    </div>
  )
}


export default Layout
