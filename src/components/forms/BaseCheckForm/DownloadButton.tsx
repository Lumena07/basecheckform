import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { generateBaseCheckPDF } from '@/lib/utils/pdf';
import { type BaseCheck } from '@/types/baseCheck';
import { db } from '@/lib/data/mockDatabase';

interface DownloadButtonProps {
  baseCheck: BaseCheck;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ baseCheck }) => {
  const { data: pilot } = useQuery({
    queryKey: ['pilot', baseCheck.pilotId],
    queryFn: () => db.pilots.findById(baseCheck.pilotId)
  });

  const handleDownload = async () => {
    if (!pilot) return;

    try {
      const doc = await generateBaseCheckPDF(baseCheck, pilot);
      doc.save(`base-check-${baseCheck.baseCheckNumber}-${pilot.name.toLowerCase().replace(/\s+/g, '-')}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      variant="secondary"
      disabled={!pilot}
      className="flex items-center space-x-2"
    >
      <Download className="h-4 w-4" />
      <span>Download PDF</span>
    </Button>
  );
};