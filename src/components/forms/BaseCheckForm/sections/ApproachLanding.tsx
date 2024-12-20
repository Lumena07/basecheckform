import React from 'react';
import { EvaluationSection } from './EvaluationSection';
import { type EvaluationItem } from '@/types/evaluation';

interface ApproachLandingProps {
  items: EvaluationItem[];
  onToggleItem: (id: string) => void;
  onUpdatePerformance: (id: string, value: 1 | 2 | 3 | 4 | 'C' | 'NC') => void;
  onUpdateComments: (id: string, value: string) => void;
  error?: string;
}

export const ApproachLanding: React.FC<ApproachLandingProps> = (props) => {
  return (
    <EvaluationSection
      title="Approach and Landing Items"
      performanceType="numeric"
      {...props}
    />
  );
};