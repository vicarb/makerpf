import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-sky-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <h2 className="text-white font-semibold text-lg ">Víctor Cárdenas</h2>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/about">
                <h2 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</h2>
              </Link>
              <Link href="/contact">
                <h2 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
