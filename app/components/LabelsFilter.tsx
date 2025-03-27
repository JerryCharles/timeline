'use client';

import { useState, useEffect } from 'react';

interface LabelsFilterProps {
  labels: string[];
  onFilterChange: (selectedLabels: string[]) => void;
}

export default function LabelsFilter({ labels, onFilterChange }: LabelsFilterProps) {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  
  const toggleLabel = (label: string) => {
    setSelectedLabels(prevLabels => {
      if (prevLabels.includes(label)) {
        return prevLabels.filter(l => l !== label);
      } else {
        return [...prevLabels, label];
      }
    });
  };

  const selectAll = () => {
    setSelectedLabels([...labels]);
  };

  const deselectAll = () => {
    setSelectedLabels([]);
  };

  // When selectedLabels change, notify the parent component
  useEffect(() => {
    onFilterChange(selectedLabels);
  }, [selectedLabels, onFilterChange]);

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by Labels</h3>
        <button 
          onClick={selectedLabels.length === labels.length ? deselectAll : selectAll}
          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          {selectedLabels.length === labels.length ? 'Deselect All' : 'Select All'}
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {labels.map((label, index) => (
          <button
            key={index}
            onClick={() => toggleLabel(label)}
            className={`text-xs px-3 py-1 rounded-full font-medium ${
              selectedLabels.includes(label)
                ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-700'
                : 'bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
} 