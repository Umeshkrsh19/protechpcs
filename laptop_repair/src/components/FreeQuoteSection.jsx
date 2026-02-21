export default function FreeQuoteSection() {
  return (
    <section className="py-24 bg-repair-silver/20" id="contact">
      <div className="container mx-auto px-6 flex justify-center">
        <div className="w-full max-w-4xl bg-repair-light p-10 md:p-16 rounded-3xl shadow-xl border border-repair-silver relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-repair-silver/20 rounded-full blur-[80px] -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-repair-gray/10 rounded-full blur-[80px] -ml-20 -mb-20"></div>
          
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-repair-dark uppercase tracking-wide">Request Free Quote</h2>
            <div className="h-1 w-20 bg-repair-gray mx-auto mb-6 rounded-full"></div>
            <p className="text-repair-gray font-medium">
              Fill out the request form below to receive your free computer repair estimate. A member of our team will review your submission and will respond as soon as possible.
            </p>
          </div>

          <form className="relative z-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-repair-gray uppercase tracking-wider mb-2">Name</label>
                <input 
                  type="text" 
                  placeholder="John Smith" 
                  className="w-full bg-white border border-repair-silver rounded-lg px-4 py-3 text-repair-dark focus:outline-none focus:border-repair-gray focus:ring-1 focus:ring-repair-gray transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-repair-gray uppercase tracking-wider mb-2">Phone</label>
                <input 
                  type="tel" 
                  placeholder="(123) 456-7890" 
                  className="w-full bg-white border border-repair-silver rounded-lg px-4 py-3 text-repair-dark focus:outline-none focus:border-repair-gray focus:ring-1 focus:ring-repair-gray transition-all"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-repair-gray uppercase tracking-wider mb-2">Your Message Here</label>
              <textarea 
                rows="4" 
                placeholder="Describe your issue..." 
                className="w-full bg-white border border-repair-silver rounded-lg px-4 py-3 text-repair-dark focus:outline-none focus:border-repair-gray focus:ring-1 focus:ring-repair-gray transition-all resize-none"
              ></textarea>
            </div>

            <div className="text-center">
              <button className="bg-repair-gray hover:bg-repair-dark text-white px-10 py-4 font-bold uppercase tracking-wider text-sm rounded shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
