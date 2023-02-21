import Link from 'next/link';

const Subs = () => {
    return (
        <div className="flex justify-center grid grid-cols-1  sm:grid-cols-4 gap-4">
          
        <Link href="https://www.piaic.org/artificial-inteligence" className="group block max-w-xs mx-auto rounded-lg p-6 bg-custom-100 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
          <div className="flex items-center space-x-3">
            <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
            <h3 className="text-white group-hover:text-white text-2xl font-semibold">AI - ARTIFICIAL INTELLIGENCE</h3>
          </div>
          <p className="text-white group-hover:text-white text-sm">A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.</p>
        </Link>

  
        <Link href="https://www.piaic.org/cloud-native" className="group block max-w-xs mx-auto rounded-lg p-6 bg-custom-200 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
          <div className="flex items-center space-x-3">
            <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
            <h3 className="text-white group-hover:text-white text-2xl font-semibold uppercase">Cloud Native and Mobile Web</h3>
          </div>
          <p className="text-white group-hover:text-white text-sm">A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING.</p>
        </Link>

        <Link href="https://www.piaic.org/block-chain" className="group block max-w-xs mx-auto rounded-lg p-6 bg-custom-300 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
          <div className="flex items-center space-x-3">
            <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
            <h3 className="text-white group-hover:text-white text-2xl font-semibold">BLOCKCHAIN</h3>
          </div>
          <p className="text-white group-hover:text-blue-500 text-sm">A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND SMART CONTRACTS.</p>
        </Link>

  
        <Link href="https://www.piaic.org/iot" className="group block max-w-xs mx-auto rounded-lg p-6 bg-custom-400 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
          <div className="flex items-center space-x-3">
            <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
            <h3 className="text-white group-hover:text-white text-2xl font-semibold">INTERNET OF THINGS AND AI</h3>
          </div>
          <p className="text-white group-hover:text-white text-sm">A FIFTEEN MONTHS IOT AND AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF INTERNET OF THINGS AND AI.</p>
        </Link>
      </div>
    );
  }
export default Subs