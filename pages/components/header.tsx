
export default function Header() {
  return (
    <div className="border border-b-black  mb-10">
        <nav className="flex flex-row justify-between m-5">
            <h1 className="text-break.away-blue text-2xl">Break.Away</h1>
            <a href="#subscribe">
              <button className="bg-break.away-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Suscribirse
              </button>
            </a>
         
        </nav>      
    </div>
  )
}
