import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PageTwo = ({ formData, handleInputChange, handleBack, handleSaveContinue }) => {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <motion.div 
        className="flex items-center space-x-4 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Button 
          onClick={handleBack}
          className="flex items-center space-x-2 btn-secondary"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back</span>
        </Button>
      </motion.div>

      <motion.div 
        className="glass-card rounded-2xl p-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-6">Salary Range (₹)</h3>
        
        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Currency</label>
              <select 
                className="form-select text-sm"
                value={formData.currency}
                onChange={(e) => handleInputChange('currency', e.target.value)}
              >
                <option value="INR (₹)">INR (₹)</option>
                <option value="USD ($)">USD ($)</option>
                <option value="EUR (€)">EUR (€)</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Minimum</label>
              <input
                type="text"
                placeholder="Eg; 5,00,000"
                className="form-input text-sm"
                value={formData.minSalary}
                onChange={(e) => handleInputChange('minSalary', e.target.value)}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Maximum</label>
              <input
                type="text"
                placeholder="Eg; 6,00,000"
                className="form-input text-sm"
                value={formData.maxSalary}
                onChange={(e) => handleInputChange('maxSalary', e.target.value)}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Unit</label>
              <select 
                className="form-select text-sm"
                value={formData.unit}
                onChange={(e) => handleInputChange('unit', e.target.value)}
              >
                <option value="Per Year">Per Year</option>
                <option value="Per Month">Per Month</option>
                <option value="Per Hour">Per Hour</option>
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="hideSalary"
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              checked={formData.hideSalary}
              onChange={(e) => handleInputChange('hideSalary', e.target.checked)}
            />
            <label htmlFor="hideSalary" className="text-sm text-gray-700">
              Hide salary from candidate
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Function</label>
              <select 
                className="form-select"
                value={formData.function}
                onChange={(e) => handleInputChange('function', e.target.value)}
              >
                <option value="">Select...</option>
                <option value="engineering">Engineering</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="sales">Sales</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Employer Job ID</label>
              <input
                type="text"
                placeholder="Enter unique job identifier"
                className="form-input"
                value={formData.employerJobId}
                onChange={(e) => handleInputChange('employerJobId', e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Vacancies</label>
            <input
              type="number"
              className="form-input w-20"
              value={formData.vacancies}
              onChange={(e) => handleInputChange('vacancies', e.target.value)}
            />
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="flex justify-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Button 
          onClick={handleSaveContinue}
          className="btn-primary px-12 py-4 text-lg"
        >
          Save & Continue
        </Button>
      </motion.div>
    </div>
  );
};

export default PageTwo;