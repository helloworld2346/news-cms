import HeroSection from "../components/HeroSection";
import FeaturedNews from "../components/FeaturedNews";
import QuickAccess from "../components/QuickAccess";
import InfoColumns from "../components/InfoColumns";
import VideoHighlight from "../components/VideoHighlight";
import ImageGallery from "../components/ImageGallery";
import LibraryStats from "../components/LibraryStats";
import SecurityBanner from "../components/SecurityBanner";
import NewsletterForm from "../components/NewsletterForm";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="mx-auto max-w-7xl space-y-12 px-6 py-10">
        <FeaturedNews />
        <QuickAccess />
        <InfoColumns />
        <VideoHighlight />
        <ImageGallery />
        <LibraryStats />
        <SecurityBanner />
        <NewsletterForm />
      </div>
    </>
  );
}
