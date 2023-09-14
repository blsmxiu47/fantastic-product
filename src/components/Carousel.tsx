type Props = {
    urls: Array<string>;
}

const Carousel = ({ urls }: Props ) => {
    return (
        <div className="relative overflow-hidden">
            <ul className="animate-scroll whitespace-nowrap opacity-70">
                {Array(3)
                    .fill(null)
                    .map((_, i) => (
                        <>
                            {urls.map((url, index) => (
                                <li key={index + i * urls.length} className="inline-block px-2">
                                    <img src={url} alt="" className="w-24 h-16 object-cover" />
                                </li>
                            ))}
                        </>
                    ))}
            </ul>
        </div>
    )
}

export default Carousel