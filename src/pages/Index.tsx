import Hero from "@/components/Hero";
import SinglesCarousel from "@/components/SinglesCarousel";
import VibeRecords from "@/components/VibeRecords";

const Index = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
            <Hero />
            <SinglesCarousel />
            <VibeRecords />
        </div>
    );
};

export default Index;
