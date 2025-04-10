import WrapperContainer from '@/Layout/WrapperContainer';
import Image from 'next/image';

export default function GalleryPage() {
    const images = [
        {
            url: 'https://i.pinimg.com/736x/49/05/46/4905464da360b47a9469cf72a25a8c4c.jpg',
            alt: 'Gallery Image 1',
        },
        {
            url: 'https://i.pinimg.com/736x/63/c3/39/63c339ec5e0c5293078af0da278884c4.jpg',
            alt: 'Gallery Image 2',
        },
        {
            url: 'https://i.pinimg.com/736x/14/da/06/14da06e12aecf3224a3fc673b72b27cb.jpg',
            alt: 'Gallery Image 3',
        },
        {
            url: 'https://i.pinimg.com/736x/41/c5/2c/41c52cfc47a3db6408ddd74cc9928135.jpg',
            alt: 'Gallery Image 4',
        },
        {
            url: 'https://i.pinimg.com/736x/64/6b/52/646b52c04addb3c3a079726905448fce.jpg',
            alt: 'Gallery Image 5',
        },
        {
            url: 'https://i.pinimg.com/736x/3e/9d/11/3e9d112714efb365a1db563a549f0902.jpg',
            alt: 'Gallery Image 6',
        },
        {
            url: 'https://i.pinimg.com/736x/a0/57/fe/a057fe734a84774642c5403f1a89bf91.jpg',
            alt: 'Gallery Image 7',
        },
        {
            url: 'https://i.pinimg.com/736x/bb/af/ca/bbafcac9447abd68a164b063e4a25ccf.jpg',
            alt: 'Gallery Image 8',
        },
    ];

    return (
        <WrapperContainer>
            <main className="h-[700px] bg-gray-100 mb-[60px] rounded-2xl">
            <h1 className="pt-10 text-4xl font-bold text-center mb-10 text-gray-800">Inspiration Gallery</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {images.map((img, index) => (
                    <div key={index} className="rounded-xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300">
                        <Image
                            src={img.url}
                            alt={img.alt}
                            width={500}
                            height={500}
                            className="object-cover w-full h-auto box-border pt-5 pr-2.5 pb-5 pl-2.5"
                            unoptimized
                        />

                    </div>
                ))}
            </div>
        </main>
        </WrapperContainer>
    );
}
