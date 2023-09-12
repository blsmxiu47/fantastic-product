import EmailInput from "./EmailInput";
import CTA from "./CTA";

type Props = {
    title: string;
}

const Hero = ({ title }: Props) => {
    return (
        <div className="container text-center p-8">
            <h1 className="text-white text-xl">{title}</h1>
            <div className="flex flex-row">
                <EmailInput />
                <CTA text="Get Started" />
            </div>
        </div>
    );
}

export default Hero;