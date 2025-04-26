import { BookOpen, Eye, Target } from 'lucide-react';

const aboutItems = [
  {
    title: "Our Story",
    description:
      "F2XO emerged from founders’ shared struggles—battling confusing legalities, chaotic plans, and endless uncertainty. After sleepless nights and countless failures, they created a space to make launching a startup less isolating and more achievable.",
    icon: BookOpen,
    color: "from-vibrant-blue to-purple"
  },
  {
    title: "Our Vision",
    description:
      "To create a world where every entrepreneur, regardless of background, has the opportunity to build and grow a successful startup, fueled by an inclusive ecosystem of resources, khajana, services, connection, and collaboration.",
    icon: Eye,
    color: "from-purple to-vibrant-blue"
  },
  {
    title: "Our Mission",
    description:
      "Empower entrepreneurs with accessible khajana they require to build successful businesses/startups—expert services, resources, and a network linking founders to founders /entrepreneur and peers. Founders, entrepreneurs: breaking barriers so all founders and startups can thrive and be successful.",
    icon: Target,
    color: "from-vibrant-blue to-teal"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="section bg-dark relative px-4 py-12 sm:py-16">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            About <span className="gradient-text">Us</span>
          </h2>
          {/* <p className="text-base sm:text-lg text-white/70">
            We're more than just a platform — we're a mission-driven team of entrepreneurs dedicated to helping founders succeed.
          </p> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg group text-center md:text-left"
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg mb-4 sm:mb-6 mx-auto md:mx-0 flex items-center justify-center bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform`}
              >
                <item.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">{item.title}</h3>
              <p className="text-sm sm:text-base text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
