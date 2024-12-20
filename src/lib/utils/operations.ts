export const getNonNormalOperations = (baseCheckNumber: number) => {
  const operations = {
    1: ['Engine Failure', 'Evacuation'],
    2: ['Fire', 'Hydraulic Issues'],
    3: ['Electrical Failure', 'Fuel Leak'],
    4: ['Landing Gear Failure'],
    5: ['Cabin Depressurization'],
    6: ['Dual Engine Failure']
  };
  
  return operations[baseCheckNumber as keyof typeof operations] || [];
};