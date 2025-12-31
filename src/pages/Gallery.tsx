import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GalleryImage {
  id: string;
  title: string;
  image_url: string;
  category: string;
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'classroom', label: 'Classroom Activities' },
    { id: 'sports', label: 'Sports' },
    { id: 'cultural', label: 'Cultural Events' },
    { id: 'graduation', label: 'Graduation' }
  ];

  useEffect(() => {
    // Using placeholder data instead of fetching from Supabase
    setImages(placeholderImages);
  }, []);

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  const placeholderImages = [
    {
      id: '1',
      title: 'Science Laboratory',
      image_url: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
      category: 'classroom'
    },
    {
      id: '2',
      title: 'Sports Day Activities',
      image_url: 'https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg',
      category: 'sports'
    },
    {
      id: '3',
      title: 'Cultural Dance Performance',
      image_url: 'https://images.pexels.com/photos/8422051/pexels-photo-8422051.jpeg',
      category: 'cultural'
    },
    {
      id: '4',
      title: 'Reading Corner',
      image_url: 'https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg',
      category: 'classroom'
    },
    {
      id: '5',
      title: 'Graduation Ceremony',
      image_url: 'https://images.pexels.com/photos/8923163/pexels-photo-8923163.jpeg',
      category: 'graduation'
    },
    {
      id: '6',
      title: 'Art Class',
      image_url: 'https://images.pexels.com/photos/8613315/pexels-photo-8613315.jpeg',
      category: 'classroom'
    },
    {
      id: '7',
      title: 'Football Match',
      image_url: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg',
      category: 'sports'
    },
    {
      id: '8',
      title: 'Music Performance',
      image_url: 'https://images.pexels.com/photos/8422146/pexels-photo-8422146.jpeg',
      category: 'cultural'
    }
  ];

  const displayImages = filteredImages.length > 0 ? filteredImages : placeholderImages.filter(
    img => selectedCategory === 'all' || img.category === selectedCategory
  );

  return (
    <div className="min-h-screen">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl font-medium">
            Explore the vibrant life at Paradise Mission Academy
          </p>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-8 justify-center">
            {categories.map((category, index) => (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {displayImages.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center py-12">
              <p className="text-gray-600 text-lg font-medium">No images in this category yet.</p>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayImages.map((image, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                  key={image.id}
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 aspect-square"
                >
                  <img
                    src={image.image_url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                      <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded mt-2">
                        {categories.find(c => c.id === image.category)?.label || image.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.section>
    </div>
  );
}
