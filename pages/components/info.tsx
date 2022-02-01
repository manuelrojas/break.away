interface InfoProps {
    place: string;
}

export default function Info({ place } : InfoProps) {
    return (
        <div className="absolute bottom-2 right-0 bg-black bg-opacity-40 w-full rounded-3xl p-5 text-right">
            <h1 className="text-3xl text-white">
                16 feb
            </h1>
            <h1 className="text-white">
                {place}
            </h1>
            <p className="text-white medium-font">
                organiza...
            </p>
        </div>
    )
  }