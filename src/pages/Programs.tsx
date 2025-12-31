import { Heart, BookOpen, Users, Award, GraduationCap, CheckCircle } from 'lucide-react';
import Card from '../components/Card';
import { motion } from 'framer-motion';

export default function Programs() {
  const programs = [
    {
      title: 'Crèche',
      age: '6 months - 2 years',
      icon: Heart,
      color: 'bg-pink-100 text-pink-600',
      image: 'https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg?auto=compress&cs=tinysrgb&w=600',
      objectives: [
        'Provide a safe, clean, and nurturing environment',
        'Support early sensory and motor development',
        'Establish healthy routines for eating and sleeping',
        'Encourage early social interaction and bonding'
      ],
      approach: 'Our crèche program focuses on meeting the individual needs of each infant and toddler. Our experienced caregivers provide loving attention, maintain consistent routines, and create a home-like atmosphere. We emphasize safety, hygiene, and responsive care.',
      subjects: ['Sensory play', 'Music and movement', 'Story time', 'Free play', 'Outdoor activities'],
      ratio: '1:4 (One caregiver per four children)'
    },
    {
      title: 'Nursery',
      age: '2 - 3 years',
      icon: BookOpen,
      color: 'bg-purple-100 text-purple-600',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600',
      objectives: [
        'Develop language and communication skills',
        'Build independence in daily activities',
        'Foster social skills through group play',
        'Introduce basic concepts through hands-on activities'
      ],
      approach: 'Learning through play is at the heart of our nursery program. Children engage in activities that stimulate curiosity, creativity, and exploration. We use age-appropriate materials and methods to support cognitive, physical, and emotional development.',
      subjects: ['Pre-literacy activities', 'Numbers and counting', 'Art and crafts', 'Music and rhythm', 'Physical education'],
      ratio: '1:8 (One teacher per eight children)'
    },
    {
      title: 'Kindergarten',
      age: '4 - 5 years',
      icon: Users,
      color: 'bg-blue-100 text-blue-600',
      image: 'https://images.pexels.com/photos/8926496/pexels-photo-8926496.jpeg?auto=compress&cs=tinysrgb&w=600',
      objectives: [
        'Build pre-reading and pre-writing skills',
        'Develop mathematical thinking and problem-solving',
        'Enhance social and emotional competence',
        'Foster creativity and self-expression'
      ],
      approach: 'Our kindergarten program prepares children for primary school through a balance of structured learning and play-based activities. We use interactive methods that engage children and make learning enjoyable while building essential academic and social skills.',
      subjects: ['Literacy readiness', 'Mathematics basics', 'Science exploration', 'Creative arts', 'Physical education', 'Social studies'],
      ratio: '1:15 (One teacher per fifteen children)'
    },
    {
      title: 'Primary (P1 - P6)',
      age: '6 - 12 years',
      icon: Award,
      color: 'bg-green-100 text-green-600',
      image: 'https://images.pexels.com/photos/8926551/pexels-photo-8926551.jpeg?auto=compress&cs=tinysrgb&w=600',
      objectives: [
        'Master core academic subjects aligned with national curriculum',
        'Develop critical thinking and problem-solving abilities',
        'Build strong character and values',
        'Cultivate talents and interests through varied activities'
      ],
      approach: 'Our primary program delivers a comprehensive, standards-based curriculum using modern teaching methods. We emphasize understanding over memorization, encourage active participation, and provide support for different learning styles. Regular assessments help us track progress and provide targeted support.',
      subjects: ['English Language', 'Mathematics', 'Science', 'Social Studies', 'Religious & Moral Education', 'French', 'ICT', 'Creative Arts', 'Physical Education'],
      ratio: '1:25 (One teacher per twenty-five students)'
    },
    {
      title: 'JHS 1',
      age: '12 - 13 years',
      icon: GraduationCap,
      color: 'bg-yellow-100 text-yellow-600',
      image: 'https://images.pexels.com/photos/8422051/pexels-photo-8422051.jpeg?auto=compress&cs=tinysrgb&w=600',
      objectives: [
        'Build on primary school foundation with more advanced concepts',
        'Develop critical thinking and analytical skills',
        'Prepare students for the Junior High School curriculum',
        'Foster leadership skills and self-confidence'
      ],
      approach: 'Our JHS 1 program bridges the gap between primary and junior high school education. We focus on strengthening core academic skills while introducing students to more complex subjects and learning methodologies. Teachers provide individualized support to ensure each student transitions smoothly to the next level.',
      subjects: ['English Language', 'Mathematics', 'Integrated Science', 'Social Studies', 'Religious & Moral Education', 'French', 'ICT', 'Basic Design & Technology', 'Home Economics', 'Agricultural Science', 'Business Studies'],
      ratio: '1:20 (One teacher per twenty students)'
    }
  ];

  return (
    <div className="min-h-screen">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl text-blue-100 max-w-3xl font-medium">
            Age-appropriate education from Crèche to JHS 1, designed to nurture every child's potential
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
            className="space-y-16">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-start`}>
                  <div className="lg:w-1/3">
                    <Card className="overflow-hidden">
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={program.image}
                          alt={`${program.title} program`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className={`p-6 sticky top-24 ${program.color.split(' ')[0]}`}>
                        <div className="flex items-center justify-center mb-4">
                          <div className={`${program.color} p-4 rounded-full`}>
                            <Icon className="h-12 w-12" />
                          </div>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
                          {program.title}
                        </h2>
                        <p className="text-center text-lg font-semibold text-blue-600 mb-4">
                          Ages {program.age}
                        </p>
                        <div className="border-t pt-4">
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-semibold">Class Size:</span>
                          </p>
                          <p className="text-sm text-gray-700">{program.ratio}</p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <div className="lg:w-2/3 space-y-6">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index + 0.1 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Learning Objectives</h3>
                      <ul className="space-y-2">
                        {program.objectives.map((objective, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5 " />
                            <span className="text-gray-600 font-medium">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index + 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Teaching Approach</h3>
                      <p className="text-gray-600 font-medium leading-relaxed">{program.approach}</p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Subjects & Activities</h3>
                      <div className="flex flex-wrap gap-2">
                        {program.subjects.map((subject, i) => (
                          <span
                            key={i}
                            className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready for the Next Step?
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-medium">
              We understand that every child develops at their own pace. Our assessment process ensures each child is placed in the program that best meets their needs and supports their growth.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-xl shadow-md p-8 bg-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Future Expansion</h3>
              <p className="font-medium text-blue-600">
                We have successfully launched our JHS 1 program and are planning to extend our programs to include additional JHS levels and Senior High School (SHS) in the near future, providing continuous quality education from early childhood through secondary school.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
