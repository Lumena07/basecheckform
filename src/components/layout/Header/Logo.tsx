
import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <Plane className="h-8 w-8" />
      <span className="text-xl font-bold">Base Check System</span>
    </Link>
  );
};