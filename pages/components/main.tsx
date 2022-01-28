import Image from 'next/image'

export default function Main() {
    return (
        <main className="flex w-full flex-1 flex-col">
             <div className="absolute left-1/4 sm:left-1/3 md:left-1/4 lg:left-1/3">
                 <div className="flex items-center flex-col">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">¡Este podría</h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">ser tu ride!</h1>
                    <button className="bg-transparent md:mt-10 hover:bg-blue-700 border border-break.away-blue font-bold py-2 px-4 rounded-full">
                        Más info
                    </button>
                </div>
            </div>
            <div className="absolute top-1/3 sm:top-1/2 left-1/2 ">  
               <h1 className="text-2xl sm:text-4xl">
                    Sé parte de
                </h1>
                <h1 className="text-3xl sm:text-5xl text-break.away-blue">
                    Break.Away
                </h1>
                <div className="w-4/5">
                    <p className="pt-5 medium-font text-justify">
                        Somos un proyecto qué busca fortalecer la comunidad ciclista, publicitando distintos eventos que se organizan en el país. 
                    </p>
                    <p className="text-break.away-blue pt-5 medium-font text-justify">
                        Pronto podrás inscribirte a cualquiera de los eventos o inclusive publicar eventos.
                    </p> 
                </div>
            </div> 
               
            <Image
                src="/imgs/illustration_page.png"
                alt="Picture of the author"
                height={847}
                width={1187}
            />
        </main>
    )
  }


