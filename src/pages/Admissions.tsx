import { useState } from 'react';
import { CheckCircle, Calendar, FileText, Download } from 'lucide-react';
import Card from '../components/Card';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import { motion } from 'framer-motion';

export default function Admissions() {
  const [formData, setFormData] = useState({
    parent_name: '',
    email: '',
    phone: '',
    student_name: '',
    student_age: '',
    program: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulate form submission success
      setTimeout(() => {
        setSuccess(true);
        setFormData({
          parent_name: '',
          email: '',
          phone: '',
          student_name: '',
          student_age: '',
          program: '',
          message: ''
        });
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError('Failed to submit application. Please try again.');
      console.error(err);
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const steps = [
    {
      number: 1,
      title: 'Submit Inquiry Form',
      description: 'Complete the online inquiry form below or contact us directly'
    },
    {
      number: 2,
      title: 'Schedule a Visit',
      description: 'Tour our facilities and meet our staff'
    },
    {
      number: 3,
      title: 'Complete Application',
      description: 'Submit required documents and application form'
    },
    {
      number: 4,
      title: 'Assessment & Interview',
      description: 'Age-appropriate assessment and parent interview'
    },
    {
      number: 5,
      title: 'Enrollment',
      description: 'Receive admission decision and complete enrollment'
    }
  ];

  const requirements = [
    'Child must meet age requirements for desired program',
    'Birth certificate (copy)',
    'Recent passport-size photographs',
    'Immunization records',
    'Previous school report (if applicable)',
    'Completed application form'
  ];

  return (
    <div className="min-h-screen">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-orange-700 to-orange-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-xl text-blue-100 max-w-3xl font-medium">
            Begin your child's educational journey with us
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Follow these simple steps to enroll your child
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="text-center border-2">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg animate-pulse">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 font-medium">{step.description}</p>
                </Card>
              </motion.div>
            ))}
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
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-3xl font-bold text-gray-900 mb-6">Age Requirements</motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-semibold text-gray-900">Crèche</span>
                      <span className="text-orange-600 font-medium">6 months - 2 years</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-semibold text-gray-900">Nursery</span>
                      <span className="text-orange-600 font-medium">2 - 3 years</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-semibold text-gray-900">Kindergarten</span>
                      <span className="text-orange-600 font-medium">4 - 5 years</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-semibold text-gray-900">Primary 1-6</span>
                      <span className="text-orange-600 font-medium">6 - 12 years</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-semibold text-gray-900">JHS 1</span>
                      <span className="text-orange-600 font-medium">12 - 13 years</span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-3xl font-bold text-gray-900 mb-6 mt-12">Required Documents</motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Card>
                  <ul className="space-y-3">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 font-medium">{req}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </div>

            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="text-3xl font-bold text-gray-900 mb-6">Academic Calendar</motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <Card className="mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">First Term</h3>
                        <p className="text-orange-600 text-sm font-medium">September - December</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Second Term</h3>
                        <p className="text-orange-600 text-sm font-medium">January - April</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Third Term</h3>
                        <p className="text-orange-600 text-sm font-medium">May - July</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="text-3xl font-bold text-gray-900 mb-6">Fee Structure</motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Card>
                  <p className="text-gray-600 font-medium mb-4">
                    Our fee structure is competitive and transparent. Fees cover tuition, learning materials, and most activities.
                  </p>
                  <div className="flex items-center space-x-2 text-green-600 mb-4 cursor-pointer">
                    <Download className="h-5 w-5" />
                    <span className="font-semibold">Download detailed fee schedule (PDF)</span>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">
                    Payment plans are available. Contact our admissions office for details.
                  </p>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Inquiry Form
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Start the admission process by completing this form
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <Card>
              {success ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                  <p className="text-gray-600 font-medium mb-6">
                    Thank you for your interest. We will contact you within 2 business days.
                  </p>
                  <Button onClick={() => setSuccess(false)}>
                    Submit Another Application
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Parent/Guardian Name"
                      name="parent_name"
                      value={formData.parent_name}
                      onChange={handleChange}
                      placeholder="Enter parent/guardian full name"
                      required
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      required
                    />
                  </div>

                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Student Name"
                      name="student_name"
                      value={formData.student_name}
                      onChange={handleChange}
                      placeholder="Enter student full name"
                      required
                    />
                    <Input
                      label="Student Age"
                      type="number"
                      name="student_age"
                      value={formData.student_age}
                      onChange={handleChange}
                      min="0"
                      max="15"
                      placeholder="Enter student age"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Desired Program
                    </label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                      required
                    >
                      <option value="" className="font-medium">Select a program</option>
                      <option value="Crèche" className="font-medium">Crèche (6 months - 2 years)</option>
                      <option value="Nursery" className="font-medium">Nursery (2 - 3 years)</option>
                      <option value="Kindergarten" className="font-medium">Kindergarten (4 - 5 years)</option>
                      <option value="Primary" className="font-medium">Primary (6 - 12 years)</option>
                      <option value="JHS" className="font-medium">JHS 1 (12 - 13 years)</option>
                    </select>
                  </div>

                  <Textarea
                    label="Additional Information (Optional)"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any questions or additional details you'd like to share..."
                  />

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full"
                  >
                    {loading ? 'Submitting...' : 'Submit Application'}
                  </Button>

                  <p className="text-sm text-green-500 text-center bg-green-100 rounded-lg p-2 font-medium">
                    By submitting this form, you agree to be contacted by our admissions team.
                  </p>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="py-16 bg-orange-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="bg-orange-600 text-white rounded-xl p-8">
            <FileText className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Need More Information?</h3>
            <p className="text-blue-100 font-medium mb-6">
              Download our school prospectus or schedule a visit to learn more about our programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary">
                Download Prospectus
              </Button>
              <Button variant="outline" className="bg-white text-blue-600 border-white hover:bg-blue-50">
                Schedule a Visit
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
