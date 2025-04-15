import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";

interface Ebook {
    id: number;
    name: string;
    link: string;
    icon: string; // Assuming you're using an icon instead of an image
}

const ebooks: Ebook[] = [
    { id: 1, name: "THE EVOLUTION AND FUTURE OF INDIA'S FMCG INDUSTRY", link: "https://drive.google.com/file/d/1Z_oDmFB2oq5crL5bYXj8K24mPAZ3_sZl/view?usp=sharing", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
//     { id: 2, name: "Building Customer Loyality", link: "https://example.com/aarrr-framework.pdf", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
//     { id: 3, name: "Cold Call strategy for D2C brand", link: "https://example.com/b2b-marketing-strategy.pdf", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
//     { id: 4, name: "Four Step Formula for Strategic Execution", link: "https://example.com/barter-system.pdf", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
//     { id: 5, name: "Customer Centric Sales", link: "https://example.com/business-models.pdf", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
];

const CaseStudiesReseach: React.FC = () => {
    return (
        <>
            <div id="marketing" className="bg-gray-900 px-4 sm:px-6 py-8 mt-[70px]">
                <h1 className="text-4xl font-bold mb-3 text-primary text-center"><span className="gradient-text">Case Studies and Research Papers</span></h1>
                <p className="text-lg text-zinc-400 text-center max-w-5xl mx-auto mb-6 text-justify">
                    Just as petrol powers your car, marketing books fuel your business with the knowledge and strategies needed to reach your goals.
                </p>
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
                    {ebooks.map((ebook) => (
                        <div key={ebook.id} 
                        className="bg-black text-800 p-4 rounded shadow-lg flex flex-col items-center text-center transition duration-300 hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.5)] hover:border border-blue-500">
                            <img src={ebook.icon} alt={ebook.name} className="w-20 h-20 mb-4" />
                            <h2 className="text-md font-semibold mb-2">{ebook.name}</h2>
                            <a
                                href={ebook.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-purple to-blue-500 text-white px-4 py-2 rounded hover:bg-secondary/90 transition"
                            >
                                Download 
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CaseStudiesReseach;
