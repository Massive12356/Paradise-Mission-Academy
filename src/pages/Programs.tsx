import { Heart, BookOpen, Users, Award, CheckCircle } from 'lucide-react';
import Card from '../components/Card';

export default function Programs() {
  const programs = [
    {
      title: 'Crèche',
      age: '6 months - 2 years',
      icon: Heart,
      color: 'bg-pink-100 text-pink-600',
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
      objectives: [
        'Master core academic subjects aligned with national curriculum',
        'Develop critical thinking and problem-solving abilities',
        'Build strong character and values',
        'Cultivate talents and interests through varied activities'
      ],
      approach: 'Our primary program delivers a comprehensive, standards-based curriculum using modern teaching methods. We emphasize understanding over memorization, encourage active participation, and provide support for different learning styles. Regular assessments help us track progress and provide targeted support.',
      subjects: ['English Language', 'Mathematics', 'Science', 'Social Studies', 'Religious & Moral Education', 'French', 'ICT', 'Creative Arts', 'Physical Education'],
      ratio: '1:25 (One teacher per twenty-five students)'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-orange-700 to-orange-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl text-blue-100 max-w-3xl font-medium">
            Age-appropriate education from Crèche to Primary 6, designed to nurture every child's potential
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={program.title} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-start`}>
                  <div className="lg:w-1/3">
                    <Card className={`sticky top-24 border-2 ${program.color.split(' ')[0]}`}>
                      <div className="flex items-center justify-center mb-4">
                        <div className={`${program.color} p-4 rounded-full`}>
                          <Icon className="h-12 w-12" />
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
                        {program.title}
                      </h2>
                      <p className="text-center text-lg font-semibold text-orange-600 mb-4">
                        Ages {program.age}
                      </p>
                      <div className="border-t pt-4">
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-semibold">Class Size:</span>
                        </p>
                        <p className="text-sm text-green-700 font-medium ">{program.ratio}</p>
                      </div>
                    </Card>
                  </div>

                  <div className="lg:w-2/3 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Learning Objectives</h3>
                      <ul className="space-y-2">
                        {program.objectives.map((objective, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 font-medium">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Teaching Approach</h3>
                      <p className="text-gray-600 leading-relaxed font-medium">{program.approach}</p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Subjects & Activities</h3>
                      <div className="flex flex-wrap gap-2">
                        {program.subjects.map((subject, i) => (
                          <span
                            key={i}
                            className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium"
                          >
                           {i + 1} . {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for the Next Step?
          </h2>
          <p className="text-lg text-white font-medium mb-8">
            We understand that every child develops at their own pace. Our assessment process ensures each child is placed in the program that best meets their needs and supports their growth.
          </p>
          <div className="bg-orange-500 rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold text-white mb-4">Future Expansion</h3>
            <p className="text-white font-medium">
              We are planning to extend our programs to include Junior High School (JHS) and Senior High School (SHS) in the near future, providing continuous quality education from early childhood through secondary school.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
