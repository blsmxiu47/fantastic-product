import { TCardProps } from "../lib/types"

const ImageCard = ({ cardTitle, cardText, imageUrl, imageAlt }: TCardProps)  => {
    return (
        <div className="max-w-xs mx-auto px-4 pt-4 border rounded-xl shadow-lg overflow-hidden bg-gradient-to-r from-slate-800">
            <div className="px-6 py-4">
                <h3 className="font-bold text-base md:text-xl mb-2 text-white">{cardTitle}</h3>
                <p className="text-xs md:text-base text-white">{cardText}</p>
            </div>
            <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full"
            />
        </div>
    )
}

export default ImageCard