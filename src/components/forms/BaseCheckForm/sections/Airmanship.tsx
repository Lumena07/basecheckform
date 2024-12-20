import React from 'react';
import { EvaluationSection } from './EvaluationSection';
import { type EvaluationItem } from '@/types/evaluation';

interface AirmanshipProps {
  items: EvaluationItem[];
  onToggleItem: (id: string) => void;
  onUpdatePerformance: (id: string, value: 1 | 2 | 3 | 4 | 'C' | 'NC') => void;
  onUpdateComments: (id: string, value: string) => void;
  error?: string;
}

export const Airmanship: React.FC<AirmanshipProps> = (props) => {
  return (
    <EvaluationSection
      title="Airmanship Items"
      performanceType="competency"
      {...props}
    />
  );
};