
import AboutPreview from "../components/home/about";
import ContactCTA from "../components/home/contactCTA";
import FeaturedProjects from "../components/home/featured_project";
import Hero from "../components/home/hero";
import ServicesPreview from "../components/home/services";


const Home = () => {
  return (
    <>
      <Hero />

      <AboutPreview />

      <FeaturedProjects />

      <ServicesPreview />

      <ContactCTA />
    </>
  );
};

export default Home;