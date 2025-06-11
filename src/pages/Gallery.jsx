import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import bgImg from '../assets/para-09-1.jpg';
import img1 from '../assets/gallery/1.jpg';
import img2 from '../assets/gallery/2.jpg';
import img3 from '../assets/gallery/gallery-3.jpg';
import img4 from '../assets/gallery/gallery-4.jpg';
import img5 from '../assets/gallery/gallery-6.jpg';
import img6 from '../assets/gallery/home-01.jpg';
import img7 from '../assets/gallery/gallery-1.jpg';
import img8 from '../assets/gallery/gallery-2.jpg';

const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        { id: 1, src: img1, title: 'Riso Tonnato' },
        { id: 2, src: img2, title: 'Anguilla Marinata' },
        { id: 3, src: img3, title: 'Relax & Enjoy' },
        { id: 4, src: img4, title: 'Spanish Dinner' },
        { id: 5, src: img5, title: 'Canederli' },
        { id: 6, src: img6, title: 'Tangy Veggie Wrap' },
        { id: 7, src: img7, title: 'Italian Pizza' },
        { id: 8, src: img8, title: 'Spaghetti' },
    ];

    const slides = images.map(img => ({
        src: img.src,
        title: img.title,
    }));

    return (
        <div>
            {/* Banner */}
            <div
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                className="relative bg-fixed text-white min-h-[35vh] bg-[#1b1b1ba9] bg-blend-overlay flex flex-col items-center justify-start overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0"></div>

                <div className="relative z-10 w-full">
                    <div className="mt-60 text-center">
                        <h1 className="text-3xl lg:text-7xl font-thin">GALLERY</h1>
                        <p className="text-white mt-6 mb-12">Explore our food moments captured in stunning visuals.</p>
                    </div>
                </div>
            </div>

            {/* Gallery Grid */}
            <section className="my-32 max-w-8xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((img, i) => (
                        <div
                            key={img.id}
                            className="relative overflow-hidden rounded shadow-lg group cursor-pointer"
                            onClick={() => {
                                setIndex(i);
                                setOpen(true);
                            }}
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                                <h3 className="text-white text-lg font-semibold text-center px-2">
                                    {img.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={slides}
                    index={index}
                    plugins={[]}
                    styles={{
                        container: {
                            backgroundColor: '#000000c5', // Light transparent background
                            // or: backgroundColor: 'transparent' for no background
                        },
                    }}
                />
            </section>
        </div>
    );
};

export default Gallery;
