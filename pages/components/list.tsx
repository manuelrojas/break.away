import Image from 'next/image'
const Fade = require('react-reveal/Fade');
import Info from './info'

export default function List() {
    return (
      <Fade left> 
        <div className="flex flex-col md:flex-row content-between gap-10 justify-center mt-10 px-20">
            <div className="relative">
              <Image
                    src="/imgs/unsplash_96rlfzZ6LwY.png"
                    alt="Picture of the author"
                    height={397}
                    width={404}
                />
                <Info place="Puriscal Ride" />
            </div>
            <div className="relative">
              <Image
                  src="/imgs/unsplash_WUehAgqO5hE.png"
                  alt="Picture of the author"
                  height={397}
                  width={404}
              />
              <Info place="Volcán Poás" />
            </div>
            <div className="relative">
              <Image
                  src="/imgs/unsplash_ymw6pRRZtIY.png"
                  alt="Picture of the author"
                  height={397}
                  width={404}
              />
              <Info place="Volcán Irazú" />
            </div>
        </div>
      </Fade> 
    )
  }
  