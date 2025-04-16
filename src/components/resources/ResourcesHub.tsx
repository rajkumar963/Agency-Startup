import { Download, Search, BookOpen } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const resourceCategories = ["All", "Marketing", "Entrepreneurship", "Sales" , "Case Studies"];

const resources = [
  {
    id: 1,
    title: "The Complete Guide to Government Funding 2025",
    description: "Explore government grants, schemes, and incentives for Indian startups in 2025, including eligibility and application details.",
    category: "E-Books",
    image: "https://images.unsplash.com/photo-1589561253898-768105ca91a8?auto=format&fit=crop&w=1469&q=80",
    icon: <BookOpen className="w-5 h-5" />,
    isFeatured: true,
    isNew: false,
    isPremium: true,
    link: "/resources/qasectionandgovernmentfunding"
  },
  {
    id: 2,
    title: "Marketing for Startups",
    description: "Gain real-world insights and proven marketing techniques, created by industry-leading experts, that set your business apart.",
    category: "E-Books",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1470&q=80",
    icon: <BookOpen className="w-5 h-5" />,
    isFeatured: false,
    isNew: true,
    isPremium: false,
    link: "/resources/marketingebook"
  },
  {
    id: 3,
    title: "Sales ",
    description: "Discover actionable insights and time-tested sales strategies, developed by top sales innovators, that distinguish your business from the competition.",
    category: "E-Books",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1115&q=80",
    icon: <BookOpen className="w-5 h-5" />,
    isFeatured: false,
    isNew: false,
    isPremium: true,
    link: "/resources/salesebook"
  },
  {
    id: 4,
    title: "Entrepreneurship",
    description: "Discover actionable insights and time-tested entrepreneurial strategies, developed by visionary founders, that set your venture apart in today's competitive landscape.",
    category: "E-Books",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1470&q=80",
    icon: <BookOpen className="w-5 h-5" />,
    isFeatured: false,
    isNew: false,
    isPremium: false,
    link: "/resources/entrepreneurshipebook"
  },
  {
    id: 5,
    title: "Essential Q&A for building a startup",
    description: "A complete Q&A guide for entrepreneurs on how to build a successful startup.",
    category: "E-Books",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=1470&q=80",
    icon: <BookOpen className="w-5 h-5" />,
    isFeatured: false,
    isNew: false,
    isPremium: true,
    link: "/resources/qasectionandgovernmentfunding"
  },
  {
    id: 6,
    title: "Case Studies and Research Papers",
    description: "A complete Q&A guide for entrepreneurs on how to build a successful startup.",
    category: "Case Studies",
    image: "https://plus.unsplash.com/premium_photo-1664301747246-ca55593015f1?auto=format&fit=crop&q=60",
    icon: <BookOpen className="w-5 h-5" />,
    isFeatured: false,
    isNew: true,
    isPremium: false,
    link: "/resources/casestudiesresearch"
  },
];

const ResourceHub = ({ fullPage = false }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = activeCategory === "All" || resource.category === activeCategory;
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResource = resources.find((resource) => resource.isFeatured);

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 to-gray-900 pt-24 px-4 pb-20 ">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mt-4">
          Startup Learning <span className="gradient-text"> Resources</span> & <span className="gradient-text">Materials</span>
        </h2>
        <p className="text-zinc-400 mt-2">
          Access our library of Marketing, Sales, Entrepreneurship, and case studies designed to help you navigate every aspect of your startup journey.
        </p>
      </div>

      {featuredResource && (
        <div className="relative rounded-xl overflow-hidden mb-12">
          <div className="absolute inset-0  bg-black border border-gray-700 z-10"></div>
          <img src={featuredResource.image} alt={featuredResource.title} className="w-full h-80 object-cover" />
          <div className="absolute inset-0 z-20 p-5 flex flex-col justify-center">
            <div className="flex justify-between items-center mb-4">
              <div className="bg-white/20 text-white px-3 py-1 text-sm rounded-full backdrop-blur-sm bg-gradient-to-r from-purple to-vibrant-blue">
                Featured E-Book
              </div>
              <a
                href="https://drive.google.com/file/d/1E-Epe-ClPW6djvjbTF6h9OQDm2Gk4k-P/view?usp=sharing"
                className="inline-flex items-center bg-gradient-to-r from-purple to-vibrant-blue text-white px-4 py-2 rounded-md font-semibold shadow-md"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Free
              </a>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{featuredResource.title}</h3>
            <p className="text-white/80 max-w-2xl">{featuredResource.description}</p>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {resourceCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-300 text-gray-900 hover:bg-blue-600 hover:text-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-200 pl-10 pr-4 py-2 border rounded text-zinc-600 w-full focus:outline-none focus:ring-2 focus:ring-primary/50 "
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="rounded overflow-hidden shadow-md bg-gray-700 border border-gray-600 transform transition duration-300 hover:shadow-xl hover:scale-105 hover:bg-gray-800 cursor-pointer"
          >
      
      <div className="relative h-48">
        <img
          src={resource.image}
          alt={resource.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          {resource.isNew && (
            <div className="bg-secondary text-white text-xs font-medium px-2 py-1 rounded">
              NEW
            </div>
          )}
          {resource.isPremium && (
            <div className="bg-primary text-white text-xs font-medium px-2 py-1 rounded">
              PREMIUM
            </div>
          )}
        </div>
        <div className="absolute bottom-2 left-2">
          <div className="bg-gradient-to-r from-purple to-vibrant-blue text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
            {resource.icon}
            {resource.category}
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-1">{resource.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
        <button
          onClick={() => navigate(resource.link)}
          className="text-primary font-medium hover:underline"
        >
          Learn More
        </button>
      </div>
    </div>
    ))}
  </div>

    </section>
  );
};

export default ResourceHub;