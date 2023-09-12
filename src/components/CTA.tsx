// CTA component which takes text as a prop and renders a button with the text inside it.
type Props = {
    text: string;
}

const CTA = ({ text }: Props) => {
    return (
        <button className="bg-pink-600 text-white rounded-lg border border-white mx-2 text-xs md:text-sm lg:text-lg xl:text-xl min-w-fit px-4 py-2">{text}</button>
    );
}

export default CTA;