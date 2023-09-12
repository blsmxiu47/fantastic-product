import EmailInput from "./EmailInput";
import CTA from "./CTA";

type Props = {
    title: string;
}

const Hero = ({ title }: Props) => {
    return (
        <div className="container text-center p-8">
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-6xl my-4 md:my-6  lg:my-8">{title}</h1>
            <div className="flex flex-row py-2 justify-center">
                <EmailInput />
                <CTA text="Get Started" />
            </div>
        </div>
    );
}

export default Hero;