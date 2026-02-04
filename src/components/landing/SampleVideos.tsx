import { Play, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const SampleVideos = () => {
  const { t } = useLanguage();
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const samples = [
    {
      title: t("samples.ecommerce"),
      category: t("samples.ecommerceCategory"),
      gradient: "from-orange-500/20 to-red-500/20",
      video: "/videos/ecommerce.mp4",
    },
    {
      title: t("samples.restaurant"),
      category: t("samples.restaurantCategory"),
      gradient: "from-green-500/20 to-emerald-500/20",
      video: "/videos/restaurant.mp4",
    },
    {
      title: t("samples.education"),
      category: t("samples.educationCategory"),
      gradient: "from-blue-500/20 to-cyan-500/20",
      video: "/videos/education.mp4",
    },
    {
      title: t("samples.realestate"),
      category: t("samples.realestateCategory"),
      gradient: "from-purple-500/20 to-pink-500/20",
      video: "/videos/realestate.mp4",
    },
    {
      title: t("samples.fashion"),
      category: t("samples.fashionCategory"),
      gradient: "from-pink-500/20 to-rose-500/20",
      video: "/videos/fashion.mp4",
    },
    {
      title: t("samples.tech"),
      category: t("samples.techCategory"),
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

  const emailLink = "mailto:contact@edgeaihub.in?subject=AI%20Video%20Ad%20Inquiry";

  return (
    <section id="samples" className="py-20 md:py-32 relative" aria-labelledby="samples-heading">
      <div className="absolute inset-0 neural-bg opacity-30" aria-hidden="true" />
      
      <div className="container relative z-10">
        <header className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("samples.badge")}</span>
          <h2 id="samples-heading" className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            {t("samples.title")} <span className="text-gradient">{t("samples.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("samples.subtitle")}
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" role="list" aria-label="Sample video advertisements">
          {samples.map((sample, index) => (
            <article
              key={index}
              role="listitem"
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer border border-border/50 hover:border-primary/50 transition-all duration-300"
              onClick={() => handlePlayClick(index)}
              onKeyDown={(e) => e.key === 'Enter' && handlePlayClick(index)}
              tabIndex={0}
              aria-label={`Play ${sample.title} video`}
            >
              {sample.video ? (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={sample.video}
                  className="absolute inset-0 w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  onEnded={() => setPlayingVideo(null)}
                  aria-label={`${sample.title} video advertisement`}
                />
              ) : (
                <>
                  <div className={`absolute inset-0 bg-gradient-to-br ${sample.gradient}`} />
                  <div className="absolute inset-0 bg-card/50 backdrop-blur-sm" />
                </>
              )}
              
              {/* Play Button - hide when video is playing */}
              {(playingVideo !== index || !sample.video) && (
                <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
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
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
            </article>
          ))}
        </div>

        <footer className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            {t("samples.cta")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+917207926206" aria-label="Call us for AI video ads">
              <Button variant="hero" size="xl">
                <Phone className="w-5 h-5" aria-hidden="true" />
                {t("common.call")}: +91 7207926206
              </Button>
            </a>
            <a href={emailLink} aria-label="Email us for AI video ads">
              <Button variant="glass" size="xl">
                <Mail className="w-5 h-5" aria-hidden="true" />
                {t("common.email")}
              </Button>
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default SampleVideos;
