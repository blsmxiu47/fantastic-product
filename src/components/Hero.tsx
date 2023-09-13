import EmailInput from "./EmailInput";
import CTA from "./CTA";

type Props = {
    title: string;
    subtitle: string;
}

const Hero = ({ title, subtitle }: Props) => {
    return (
        <div className="container text-center p-8">
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-6xl my-4 md:my-6 lg:my-8">{title}</h1>
            <p className="text-white text-base md:text-lg lg:text-xl xl:text-2xl my-6 md:my-8 lg:my-10">{subtitle}</p>
            <div className="flex flex-col md:flex-row md:mx-6 lg:mx-10 py-2 justify-center">
                <EmailInput />
                <CTA text="Get Started" />
            </div>
        </div>
    );
}

export default Hero;