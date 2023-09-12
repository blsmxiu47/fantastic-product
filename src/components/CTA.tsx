// CTA component which takes text as a prop and renders a button with the text inside it.
type Props = {
    text: string;
}

const CTA = ({ text }: Props) => {
    return (
        <button className="min-w-fit my-2 px-4 py-2 text-white text-sm lg:text-lg xl:text-xl rounded-lg border border-white bg-pink-600 hover:bg-pink-400 active:bg-pink-500">{text}</button>
    );
}

export default CTA;