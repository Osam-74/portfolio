import React, { useState } from 'react';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioImage {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tools: string[];
}

interface GraphicDesignerPortfolioProps {
  images: PortfolioImage[];
}

const GraphicDesignerPortfolio: React.FC<GraphicDesignerPortfolioProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...Array.from(new Set(images.map(img => img.category)))];
  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  const handleImageClick = (image: PortfolioImage, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(images.indexOf(image));
  };

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (selectedIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setSelectedIndex(prevIndex);
  };

  return (
    <div className="w-full">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-12 items-center">
        <span className="text-zinc-400 font-semibold">Filter by:</span>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 capitalize ${
              filter === cat
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-indigo-500/30 hover:text-indigo-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid - Masonry Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => handleImageClick(image, index)}
            className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500/30 transition-all duration-300 cursor-pointer h-64 md:h-72"
          >
            {/* Image */}
            <img
              src={image.image}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                <p className="text-zinc-300 text-sm mb-3 line-clamp-2">{image.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {image.tools.slice(0, 2).map((tool, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                  <Maximize2 size={16} /> View
                </div>
              </div>
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-xs font-bold text-indigo-300 capitalize">
              {image.category}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-50 p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-indigo-500 text-zinc-300 hover:text-indigo-400 transition-colors"
          >
            <X size={24} />
          </button>

          {/* Main Content */}
          <div className="max-w-4xl w-full">
            {/* Image Container */}
            <div className="relative mb-8 group">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full rounded-3xl border border-zinc-700 shadow-2xl shadow-indigo-500/20"
              />

              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 border border-zinc-700 hover:border-indigo-500 text-white hover:text-indigo-400 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 border border-zinc-700 hover:border-indigo-500 text-white hover:text-indigo-400 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Details Section */}
            <div className="glass-card p-8 rounded-3xl border border-zinc-800">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-zinc-100">{selectedImage.title}</h2>
                  <span className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-sm font-bold text-indigo-300 capitalize">
                    {selectedImage.category}
                  </span>
                </div>
              </div>

              <p className="text-zinc-300 text-lg mb-8 leading-relaxed">{selectedImage.description}</p>

              {/* Tools Used */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">Tools & Techniques</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedImage.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-indigo-500/30 hover:text-indigo-400 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Counter */}
              <div className="pt-6 border-t border-zinc-700 flex items-center justify-between">
                <span className="text-zinc-400 text-sm font-semibold">
                  {selectedIndex + 1} of {images.length} projects
                </span>
                <div className="flex gap-3">
                  <button
                    onClick={handlePrev}
                    className="px-6 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-indigo-500 text-zinc-300 hover:text-indigo-400 font-semibold transition-colors"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:scale-105 transition-transform"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GraphicDesignerPortfolio;
