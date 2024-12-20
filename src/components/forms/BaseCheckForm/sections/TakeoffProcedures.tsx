import React from 'react';
import { EvaluationSection } from './EvaluationSection';
import { type EvaluationItem } from '@/types/evaluation';

interface TakeoffProceduresProps {
  items: EvaluationItem[];
  onToggleItem: (id: string) => void;
  onUpdatePerformance: (id: string, value: 1 | 2 | 3 | 4) => void;
  onUpdateComments: (id: string, value: string) => void;
  error?: string;
}

export const TakeoffProcedures: React.FC<TakeoffProceduresProps> = (props) => {
  return (
    <EvaluationSection
      title="Take-off Procedure Items"
      performanceType="numeric"
      {...props}
    />
  );
};