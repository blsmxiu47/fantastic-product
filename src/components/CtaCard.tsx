import { TCardProps } from "../lib/types"
// left: header (strong), text (p), learn more cta (a)
// right: image

const CtaCard = ({cardTitle, cardText, imageUrl,  imageAlt}: TCardProps) => {
    return (
        <div className="flex flex-row max-w-xs mx-auto text-white border rounded-xl shadow-lg overflow-hidden bg-gradient-to-r from-slate-800">
            <div className="w-[50%] p-4">
                <h3 className="font-bold text-base md:text-xl mb-2 text-white">{cardTitle}</h3>
                <p className="text-xs md:text-base text-white">{cardText}</p>
            </div>
            <div>
                <img src={imageUrl} alt={imageAlt} />
            </div>
        </div>
    )
}

export default CtaCard