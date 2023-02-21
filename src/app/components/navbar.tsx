import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='py-4 px-6 fixed top-0 w-full z-10'>
    <nav className="bg-custom-100 shadow ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-2">
            <Link href="/">
              <p className=''>
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={70}
                  height={70}
                  className="object-left"
                />
              </p>
            </Link>
          </div>  
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="https://www.piaic.org/howitworks">
                <p className="text-white hover:text-green-300 font-medium">How it works</p>
              </Link>
              <Link href="https://portal.piaic.org/signup">
                <p className="text-white hover:text-green-300 font-medium">Apply</p>
              </Link>
              <Link href="/contact">
                <p className="text-white hover:text-green-300 font-medium">Available programs</p>
              </Link>
              <Link href="/contact">
                <p className="text-white hover:text-green-300 font-medium">About</p>
              </Link>
              <Link href="https://www.piaic.org/wit">
                <p className="text-white hover:text-green-300 font-medium subpixel-antialiased">WIT</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </nav>
  )
}

export default Navbar