import Image from 'next/image'

export default function Main() {
    return (
        <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
            <Image
                src="/imgs/illustration_page.png"
                alt="Picture of the author"
                height={1100}
                width={1375}
            />
        </main>
    )
  }


