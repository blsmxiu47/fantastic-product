// define image type
type Props = {
    imageUrl: string,
    imageTitle: string,
    cardTitle: string,
    cardText: string,
}

const ImageCard = ({ imageUrl, imageTitle, cardTitle, cardText }: Props)  => {
    return (
        <div className="m-4 md:m-8 px-4 pt-4 border rounded-xl shadow-lg overflow-hidden bg-gradient-to-r from-slate-800">
            <div className="px-6 py-4">
                <h3 className="font-bold text-base md:text-xl mb-2 text-white">{cardTitle}</h3>
                <p className="text-xs md:text-base text-white">{cardText}</p>
            </div>
            <img
                src={imageUrl}
                alt={imageTitle}
                className="w-full"
            />
        </div>
    )
}

export default ImageCard