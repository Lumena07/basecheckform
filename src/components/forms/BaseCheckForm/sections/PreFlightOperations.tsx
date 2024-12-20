import React from 'react';
import { EvaluationSection } from './EvaluationSection';
import { type EvaluationItem } from '@/types/evaluation';

interface PreFlightOperationsProps {
  items: EvaluationItem[];
  onToggleItem: (id: string) => void;
  onUpdatePerformance: (id: string, value: 1 | 2 | 3 | 4) => void;
  onUpdateComments: (id: string, value: string) => void;
  error?: string;
}

export const PreFlightOperations: React.FC<PreFlightOperationsProps> = (props) => {
  return (
    <EvaluationSection
      title="Pre-Flight Operation Items"
      performanceType="numeric"
      {...props}
    />
  );
};