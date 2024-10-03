import HeroSection from "@/components/hero_section/HeroSection";
import PageSearch from "@/components/page_search/PageSearch";
import Gallery from "@/components/gallery/Gallery";
import Newsletter from "@/components/newsletter/Newsletter";
import FeaturedRoom from "@/components/featured_room/FeaturedRoom";
import { getFeaturedRoom } from "@/libs/apis";

const Home = async () => {
  const featuredRoom = await getFeaturedRoom();

  return (
    <>
      <HeroSection />
      <PageSearch />
      <FeaturedRoom featuredRoom={featuredRoom} />
      <Gallery />
      <Newsletter />
    </>
  );
};

export default Home;
