import { Download, FileText, Calendar, DollarSign, ShieldCheck, BookOpen } from 'lucide-react';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Downloads() {
  const downloads = [
    {
      title: 'School Prospectus',
      description: 'Comprehensive guide to our programs, facilities, and educational approach',
      icon: BookOpen,
      size: '2.5 MB',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Academic Calendar 2024/2025',
      description: 'Term dates, holidays, and important academic events',
      icon: Calendar,
      size: '1.2 MB',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Fee Structure',
      description: 'Detailed breakdown of tuition and fees for all programs',
      icon: DollarSign,
      size: '800 KB',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      title: 'Uniform Guide',
      description: 'Complete uniform requirements and dress code policy',
      icon: FileText,
      size: '1.5 MB',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'School Policies',
      description: 'Academic policies, code of conduct, and safety procedures',
      icon: ShieldCheck,
      size: '3.0 MB',
      color: 'bg-red-100 text-red-600'
    },
    {
      title: 'Admission Application Form',
      description: 'Downloadable admission application form (PDF format)',
      icon: FileText,
      size: '500 KB',
      color: 'bg-indigo-100 text-indigo-600'
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Downloads</h1>
          <p className="text-xl text-blue-100 max-w-3xl font-medium">
            Access important documents and resources
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
            <Download className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Download essential information about our school, programs, and policies. All documents are available in PDF format.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  key={item.title}>
                  <Card hover className="cursor-pointer">
                    <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm font-medium">{item.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm text-green-500 font-medium">{item.size}</span>
                      <div className="flex items-center text-blue-600 font-semibold text-sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download PDF
                      </div>
                    </div>
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
        transition={{ duration: 0.5, delay: 0.6 }}
        className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-6 font-medium">
              If you're having trouble downloading any documents or need additional information, please don't hesitate to contact our office. We're here to help!
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="grid md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Document Format</h3>
                  <p className="text-sm text-gray-600 font-medium">All documents are provided in PDF format. You'll need a PDF reader to view them.</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <ShieldCheck className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Updated Regularly</h3>
                  <p className="text-sm text-gray-600 font-medium">We update these documents regularly to ensure you have the most current information.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Looking for Something Specific?
            </h2>
            <p className="text-gray-600 mb-6 font-medium">
              Can't find the document you're looking for? Contact our office and we'll be happy to provide you with the information you need.
            </p>
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
