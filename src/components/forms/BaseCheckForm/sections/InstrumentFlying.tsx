import React from 'react';
import { EvaluationSection } from './EvaluationSection';
import { type EvaluationItem } from '@/types/evaluation';

interface InstrumentFlyingProps {
  items: EvaluationItem[];
  onToggleItem: (id: string) => void;
  onUpdatePerformance: (id: string, value: 1 | 2 | "C" | "NC" | 3 | 4) => void;
  onUpdateComments: (id: string, value: string) => void;
  error?: string;
}

export const InstrumentFlying: React.FC<InstrumentFlyingProps> = (props) => {
  return (
    <EvaluationSection
      title="Instrument Flying Items"
      performanceType="numeric"
      {...props}
    />
  );
};