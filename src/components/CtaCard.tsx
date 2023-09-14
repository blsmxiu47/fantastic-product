import { TCardProps } from "../lib/types"
// left: header (strong), text (p), learn more cta (a)
// right: image

const CtaCard = ({cardTitle, cardText, imageUrl,  imageAlt}: TCardProps) => {
    return (
        <div>
            <div>
                <h3>
                    {cardTitle}
                </h3>
                <p>
                    {cardText}
                </p>
            </div>
            <div>
                <img src={imageUrl} alt={imageAlt} />
            </div>
        </div>
    )
}

export default CtaCard