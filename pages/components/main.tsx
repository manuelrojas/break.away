import Image from 'next/image'
const Fade = require('react-reveal/Fade');

export default function Main() {
    return (
        <main>
            <div className="flex flex-col md:flex-row justify-center mb-10 md:mb-20">
                <div className="flex items-center flex-col">
                    <h1 className="text-5xl lg:text-6xl">¡Este podría</h1>
                    <h1 className="text-5xl lg:text-6xl">ser tu ride!</h1>
                    <a>
                        <button className="bg-transparent mt-5 md:mt-1 hover:bg-break.away-blue hover:text-white border border-break.away-blue font-bold py-2 px-4 rounded-full">
                            Más info
                        </button>
                    </a>
                </div>
                <div>
                    <div className="md:hidden flex justify-center gap-8 mt-1">  
                        <Fade left>
                            <div className="mt-20">
                                <Image
                                    src="/imgs/illustration_2.png"
                                    alt="cyclistTwo"
                                    height={172}
                                    width={173}
                                />
                            </div>
                        </Fade>           
                        <Fade right>    
                            <div className="mt-5">
                                <Image
                                    src="/imgs/illustration_1.png"
                                    alt="cyclistOne"
                                    height={143}
                                    width={129}
                                    className="self-end"
                                /> 
                            </div>
                        </Fade>
                    </div>
                    <Fade right>
                        <div className="hidden md:block md:absolute md:mt-10">
                            <Image
                                src="/imgs/illustration_1.png"
                                alt="cyclistOne"
                                height={426}
                                width={370}  
                            />
                        </div>
                    </Fade>
               </div>
            </div>
           
            <div className="flex flex-col md:flex-row justify-center"> 
                <Fade left>
                    <div className="hidden md:block">
                        <Image
                            src="/imgs/illustration_2.png"
                            alt="cyclistTwo"
                            height={535}
                            width={515}
                        />
                    </div> 
                </Fade>
                <div id="info" className="text-center md:text-left self-center mx-20 md:mt-10">
                    <h1 className="text-2xl sm:text-4xl">
                        Sé parte de
                    </h1>
                    <h1 className="text-3xl sm:text-5xl text-break.away-blue">
                        Break.Away
                    </h1>
                    <div className="max-w-sm">
                        <p className="pt-5 medium-font text-center md:text-justify">
                            Somos un proyecto qué busca fortalecer la comunidad ciclista, publicitando distintos eventos que se organizan en el país. 
                        </p>
                        <p className="text-break.away-blue pt-5 medium-font text-center md:text-justify">
                            Pronto podrás inscribirte a cualquiera de los eventos o inclusive publicar eventos.
                        </p> 
                    </div>
                </div>
            </div>    
        </main>
    )
  }


