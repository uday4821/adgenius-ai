import { Play, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

const SampleVideos = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const samples = [
    {
      title: "E-commerce Product Ad",
      category: "Online Store",
      gradient: "from-orange-500/20 to-red-500/20",
      video: null,
    },
    {
      title: "Hot Coffee That Sells Itself",
      category: "Café & Restaurant Ads",
      gradient: "from-green-500/20 to-emerald-500/20",
      video: "/videos/restaurant.mp4",
    },
    {
      title: "Coaching Institute",
      category: "Education",
      gradient: "from-blue-500/20 to-cyan-500/20",
      video: null,
    },
    {
      title: "Real Estate Showcase",
      category: "Property",
      gradient: "from-purple-500/20 to-pink-500/20",
      video: "/videos/realestate.mp4",
    },
    {
      title: "Fashion Brand Launch",
      category: "D2C Brand",
      gradient: "from-pink-500/20 to-rose-500/20",
      video: null,
    },
    {
      title: "Tech Startup Demo",
      category: "SaaS / App",
      gradient: "from-cyan-500/20 to-blue-500/20",
      video: "/videos/cgiads.mp4",
    },
  ];

  const handlePlayClick = (index: number) => {
    if (samples[index].video) {
      if (playingVideo === index) {
        videoRefs.current[index]?.pause();
        setPlayingVideo(null);
      } else {
        if (playingVideo !== null && videoRefs.current[playingVideo]) {
          videoRefs.current[playingVideo]?.pause();
        }
        setPlayingVideo(index);
        videoRefs.current[index]?.play();
      }
    }
  };

  const whatsappLink = "https://wa.me/918919400755?text=Hi%20EdgeAIHub!%20I%20saw%20the%20sample%20videos%20and%20want%20an%20ad%20like%20that!";

  return (
    <section id="samples" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 neural-bg opacity-30" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Real Examples</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            See Real <span className="text-gradient">AI Ads We Create</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These are actual sample videos. This is the <strong className="text-foreground">exact quality</strong> you will receive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {samples.map((sample, index) => (
            <div
              key={index}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer border border-border/50 hover:border-primary/50 transition-all duration-300"
              onClick={() => handlePlayClick(index)}
            >
              {sample.video ? (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={sample.video}
                  className="absolute inset-0 w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  onEnded={() => setPlayingVideo(null)}
                />
              ) : (
                <>
                  <div className={`absolute inset-0 bg-gradient-to-br ${sample.gradient}`} />
                  <div className="absolute inset-0 bg-card/50 backdrop-blur-sm" />
                </>
              )}
              
              {/* Play Button - hide when video is playing */}
              {(playingVideo !== index || !sample.video) && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/50">
                    <Play className="w-6 h-6 text-primary fill-primary" />
                  </div>
                </div>
              )}
              
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">{sample.category}</span>
                <h3 className="font-semibold mt-1">{sample.title}</h3>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Want an ad like this for your business?
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl">
              <MessageCircle className="w-5 h-5" />
              Chat with Us on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SampleVideos;
