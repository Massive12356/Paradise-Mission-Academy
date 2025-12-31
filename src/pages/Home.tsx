import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  Award,
  Heart,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import { motion, AnimatePresence } from "framer-motion";
import heroPic1 from "../images/1.jpg";
import heroPic2 from "../images/3.avif";
import heroPic3 from "../images/7.jpg";

interface Testimonial {
  id: string;
  parent_name: string;
  content: string;
  rating: number;
}

interface NewsEvent {
  id: string;
  title: string;
  content: string;
  category: string;
  created_at: string;
}

export default function Home() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [news, setNews] = useState<NewsEvent[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      src: heroPic1,
      alt: "Children learning in classroom",
      title: "Nurturing Young Minds for a Brighter Future",
      description:
        "Quality education from Crèche to JHS 1 in a caring, stimulating environment",
    },
    {
      id: 2,
      src: heroPic2,
      alt: "Students participating in activities",
      title: "Engaging Learning Experiences",
      description:
        "Interactive and fun educational activities designed for your child's development",
    },
    {
      id: 3,
      src: heroPic3,
      alt: "School campus and facilities",
      title: "Modern School Facilities",
      description:
        "Safe, well-equipped environment for holistic child development",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  }, [heroSlides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    // Using placeholder data instead of fetching from Supabase
    setTestimonials([
      {
        id: '1',
        parent_name: 'Mrs. Akosua Mensah',
        content: 'Paradise Mission Academy has been a blessing to our family. The teachers are caring and professional, and my son has grown so much academically and socially.',
        rating: 5
      },
      {
        id: '2',
        parent_name: 'Mr. David Osei',
        content: 'We moved our daughter here from another school and the difference is remarkable. The curriculum is engaging, the facilities are excellent.',
        rating: 5
      },
      {
        id: '3',
        parent_name: 'Mrs. Grace Adu',
        content: 'As a working mother, I appreciate the strong home-school communication. Teachers keep me updated on my son\'s progress.',
        rating: 5
      }
    ]);
    
    setNews([
      {
        id: '1',
        title: 'New Academic Year 2024/2025 Begins',
        content: 'We are excited to welcome all students back for another year of learning and growth. Registration is now open for new students.',
        category: 'Announcement',
        created_at: new Date().toISOString()
      },
      {
        id: '2',
        title: 'Annual Sports Day - March 15',
        content: 'Join us for our Annual Sports Day featuring athletics, football, and fun games for all age groups.',
        category: 'Event',
        created_at: new Date(Date.now() - 86400000).toISOString()
      },
      {
        id: '3',
        title: 'Students Excel in National Mathematics Competition',
        content: 'We are proud to announce that our Primary 6 students won 2nd place in the Regional Mathematics Olympiad.',
        category: 'News',
        created_at: new Date(Date.now() - 172800000).toISOString()
      }
    ]);
  }, []);

  const programs = [
    {
      title: "Crèche",
      age: "6 months - 2 years",
      description: "Safe, nurturing environment for our youngest learners",
      icon: Heart,
      color: "bg-pink-100 text-pink-600",
      image:
        "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Nursery",
      age: "2 - 3 years",
      description: "Foundation learning through play and exploration",
      icon: BookOpen,
      color: "bg-purple-100 text-purple-600",
      image:
        "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Kindergarten",
      age: "4 - 5 years",
      description: "Building essential skills for academic success",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
      image:
        "https://images.pexels.com/photos/8926496/pexels-photo-8926496.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Primary",
      age: "6 - 12 years",
      description: "Comprehensive curriculum from Primary 1 to 6",
      icon: Award,
      color: "bg-green-100 text-green-600",
      image:
        "https://images.pexels.com/photos/8926551/pexels-photo-8926551.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "JHS 1",
      age: "12 - 13 years",
      description:
        "Bridging primary and junior high school with advanced concepts",
      icon: GraduationCap,
      color: "bg-yellow-100 text-yellow-600",
      image:
        "https://images.pexels.com/photos/8422051/pexels-photo-8422051.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const reasons = [
    {
      title: "Qualified Teachers",
      description: "Experienced educators dedicated to each child's growth",
    },
    {
      title: "Small Class Sizes",
      description: "Personalized attention for optimal learning",
    },
    {
      title: "Modern Facilities",
      description: "Safe, well-equipped classrooms and play areas",
    },
    {
      title: "Holistic Development",
      description: "Academic, social, emotional, and physical growth",
    },
    {
      title: "Engaging Curriculum",
      description: "Interactive, age-appropriate learning experiences",
    },
    {
      title: "Parent Partnership",
      description: "Strong home-school communication and collaboration",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* hero section with slider */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white h-screen overflow-hidden"
      >
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={heroSlides[currentSlide].src}
                alt={heroSlides[currentSlide].alt}
                className="w-full h-full object-cover opacity-70"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-blue-800/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              {heroSlides[currentSlide].title}
            </motion.h1>
            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl md:text-2xl mb-8 text-blue-100 font-medium"
            >
              {heroSlides[currentSlide].description}
            </motion.p>
            <motion.div
              key={`buttons-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/admissions">
                <Button size="lg" variant="secondary">
                  Enroll Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-600 border-white hover:bg-blue-50"
                >
                  Book a Visit
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Slider navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Welcome to Paradise Mission Academy
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              At Paradise Mission Academy, we believe every child deserves the
              best start in life. Our dedicated team of educators creates a
              warm, supportive environment where children discover their
              potential, develop confidence, and build a strong foundation for
              lifelong learning.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Comprehensive education tailored to every stage of your child's
              development
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card hover className="text-center overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={program.image}
                        alt={`${program.title} program`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div
                        className={`${program.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {program.title}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-3">
                        {program.age}
                      </p>
                      <p className="text-gray-600 font-medium">{program.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mt-8"
          >
            <Link to="/programs">
              <Button variant="outline">
                Learn More About Our Programs
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Paradise Mission Academy?
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 font-medium">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {testimonials.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="py-16 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Parents Say
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card>
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 font-medium mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <p className="text-gray-900 font-semibold">
                      - {testimonial.parent_name}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-center mt-8"
            >
              <Link to="/testimonials">
                <Button variant="outline">
                  Read More Testimonials
                  <ArrowRight className="inline ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      )}

      {news.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="py-16 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest News & Events
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {news.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card hover>
                    <div className="mb-3">
                      <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-medium line-clamp-3">{item.content}</p>
                    <p className="text-gray-400 text-sm mt-3 font-medium">
                      {new Date(item.created_at).toLocaleDateString()}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="text-center mt-8"
            >
              <Link to="/news">
                <Button variant="outline">
                  View All News & Events
                  <ArrowRight className="inline ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      )}

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="py-16 bg-blue-600 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 text-blue-100 font-medium">
            Schedule a visit to see our facilities and meet our team
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/admissions">
              <Button size="lg" variant="secondary">
                Start Application
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 border-white hover:bg-blue-50"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
