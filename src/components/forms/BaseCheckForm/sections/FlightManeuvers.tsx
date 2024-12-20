import React from 'react';
import { EvaluationSection } from './EvaluationSection';
import { type EvaluationItem } from '@/types/evaluation';

interface FlightManeuversProps {
  items: EvaluationItem[];
  onToggleItem: (id: string) => void;
  onUpdatePerformance: (id: string, value: 1 | 2 | 3 | 4) => void;
  onUpdateComments: (id: string, value: string) => void;
  error?: string;
}

export const FlightManeuvers: React.FC<FlightManeuversProps> = (props) => {
  return (
    <EvaluationSection
      title="Flight Maneuver Items"
      performanceType="numeric"
      {...props}
    />
  );
};