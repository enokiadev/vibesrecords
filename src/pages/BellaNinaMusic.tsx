import VinylAlbumCard from "@/components/VinylAlbumCard";

const musicList = [
    {
        title: "Tick Tock",
        artist: "Bella Nina",
        year: "2025",
        image: "https://img.youtube.com/vi/qJjrE027N2M/maxresdefault.jpg",
        streamLink: "https://sndo.ffm.to/zljaokz"
    },
    {
        title: "Bubble Gum",
        artist: "Bella Nina",
        year: "2025",
        image: "https://img.youtube.com/vi/92NtDw11i3Q/maxresdefault.jpg",
        streamLink: "https://sndo.ffm.to/pvdbkew"
    },
    {
        title: "Limitless",
        artist: "Bella Nina",
        year: "2025",
        image: "https://img.youtube.com/vi/61KyxoRno1Q/maxresdefault.jpg",
        streamLink: "https://youtu.be/61KyxoRno1Q?si=UfUKnv31yTnW8Hqx"
    },
    {
        title: "Thank God",
        artist: "Bella Nina",
        year: "2025",
        image: "https://img.youtube.com/vi/hMh_VWfglpQ/maxresdefault.jpg",
        streamLink: "https://youtu.be/hMh_VWfglpQ?si=id5_H3bqxNYimfEY"
    }
];

const BellaNinaMusic = () => {
    return (
        <div className="pt-24 min-h-screen bg-background container mx-auto px-4">
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">BELLA NINA MUSIC</h1>
                <p className="text-xl text-white/60">Stream the latest hits from the BELLAVERSE.</p>
            </div>

            <div className="space-y-8 max-w-6xl mx-auto">
                {musicList.map((track, index) => (
                    <VinylAlbumCard
                        key={index}
                        title={track.title}
                        artist={track.artist}
                        year={track.year}
                        image={track.image}
                        streamLink={track.streamLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default BellaNinaMusic;
