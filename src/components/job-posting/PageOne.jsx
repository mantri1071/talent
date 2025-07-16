import React from 'react';
import { motion } from 'framer-motion';
import Select from 'react-select';
import { Briefcase, MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from './image/logots.jpeg';

const locationOptions = [
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'delhi', label: 'Delhi' },
  { value: 'bangalore', label: 'Bangalore' },
  { value: 'hyderabad', label: 'Hyderabad' },
  { value: 'pune', label: 'Pune' },
  { value: 'chennai', label: 'Chennai' },
  { value: 'kolkata', label: 'Kolkata' },
  { value: 'ahmedabad', label: 'Ahmedabad' },
  { value: 'remote', label: 'Remote' }
];

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(4px)',
    border: state.isFocused ? '2px solid #3b82f6' : '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '0.35rem',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#9ca3af',
    },
    transition: 'all 200ms ease-in-out',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#dbeafe',
    borderRadius: '0.375rem',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: '#1e40af',
    fontWeight: 500,
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: '#1e40af',
    '&:hover': {
      backgroundColor: '#537fb5ff',
      color: '#1d4ed8',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#2563eb' : state.isFocused ? '#eff6ff' : 'white',
    color: state.isSelected ? 'white' : '#1f2937',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '0.5rem',
    overflow: 'hidden',
  }),
};

const PageOne = ({ formData, handleInputChange, handleLocationChange, handleSaveDraft, handleSaveContinue }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <motion.div 
        className="flex flex-col items-center justify-center space-y-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.img 
            src="https://storage.googleapis.com/hostinger-horizons-assets-prod/621da426-f3e6-4b7f-b5b2-b4842644991f/d7d106f45b78e87b30a4a4036b97bc2f.png" 
            alt="Two professionals collaborating over a desk with a lightbulb idea" 
            className="w-full max-w-md rounded-2xl shadow-2xl"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="glass-card rounded-2xl p-5 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex items-center space-x-3 mb-5">
          <img src={logo} alt="Talent Shift Logo" className="w-auto h-12" />
        </div>

          <div className="grid md:grid-cols-2 gap-4 ">
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2 mt-2 ">
                <Briefcase className="w-4 h-4" />
                <span>Job Title</span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Senior Frontend Developer"
                className="form-input"
                value={formData.jobTitle}
                onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2 mt-2">
                <Clock className="w-4 h-4" />
                <span>Years of Experience</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 3"
                className="form-input"
                value={formData.maxExperience}
                onChange={(e) => handleInputChange('maxExperience', e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 ">
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2 mt-2">
                <Users className="w-4 h-4" />
                <span>Job Type</span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <select 
                className="form-select"
                value={formData.jobType}
                onChange={(e) => handleInputChange('jobType', e.target.value)}
                required
              >
                <option value="">select job type</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="freelance">Freelance</option>
                <option value="freelance">Temporary</option>
              </select>
            </div>
            
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2 mt-2">
                <MapPin className="w-4 h-4" />
                <span>Location(s)</span>
              </label>
              <Select
                isMulti
                name="locations"
                options={locationOptions}
                className="react-select-container "
                classNamePrefix="react-select"
                placeholder="select locations..."
                value={formData.locations}
                onChange={handleLocationChange}
                styles={customSelectStyles}
              />
            </div>
            </div>

          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2 mt-2">
              <span>💡</span>
              <span>Required Skills</span>
            </label>
            <input
              type="text"
              placeholder="e.g. React, TypeScript, Node.js"
              className="form-input"
              value={formData.skills}
              onChange={(e) => handleInputChange('skills', e.target.value)}
            />
            <p className="text-xs text-gray-500 mt-1">Separate multiple skills with commas</p>
          </div>

          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mt-2 mb-2">
              <span>📝</span>
              <span>Job Description</span>
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="border border-gray-200 rounded-lg bg-white/80 backdrop-blur-sm h-44">
              <div className="flex items-center space-x-2 p-2 border-b border-gray-200">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <strong>B</strong>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <em>I</em>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <u>U</u>
                </button>
                <select className="text-sm border-none bg-transparent">
                  <option>Normal</option>
                </select>
              </div>
              <textarea
                placeholder="Describe the role, responsibilities, requirements, etc..."
                className="w-full p-4 border-none bg-transparent focus:outline-none resize-none"
                rows="6"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <Button 
              onClick={handleSaveDraft}
              className="btn-secondary"
            >
              Save Draft
            </Button>
            <Button 
              onClick={handleSaveContinue}
              className="btn-primary"
            >
              Save & Continue
            </Button>
          </div>
      </motion.div>
    </div>
  );
};

export default PageOne;