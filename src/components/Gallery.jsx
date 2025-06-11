import React from 'react';
import img1 from '../assets/gallery/1.jpg'
import img2 from '../assets/gallery/2.jpg'
import img3 from '../assets/gallery/gallery-3.jpg'
import img4 from '../assets/gallery/gallery-4.jpg'
import img5 from '../assets/gallery/gallery-6.jpg'
import img6 from '../assets/gallery/home-01.jpg'
import img7 from '../assets/gallery/gallery-1.jpg'
import img8 from '../assets/gallery/gallery-2.jpg'



const Gallery = () => {
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
    return (
        <section className="py-16">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Gallery</h2>
                <p className="text-gray-600 mb-12">Explore our food moments captured in stunning visuals.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    {images.map((img) => (
                        <div
                            key={img.id}
                            className="relative overflow-hidden shadow-lg group"
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-semibold">{img.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
