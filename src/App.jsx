import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import PageOne from '@/components/job-posting/PageOne';
import PageTwo from '@/components/job-posting/PageTwo';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobType: '',
    locations: [],
    minExperience: '',
    maxExperience: '',
    skills: '',
    description: '',
    currency: 'INR (₹)',
    minSalary: '',
    maxSalary: '',
    unit: 'Per Year',
    hideSalary: false,
    function: '',
    employerJobId: '',
    vacancies: '5',
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLocationChange = (selectedOptions) => {
    setFormData(prev => ({
      ...prev,
      locations: selectedOptions || []
    }));
  };

  const validatePageOne = () => {
    const { jobTitle, jobType, description } = formData;
    if (!jobTitle.trim()) {
      toast({
        title: "Heads up!",
        description: "Job Title is a required field.",
        variant: "destructive",
      });
      return false;
    }
    if (!jobType) {
      toast({
        title: "Heads up!",
        description: "Job Type is a required field.",
        variant: "destructive",
      });
      return false;
    }
    if (!description.trim()) {
      toast({
        title: "Heads up!",
        description: "Job Description is a required field.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleSaveContinue = () => {
    if (currentPage === 1) {
      if (validatePageOne()) {
        setCurrentPage(2);
        toast({
          title: "Progress Saved!",
          description: "Moving to salary details...",
        });
      }
    } else {
      toast({
        title: "🎉 Job Posted!",
        description: "This is where the final submission would happen.",
      });
    }
  };

  const handleBack = () => {
    if (currentPage === 2) {
      setCurrentPage(1);
    }
  };

  const handleSaveDraft = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <>
      <Helmet>
        <title>TalentShift - Job Posting Platform</title>
        <meta name="description" content="Create and manage job postings with TalentShift's intuitive platform" />
      </Helmet>
      
      <div className="relative min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 p-4 flex items-center justify-center">
        <img 
          src="https://storage.googleapis.com/hostinger-horizons-assets-prod/621da426-f3e6-4b7f-b5b2-b4842644991f/e42248b5cc0ad3887837fd77ef21c19e.png" 
          alt="Start IT Now Logo" 
          className="absolute top-6 left-6 w-auto h-12 z-10" 
        />
        <div className="max-w-7xl w-full mx-auto">
          <AnimatePresence mode="wait">
            {currentPage === 1 ? (
              <motion.div
                key="page1"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <PageOne
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleLocationChange={handleLocationChange}
                  handleSaveDraft={handleSaveDraft}
                  handleSaveContinue={handleSaveContinue}
                />
              </motion.div>
            ) : (
              <motion.div
                key="page2"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <PageTwo
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleBack={handleBack}
                  handleSaveContinue={handleSaveContinue}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default App;