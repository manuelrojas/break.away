const Fade = require('react-reveal/Fade');

export default function Banner() {
    return (
        <>
         
            <div className="bg-break.away-blue px-20 py-10 mt-10 flex justify-center">
                <Fade top>
                    <h1 className="max-w-sm  text-white text-4xl text-center">¡Atrévete a vivir el ride que siempre soñaste!</h1>
                </Fade>
            </div>

          
            <div className="flex flex-col justify-center items-center pt-10">
                <Fade top>
                    <h1 className="text-4xl text-center max-w-sm ">
                        ¿Te gustaría compartir algún evento?
                    </h1>
                    <span className="text-center max-w-sm pt-10">
                        Escríbenos, y te contactaremos con
                        más información de este proyecto.
                    </span>
                </Fade>
            </div>

      </>
    )
  }
  