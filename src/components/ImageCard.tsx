// define image type
type Props = {
    imageUrl: string,
    imageTitle: string,
    cardTitle: string,
    cardText: string,
}

const ImageCard = (props: Props) => {
    return (
        <div className="rounded shadow-lg overflow-hidden">
            <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">{props.cardTitle}</h3>
                <p className="text-base">{props.cardText}</p>
            </div>
            <img
                src={props.imageUrl}
                alt={props.imageTitle}
                className="w-full"
            />
        </div>
    )
}

export default ImageCard