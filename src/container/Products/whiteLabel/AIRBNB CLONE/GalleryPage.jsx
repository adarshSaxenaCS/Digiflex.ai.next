import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Image from 'next/image';

export default function GalleryPage() {
    const images = [
        { url: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AirBnbGalleryImg1-jpg.jpg', alt: 'AirBnbGalleryImg1-jpg' },
        { url: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AirBnbGalleryImg2-jpg.jpg', alt: 'AirBnbGalleryImg2-jpg' },
        { url: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AirBnbGalleryImg3-jpg.jpg', alt: 'AirBnbGalleryImg3-jpg' },
        { url: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AirBnbGalleryImg4-jpg.jpg', alt: 'AirBnbGalleryImg4-jpg' },
        { url: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AirBnbGalleryImg5-jpg.jpg', alt: 'AirBnbGalleryImg5-jpg' },
        { url: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AirBnbGalleryImg6-jpg.jpg', alt: 'AirBnbGalleryImg6-jpg' },
        { url: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AirBnbGalleryImg7-jpg.jpg', alt: 'AirBnbGalleryImg7-jpg' },
        { url: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AirBnbGalleryImg8-jpg.jpg', alt: 'AirBnbGalleryImg8-jpg' },
    ];

    return (
        <WrapperContainer>
            <main className="bg-gray-100 rounded-2xl py-10 px-4 sm:px-6 lg:px-8">
                <Heading className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">Inspiration Gallery</Heading>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((img, index) => (
                        <div key={index} className="rounded-xl overflow-hidden shadow-md bg-white hover:scale-105 transition-transform duration-300">
                            <div className="relative w-full h-64 sm:h-72 md:h-60 lg:h-56">
                                <Image
                                    src={img.url}
                                    alt={img.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-xl"
                                    unoptimized
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </WrapperContainer>
    );
}
