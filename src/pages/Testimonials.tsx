import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import Card from '../components/Card';
import { motion } from 'framer-motion';

interface Testimonial {
  id: string;
  parent_name: string;
  student_name: string;
  content: string;
  rating: number;
  image_url: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // Using placeholder data instead of fetching from Supabase
    setTestimonials(placeholderTestimonials);
  }, []);

  const placeholderTestimonials: Testimonial[] = [
    {
      id: '1',
      parent_name: 'Mrs. Akosua Mensah',
      student_name: 'Kwame Mensah',
      content: 'Paradise Mission Academy has been a blessing to our family. The teachers are caring and professional, and my son has grown so much academically and socially. The small class sizes mean he gets the attention he needs. Highly recommended!',
      rating: 5,
      image_url: ''
    },
    {
      id: '2',
      parent_name: 'Mr. David Osei',
      student_name: 'Abena Osei',
      content: 'We moved our daughter here from another school and the difference is remarkable. The curriculum is engaging, the facilities are excellent, and most importantly, she loves going to school every day. The staff genuinely care about each child.',
      rating: 5,
      image_url: ''
    },
    {
      id: '3',
      parent_name: 'Mrs. Grace Adu',
      student_name: 'Kofi Adu',
      content: 'As a working mother, I appreciate the strong home-school communication. Teachers keep me updated on my son\'s progress and are always available to discuss any concerns. The school prepares children well for their academic future.',
      rating: 5,
      image_url: ''
    },
    {
      id: '4',
      parent_name: 'Mr. Samuel Boateng',
      student_name: 'Ama Boateng',
      content: 'The holistic approach to education here is impressive. My daughter not only excels academically but also participates in sports, arts, and cultural activities. The school truly develops the whole child.',
      rating: 5,
      image_url: ''
    },
    {
      id: '5',
      parent_name: 'Mrs. Elizabeth Owusu',
      student_name: 'Yaw Owusu',
      content: 'My son has been here since Nursery and is now in Primary 4. The consistency and quality of education throughout the years has been outstanding. Teachers know him well and support his individual learning style.',
      rating: 5,
      image_url: ''
    },
    {
      id: '6',
      parent_name: 'Mr. Emmanuel Asante',
      student_name: 'Efua Asante',
      content: 'Paradise Mission Academy lives up to its name. The modern teaching methods, clean facilities, and dedicated staff create an environment where children thrive. Our daughter\'s confidence and love for learning have grown tremendously.',
      rating: 5,
      image_url: ''
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : placeholderTestimonials;

  return (
    <div className="min-h-screen">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Testimonials</h1>
          <p className="text-xl text-blue-100 max-w-3xl font-medium">
            Hear from parents about their experiences with our school
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
            className="text-center mb-12">
            <Quote className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Parents Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              We take pride in building strong partnerships with families and creating an environment where every child, from Crèche to JHS 1, can succeed.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayTestimonials.map((testimonial, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                key={testimonial.id}>
                <Card className="relative">
                  <Quote className="h-8 w-8 text-blue-100 absolute top-6 right-6" />
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed font-medium">
                    "{testimonial.content}"
                  </p>
                  <div className="pt-4 border-t">
                    <p className="font-bold text-gray-900">{testimonial.parent_name}</p>
                    {testimonial.student_name && (
                      <p className="text-sm text-gray-600 font-medium">Parent of {testimonial.student_name}</p>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white rounded-xl shadow-md p-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
                <p className="text-gray-600 font-medium">Happy Students</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <p className="text-4xl font-bold text-blue-600 mb-2">50+</p>
                <p className="text-gray-600 font-medium">Qualified Teachers</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <p className="text-4xl font-bold text-blue-600 mb-2">14+</p>
                <p className="text-gray-600 font-medium">Years of Excellence</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
