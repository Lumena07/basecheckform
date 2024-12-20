import React from 'react';
import { Card } from '@/components/ui/Card';
import { type EvaluationItem } from '@/types/evaluation';

interface BaseEvaluationSectionProps {
  items: EvaluationItem[];
  onToggleItem: (id: string) => void;
  onUpdateComments: (id: string, value: string) => void;
  error?: string;
  title: string;
}

interface CompetencyEvaluationProps extends BaseEvaluationSectionProps {
  performanceType: 'competency';
  onUpdatePerformance: (id: string, value: 'C' | 'NC') => void;
}

interface NumericEvaluationProps extends BaseEvaluationSectionProps {
  performanceType: 'numeric';
  onUpdatePerformance: (id: string, value: 1 | 2 | 3 | 4) => void;
}

type EvaluationSectionProps = CompetencyEvaluationProps | NumericEvaluationProps;

export const EvaluationSection: React.FC<EvaluationSectionProps> = ({
  title,
  items = [],
  onUpdatePerformance,
  onUpdateComments,
  performanceType,
  error
}) => {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      
      <div className="space-y-4">
        {items?.map((item, index) => (
          <div key={item.id} className="border-b pb-4 last:border-b-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-lg font-medium">
                  {index + 1}. {item.title}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                {performanceType === 'numeric' ? (
                  [1, 2, 3, 4].map((value) => (
                    <label key={value} className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name={`performance-${item.id}`}
                        checked={item.performance === value}
                        onChange={() => onUpdatePerformance(item.id, value as 1 | 2 | 3 | 4)}
                        className="text-blue-600"
                      />
                      <span>{value}</span>
                    </label>
                  ))
                ) : (
                  ['C', 'NC'].map((value) => (
                    <label key={value} className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name={`performance-${item.id}`}
                        checked={item.performance === value}
                        onChange={() => onUpdatePerformance(item.id, value as 'C' | 'NC')}
                        className="text-blue-600"
                      />
                      <span>{value}</span>
                    </label>
                  ))
                )}
              </div>
            </div>
            
            <textarea
              value={item.comments || ''}
              onChange={(e) => onUpdateComments(item.id, e.target.value)}
              placeholder="Comments..."
              className="mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={2}
            />
          </div>
        ))}
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </Card>
  );
};