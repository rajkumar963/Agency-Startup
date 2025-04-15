import React from "react";

interface Ebook {
    id: number;
    name: string;
    link: string;
    icon: string; // Assuming you're using an icon instead of an image
}

const ebooks: Ebook[] = [
    { id: 1, name: "Marketing Techniques (ATL-BTL-TTL)", link: "https://drive.google.com/file/d/1N031Y1gCoqhWCXv_f5d2kzCxdZTyi7BB/view?usp=drive_link", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 2, name: "AARRR Framework", link: "https://drive.google.com/file/d/1m8o9w11_efO2Knh4dDi8ztL2l6d24cM7/view?usp=sharing", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 3, name: "B2B Marketing Strategy", link: "https://drive.google.com/file/d/1aUJ-EYj9Dt-efGxrkXRACc77YrpymeIC/view?usp=sharing", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 4, name: "Barter System in Marketing", link: "https://drive.google.com/file/d/1N031Y1gCoqhWCXv_f5d2kzCxdZTyi7BB/view?usp=drive_link", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 5, name: "Business Models (B2B, B2C, B2G and more)", link: "https://drive.google.com/file/d/1oAF6Vkw2-O-OETSVUcFKAYKRkKm-6C8U/view?usp=sharing", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 6, name: "Building Customer Loyalty", link: "https://drive.google.com/file/d/1b8dJONUj2lGe5gRsYSbzaB8GuuxNQgSh/view?usp=sharing", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 7, name: "4 Step Formula for Strategic Execution", link: "https://drive.google.com/file/d/1ykwPCUNzSdrPUkfqzRwfs8AlxVYduep6/view?usp=sharing", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 8, name: "7 Marketing Strategies", link: "https://drive.google.com/file/d/1sJGBmvYQpeRhj9gGv3FhVuRPWjr1Dphy/view?usp=sharing", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 9, name: "Moment Marketing", link: "https://drive.google.com/file/d/1nXsUarAYbTRVdIEPoOIwcJqhfL28605R/view?usp=drive_link", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 10, name: "The Power of Cross Promotion", link: "https://drive.google.com/file/d/1KOVkF2CfARKXMkTwUQ3QWt_LhHOkLlpB/view?usp=sharing", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 11, name: "The Ultimate Guide to Guerrilla Marketing", link: "https://drive.google.com/file/d/16pUJbu7OV1YNT7DbkbhF84-Gea_Gt5o0/view?usp=drive_link", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 12, name: " Tradtional Marketing v/s Zero Marketing", link: "https://drive.google.com/file/d/1eynLjHZJNfu2VkG4Q2_nrwSE4ITfmbIE/view?usp=sharing", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
];

const MarketingEbook: React.FC = () => {
    return (
        <>
            <div id="marketing" className=" px-4 sm:px-6 py-10 mt-[70px] bg-gradient-to-b from-gray-900 to-gray-900">
                <h1 className="text-4xl font-bold mb-3 text-center"><span className="gradient-text">Marketing E-books</span></h1>
                <p className="text-lg text-zinc-300 text-center max-w-5xl mx-auto mb-6 text-justify">
                    Just as petrol powers your car, marketing books fuel your business with the knowledge and strategies needed to reach your goals.
                </p>
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {ebooks.map((ebook) => (
                        <div
                            key={ebook.id}
                            className="bg-black text-800 p-4 rounded shadow-lg flex flex-col items-center text-center transition duration-300 hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.5)] hover:border border-blue-500"
                            >
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

export default MarketingEbook;
