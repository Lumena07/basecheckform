import React from 'react';
import { Card } from '@/components/ui/Card';
import { NON_NORMAL_OPERATIONS } from '@/lib/constants/nonNormalOperations';
import { NumericEvaluationItem } from '@/types/evaluation';

interface NonNormalOperationsProps {
  baseCheckNumber: number;
  items: NumericEvaluationItem[];
  onUpdatePerformance: (id: string, value: 1 | 2 | 3 | 4) => void;
  onUpdateComments: (id: string, value: string) => void;
  error?: string;
}

export const NonNormalOperations: React.FC<NonNormalOperationsProps> = ({
  baseCheckNumber,
  items,
  onUpdatePerformance,
  onUpdateComments,
  error
}) => {
  const operations = NON_NORMAL_OPERATIONS[baseCheckNumber as keyof typeof NON_NORMAL_OPERATIONS] || [];

  return (
    <Card className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-2">Non-Normal Operations for Base Check {baseCheckNumber}</h3>
        <p className="text-sm text-gray-600">Complete the following emergency and abnormal procedures:</p>
      </div>

      <div className="space-y-6">
        {operations.map((operation, index) => {
          const item = items.find(i => i.id === operation.id);
          if (!item) return null;

          return (
            <div key={operation.id} className="border-b pb-6 last:border-b-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-medium">
                    {index + 1}. {operation.title}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4].map((value) => (
                    <label key={value} className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name={`performance-${operation.id}`}
                        checked={item.performance === value}
                        onChange={() => onUpdatePerformance(operation.id, value as 1 | 2 | 3 | 4)}
                        className="text-blue-600"
                      />
                      <span>{value}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="ml-8 space-y-3">
                <p className="text-sm text-gray-600">{operation.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Required Steps:</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                    {operation.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>

                <textarea
                  value={item.comments || ''}
                  onChange={(e) => onUpdateComments(operation.id, e.target.value)}
                  placeholder="Add comments..."
                  className="mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows={2}
                />
              </div>
            </div>
          );
        })}
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </Card>
  );
};