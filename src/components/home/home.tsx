import DoorEntrance from "../DoorEntrance";
import Hero from "./hero";


const Home = () => {
  return (
    <>
      {/* Entrance */}
      <DoorEntrance />

      {/* Main website */}
      <main>
        <section id="home" className="scroll-mt-20">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-20">
          {/* About / Hall */}
        </section>

        <section id="projects" className="scroll-mt-20">
          {/* Projects / Rooms */}
        </section>

        <section id="services" className="scroll-mt-20">
          {/* Services / Kitchen */}
        </section>

        <section id="contact" className="scroll-mt-20">
          {/* Contact */}
        </section>
      </main>
    </>
  );
};

export default Home;