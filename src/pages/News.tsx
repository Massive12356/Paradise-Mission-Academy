import { useState, useEffect } from 'react';
import { Calendar, Tag } from 'lucide-react';
import Card from '../components/Card';
import { motion } from 'framer-motion';

interface NewsEvent {
  id: string;
  title: string;
  content: string;
  category: string;
  event_date: string | null;
  image_url: string;
  created_at: string;
}

export default function News() {
  const [items, setItems] = useState<NewsEvent[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'news', label: 'News' },
    { id: 'event', label: 'Events' },
    { id: 'announcement', label: 'Announcements' }
  ];

  useEffect(() => {
    // Using placeholder data instead of fetching from Supabase
    setItems(placeholderItems);
  }, []);

  const filteredItems = selectedCategory === 'all'
    ? items
    : items.filter(item => item.category === selectedCategory);

  const placeholderItems: NewsEvent[] = [
    {
      id: '1',
      title: 'New Academic Year 2024/2025 Begins',
      content: 'We are excited to welcome all students back for another year of learning and growth. Registration is now open for new students. Our enhanced curriculum includes new STEM programs and expanded arts activities.',
      category: 'announcement',
      event_date: null,
      image_url: 'https://images.pexels.com/photos/8926551/pexels-photo-8926551.jpeg',
      created_at: new Date().toISOString()
    },
    {
      id: '2',
      title: 'Annual Sports Day - March 15',
      content: 'Join us for our Annual Sports Day featuring athletics, football, and fun games for all age groups. Parents and guardians are invited to attend and support our young athletes.',
      category: 'event',
      event_date: '2024-03-15',
      image_url: 'https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg',
      created_at: new Date(Date.now() - 86400000).toISOString()
    },
    {
      id: '3',
      title: 'Students Excel in National Mathematics Competition',
      content: 'We are proud to announce that our Primary 6 students won 2nd place in the Regional Mathematics Olympiad. Congratulations to all participants and their dedicated teachers!',
      category: 'news',
      event_date: null,
      image_url: 'https://images.pexels.com/photos/8926496/pexels-photo-8926496.jpeg',
      created_at: new Date(Date.now() - 172800000).toISOString()
    },
    {
      id: '4',
      title: 'Parent-Teacher Association Meeting',
      content: 'Our next PTA meeting will be held on April 5th at 3:00 PM. Agenda includes upcoming events, academic progress review, and facility improvements. All parents are encouraged to attend.',
      category: 'announcement',
      event_date: '2024-04-05',
      image_url: 'https://images.pexels.com/photos/8923058/pexels-photo-8923058.jpeg',
      created_at: new Date(Date.now() - 259200000).toISOString()
    },
    {
      id: '5',
      title: 'Cultural Festival Celebration',
      content: 'Our annual Cultural Festival will showcase traditional music, dance, and art from various Ghanaian cultures. Students will perform and display their creative work. Parents are welcome!',
      category: 'event',
      event_date: '2024-05-20',
      image_url: 'https://images.pexels.com/photos/8422051/pexels-photo-8422051.jpeg',
      created_at: new Date(Date.now() - 345600000).toISOString()
    },
    {
      id: '6',
      title: 'New Computer Lab Officially Opened',
      content: 'We are thrilled to announce the opening of our state-of-the-art computer laboratory, equipped with 30 modern computers and interactive learning software to enhance our ICT curriculum.',
      category: 'news',
      event_date: null,
      image_url: 'https://images.pexels.com/photos/8926553/pexels-photo-8926553.jpeg',
      created_at: new Date(Date.now() - 432000000).toISOString()
    }
  ];

  const displayItems = filteredItems.length > 0 ? filteredItems : placeholderItems.filter(
    item => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <div className="min-h-screen">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Events</h1>
          <p className="text-xl text-blue-100 max-w-3xl font-medium">
            Stay updated with the latest happenings from Crèche to JHS 1
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

          {displayItems.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center py-12">
              <p className="text-gray-600 text-lg font-medium">No items in this category yet.</p>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayItems.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                  key={item.id}>
                  <Card hover>
                    {item.image_url && (
                      <div className="mb-4 -mx-6 -mt-6 rounded-t-xl overflow-hidden">
                        <img
                          src={item.image_url}
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    )}
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full ${
                        item.category === 'event' ? 'bg-green-100 text-green-700' :
                        item.category === 'announcement' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        <Tag className="h-3 w-3" />
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4 font-medium">{item.content}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                      {item.event_date && (
                        <div className="flex items-center gap-1 ">
                          <Calendar className="h-4 w-4 text-blue-500" />
                          <span className="font-medium text-blue-500">{new Date(item.event_date).toLocaleDateString()}</span>
                        </div>
                      )}
                      <span className="font-medium text-blue-500">{new Date(item.created_at).toLocaleDateString()}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.section>
    </div>
  );
}
