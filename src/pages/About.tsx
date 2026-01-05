import { Target, Eye, Award, Heart } from 'lucide-react';
import Card from '../components/Card';
import { motion } from 'framer-motion';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Care & Compassion',
      description: 'We provide a nurturing environment where every child feels valued and supported'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in teaching and learning'
    },
    {
      icon: Target,
      title: 'Integrity',
      description: 'We model honesty, respect, and ethical behavior in all we do'
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'We embrace creative teaching methods and modern learning approaches'
    }
  ];

  return (
    <div className="min-h-screen">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-orange-700 to-orange-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl font-medium">
            Discover our story, values, and commitment to nurturing young minds
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
            className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="w-full space-y-4 text-gray-600 text-lg">
                <p className="font-medium">
                  Founded in 2010, Paradise Mission Academy began with a simple but powerful vision: to create a learning environment where every child could thrive academically, socially, and emotionally. What started as a small nursery with just 15 students has grown into a comprehensive educational institution serving children from Crèche through JHS 1.
                </p>
                <p className="font-medium">
                  Over the years, we have remained true to our founding principles while continuously evolving to meet the changing needs of our students and families. Our success is built on a foundation of passionate educators, engaged parents, and most importantly, the bright, curious children who walk through our doors each day.
                </p>
                <p className="font-medium">
                  Today, Paradise Mission Academy is recognized as a leader in early childhood, primary, and junior high school education, known for our innovative teaching methods, caring staff, and commitment to developing the whole child.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Eye className="h-8 w-8 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg font-medium">
                To be the leading educational institution that empowers children to become confident, creative, and compassionate individuals who make positive contributions to society.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg font-medium">
                To provide exceptional education in a safe, nurturing environment that fosters academic excellence, character development, and a lifelong love of learning. We partner with families to help each child reach their full potential.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 font-medium">The principles that guide everything we do</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card hover className="text-center border-2 hover:border-green-600">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 font-medium">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Message from the Headteacher</h2>
                  <div className="space-y-4 text-gray-600">
                    <p className="text-lg font-medium">
                      Dear Parents and Guardians,
                    </p>
                    <p className="font-medium">
                      Welcome to Paradise Mission Academy, where we believe that every child has unique gifts and unlimited potential. It is our privilege to partner with you in nurturing and developing these gifts during the critical early years of your child's education.
                    </p>
                    <p className="font-medium">
                      At Paradise Mission Academy, we go beyond academics. While we maintain high educational standards and celebrate academic achievement, we also focus on developing character, building confidence, and fostering creativity. We want our students to be well-rounded individuals who are prepared not just for the next grade, but for life.
                    </p>
                    <p className="font-medium">
                      Our dedicated team of educators brings passion, expertise, and genuine care to their work every day. We maintain small class sizes to ensure each child receives personalized attention and support. Our modern facilities and engaging curriculum create an environment where learning is both effective and enjoyable.
                    </p>
                    <p className="font-medium">
                      I invite you to visit our school, meet our team, and see firsthand the warm, vibrant community we have built. Together, we can give your child the bright future they deserve.
                    </p>
                    <p className="font-semibold">
                      Warm regards,<br />
                      Mrs. Elizabeth Mensah<br />
                      Headteacher
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">Meet the dedicated professionals who guide our institution</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="School Owner"
                  className="w-32 h-32 object-cover rounded-full shadow-lg mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Mr. Joseph Asante</h3>
              <p className="text-green-600 font-semibold">School Owner</p>
              <p className="text-gray-600 mt-2 font-medium">Visionary leader and founder of Paradise Mission Academy</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Headteacher"
                  className="w-32 h-32 object-cover rounded-full shadow-lg mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Mrs. Elizabeth Mensah</h3>
              <p className="text-green-600 font-semibold">Headteacher</p>
              <p className="text-gray-600 mt-2 font-medium">Leading our educational programs with excellence</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Assistant Headteacher"
                  className="w-32 h-32 object-cover rounded-full shadow-lg mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Mr. Kwame Osei</h3>
              <p className="text-green-600 font-semibold">Assistant Headteacher</p>
              <p className="text-gray-600 mt-2 font-medium">Supporting academic excellence and student development</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Accreditation & Affiliations
            </h2>
            <p className="text-gray-600 text-lg mb-8 font-medium">
              Paradise Mission Academy is registered with the Ghana Education Service and maintains memberships with several educational organizations. We adhere to national curriculum standards while incorporating innovative teaching methods and best practices in early childhood, primary, and junior high school education.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center space-x-2 bg-green-100 p-3 rounded-lg animate-pulse">
                <Award className="h-6 w-6 text-green-600" />
                <span className="font-medium text-green-600">Ghana Education Service Registered</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-100 p-3 rounded-lg animate-pulse">
                <Award className="h-6 w-6 text-orange-600" />
                <span className="font-medium text-orange-600">National Curriculum Aligned</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
