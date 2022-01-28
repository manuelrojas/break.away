import Image from 'next/image'

export default function List() {
    return (
      <div className="flex flex-row content-between gap-10 justify-center mt-20">
           <Image
                src="/imgs/unsplash_96rlfzZ6LwY.png"
                alt="Picture of the author"
                height={397}
                width={404}
            />
            <Image
                src="/imgs/unsplash_WUehAgqO5hE.png"
                alt="Picture of the author"
                height={50}
                width={404}
            />
             <Image
                src="/imgs/unsplash_ymw6pRRZtIY.png"
                alt="Picture of the author"
                height={397}
                width={404}
            />
      </div>
    )
  }
  