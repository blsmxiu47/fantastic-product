import Hero from "../components/Hero";
import ImageCard from "../components/ImageCard";
import Carousel from "../components/Carousel";
import CtaCard from "../components/CtaCard";

// Home Hero
// Home Section 1
// Full width card, big image or video or gif or carousel of one of these asset types
// Home Section 2
// image cards, 3 cols
// Home Section 3
// testimony cards in-and-out transition (card: quote, author, Learn More -> link)
// Home Section 4
// CTA cards, custom grid, like 1row col, then 3row col (on md+)

const Home = () => {
    return (
        <div className="container">
            <Hero title="WELCOME to your future" subtitle="Synergize your team's energy through the power of intelligence" />
            <section className="container">
                <div>
                    <img src="https://placehold.jp/1200x800.png" alt="placeholder" className="w-full" />
                </div>
            </section>
            <section className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-4">
                    <ImageCard
                        imageUrl="https://placehold.jp/150x120.png"
                        imageAlt="Placeholder"
                        cardTitle="Something great is here"
                        cardText="Don't you want to know what it is? Let's find out together."
                    />
                    <ImageCard
                        imageUrl="https://placehold.jp/150x120.png"
                        imageAlt="Placeholder"
                        cardTitle="Something great is here"
                        cardText="Don't you want to know what it is? Let's find out together."
                    />
                    <ImageCard
                        imageUrl="https://placehold.jp/150x120.png"
                        imageAlt="Placeholder"
                        cardTitle="Something great is here"
                        cardText="Don't you want to know what it is? Let's find out together."
                    />
                    <ImageCard
                        imageUrl="https://placehold.jp/150x120.png"
                        imageAlt="Placeholder"
                        cardTitle="Something great is here"
                        cardText="Don't you want to know what it is? Let's find out together."
                    />
                    <ImageCard
                        imageUrl="https://placehold.jp/150x120.png"
                        imageAlt="Placeholder"
                        cardTitle="Something great is here"
                        cardText="Don't you want to know what it is? Let's find out together."
                    />
                    <ImageCard
                        imageUrl="https://placehold.jp/150x120.png"
                        imageAlt="Placeholder"
                        cardTitle="Something great is here"
                        cardText="Don't you want to know what it is? Let's find out together."
                    />
                </div>
            </section>
            <section className="container">
                <Carousel urls={["https://placehold.jp/90x60.png", "https://placehold.jp/90x60.png", "https://placehold.jp/90x60.png", "https://placehold.jp/90x60.png", "https://placehold.jp/90x60.png", "https://placehold.jp/90x60.png"]} />
            </section>
            <section className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div>
                        <CtaCard
                            imageUrl="https://placehold.jp/150x120.png"
                            imageAlt="Placeholder"
                            cardTitle="Something great is here"
                            cardText="Don't you want to know what it is? Let's find out together."
                        
                        />
                        <CtaCard
                            imageUrl="https://placehold.jp/150x120.png"
                            imageAlt="Placeholder"
                            cardTitle="Something great is here"
                            cardText="Don't you want to know what it is? Let's find out together."
                        
                        />
                        <CtaCard
                            imageUrl="https://placehold.jp/150x120.png"
                            imageAlt="Placeholder"
                            cardTitle="Something great is here"
                            cardText="Don't you want to know what it is? Let's find out together."
                        
                        />
                    </div>
                    <div className="grid grid-cols-1">
                        <CtaCard
                            imageUrl="https://placehold.jp/150x120.png"
                            imageAlt="Placeholder"
                            cardTitle="Something great is here"
                            cardText="Don't you want to know what it is? Let's find out together."
                        
                        />
                    </div>                        
                </div>
            </section>
        </div>
    )
}

export default Home;