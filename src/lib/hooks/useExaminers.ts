import { useState, useEffect } from 'react';
import { db } from '@/lib/data/mockDatabase';
import { type Examiner } from '@/types/examiner';

export const useExaminers = () => {
  const [examiners, setExaminers] = useState<Examiner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExaminers = async () => {
      try {
        const data = await db.examiners.findAll();
        setExaminers(data);
      } catch (err) {
        setError('Failed to fetch examiners');
      } finally {
        setLoading(false);
      }
    };

    fetchExaminers();
  }, []);

  return { examiners, loading, error };
}; 