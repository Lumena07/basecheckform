import React from 'react';
import { EvaluationSection } from './EvaluationSection';
import { type EvaluationItem } from '@/types/evaluation';

interface GroundEvaluationProps {
  items: EvaluationItem[];
  onToggleItem: (id: string) => void;
  onUpdatePerformance: (id: string, value: 'C' | 'NC') => void;
  onUpdateComments: (id: string, value: string) => void;
  error?: string;
}

export const GroundEvaluation: React.FC<GroundEvaluationProps> = (props) => {
  return (
    <
      EvaluationSection
      title="Ground Evaluation Items"
      performanceType="competency"
      {...props}
    />
  );
};