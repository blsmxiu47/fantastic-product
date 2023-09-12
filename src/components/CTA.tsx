// CTA component which takes text as a prop and renders a button with the text inside it.
type Props = {
    text: string;
}

const CTA = ({ text }: Props) => {
    return (
        <button className="btn btn-primary">{text}</button>
    );
}

export default CTA;