import React from 'react';
import { getNonNormalOperations } from '../../../lib/utils/operations';

interface BaseCheckNonNormalOpsProps {
  baseCheckNumber: number;
}

export const BaseCheckNonNormalOps: React.FC<BaseCheckNonNormalOpsProps> = ({ baseCheckNumber }) => {
  const nonNormalOps = getNonNormalOperations(baseCheckNumber);

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="font-medium text-lg mb-4">Non-Normal Operations for Base Check {baseCheckNumber}</h3>
      <ul className="list-disc pl-5 space-y-2">
        {nonNormalOps.map((op) => (
          <li key={op}>{op}</li>
        ))}
      </ul>
    </div>
  );
};