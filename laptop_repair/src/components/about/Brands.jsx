export default function Brands() {
  const brands = [
    "Dell", "HP", "Lenovo", "Apple", "Asus", "Acer", "Microsoft", "Samsung"
  ];

  return (
    <section className="py-20 bg-repair-light border-t border-repair-silver">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-repair-dark mb-4">Trusted by Leading Technology Brands</h2>
        <p className="text-repair-dark/70 mb-12 max-w-2xl mx-auto">
          We work with top industry brands and use high-quality components to ensure performance, reliability, and durability.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, index) => (
            <div key={index} className="text-2xl font-black text-repair-gray hover:text-repair-dark transition-colors cursor-default select-none">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
