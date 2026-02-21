import { laptopImages } from '../data/images';

export default function GallerySection() {
  return (
    <section className="py-24 bg-deep-space-black" id="gallery">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Our Repair Gallery</h2>
          <div className="h-1 w-20 bg-gradient-purple-orange mx-auto mb-8 rounded-full"></div>
          <p className="text-muted-gray text-lg max-w-3xl mx-auto">
            Browse the images in our photo gallery to see some of our most recent work. You’ll immediately notice the reasons our customers love us! Try us out today to experience the Protect PCS difference.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {laptopImages.slice(0, 8).map((image, index) => (
            <div key={index} className={`relative overflow-hidden rounded-lg group ${index === 0 || index === 5 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}`}>
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-space-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-bold text-sm uppercase tracking-wider">{image.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
