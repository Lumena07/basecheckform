import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { format } from 'date-fns';
import { type BaseCheck } from '@/types/baseCheck';
import { type Pilot } from '@/types/pilot';

const formatDate = (date: string) => format(new Date(date), 'PP');
const CHECKMARK = 'X';

export const generateBaseCheckPDF = async (baseCheck: BaseCheck, pilot: Pilot) => {
  const doc = new jsPDF();
  doc.setFont('calibri');  // Set base font
  const pageWidth = doc.internal.pageSize.width;
  const tableWidth = 140;  // Reduced from 160 to 140
  const margin = (pageWidth - tableWidth) / 2;
  let y = 10;  // Keep top margin
  let pageNumber = 5;  // Starting page number

  // Add logo
  const logoPath = '/images/auric-logo.png';

  // Common table styles
  const tableOptions = {
    styles: { 
      textColor: [45, 45, 45] as [number, number, number],  // Softer black for better readability
      fontStyle: 'normal' as const
    },
    headStyles: { 
      fillColor: [70, 70, 70] as [number, number, number],  // Softer header background
      textColor: [255, 255, 255] as [number, number, number]
    },
    startY: 0,
    margin: { top: 3 },
    pageBreak: 'avoid' as const
  };

  // Function to add header table
  const addHeaderTable = (pageNum: number) => {
    const headerTableWidth = 160;  // Increased width for header table
    const headerMargin = (pageWidth - headerTableWidth) / 2;  // Center the header table

    autoTable(doc, {
      ...tableOptions,
      startY: 5,
      margin: { left: headerMargin, right: headerMargin },  // Use header-specific margins
      theme: 'grid',
      styles: { 
        cellPadding: 1, 
        fontSize: 8,
        lineWidth: 0.1,
        lineColor: [0, 0, 0] as [number, number, number],
        textColor: [0, 0, 0] as [number, number, number]
      },
      didDrawCell: function(data) {
        if (data.row.index === 0 && data.column.index === 0 && data.cell.section === 'body') {
          const dim = data.cell;
          const textPos = data.cell;
          const logoHeight = dim.height - 8;
          const logoWidth = logoHeight*1.2;
          
          doc.addImage(
            logoPath,
            'PNG',
            textPos.x + (dim.width - logoWidth) / 2,
            textPos.y + 4,
            logoWidth,
            logoHeight
          );
        }
      },
      body: [
        [{
          content: ' ',
          rowSpan: 4,
          styles: {
            cellWidth: 32,
            minCellHeight: 27,
            valign: 'middle',
            halign: 'center'
          }
        },
        {
          content: 'AURIC AIR SERVICES LIMITED\nOPERATIONS MANUAL – TRAINING/PART D',
          rowSpan: 4,
          styles: {
            cellWidth: 78,
            valign: 'middle',
            halign: 'center',
            fontSize: 10,
            textColor: [0, 0, 0] as [number, number, number],
            cellPadding: 2
          }
        },
        'Doc./No.',
        'OM-D/002'],
        [ 'Issue./Rev.', '004/000'],
        [ 'Date:', '01/12/24'],
        [ 'Page:', `20-${pageNum}`]
      ],
      columnStyles: {
        0: { cellWidth: 40 },  // Logo column
        1: { cellWidth: 80 },  // Title column
        2: { cellWidth: 20 },  // Doc number column
        3: { cellWidth: 20 }   // Value column
      }
    });

    // Return the Y position after the header table
    return (doc as any).lastAutoTable.finalY + 10;  // Reduced from 20 to 10 units of space
  };

  // Add header to first page
  y = addHeaderTable(pageNumber);  // Get initial Y position after header

  // Add page event listener
  doc.addPage = ((originalAddPage) => {
    return function(this: jsPDF, format?: string | number[], orientation?: 'p' | 'portrait' | 'l' | 'landscape') {
      originalAddPage.call(this, format, orientation);
      pageNumber++;
      y = addHeaderTable(pageNumber);  // Update y position after header
      return this;
    };
  })(doc.addPage);

  // Rest of the document
  doc.setFontSize(20);
  doc.text('Appendix 2: Operator Proficiency Check Form (OPC)', pageWidth / 2, y, {
    align: 'center'  // Center align the text
  });
  y += 7.5;

  // Notes table
  autoTable(doc, {
    ...tableOptions,
    startY: y,
    margin: { left: margin, right: margin },
    styles: {
      fontSize: 7,
      cellPadding: 2,
      lineWidth: 0.1,
      lineColor: [0, 0, 0] as [number, number, number],
      textColor: [0, 0, 0] as [number, number, number]
    },
    body: [
      ['NOTES:'],
      ['1. This form must be submitted to the chief pilot within 3 days of the completion of the test.'],
      ['2. For this form to be accepted, each page must be completed in full and must be initialed by BOTH the examiner and the candidate.'],
      ['3. Any alteration to the test/check details, grading, observation(s) or any date must be initialed by the examiner and the chief pilot.']
    ],
    columnStyles: {
      0: { cellWidth: tableWidth }
    }
  });

  y = (doc as any).lastAutoTable.finalY + 10;

  // Check Type table
  autoTable(doc, {
    ...tableOptions,
    startY: y,
    margin: { left: margin, right: margin },
    styles: {
      fontSize: 10,
      cellPadding: 2,
      lineWidth: 0.1,
      lineColor: [0, 0, 0] as [number, number, number],
      textColor: [0, 0, 0] as [number, number, number]
    },
    body: [[
      {
        content: 'Initial check',
        styles: { halign: 'center' }
      },
      {
        content: 'Recurrent check',
        styles: { halign: 'center' }
      },
      'Date of check'
    ],
    [
      baseCheck.checkType === 'initial' ? CHECKMARK : '',
      baseCheck.checkType === 'recurrent' ? CHECKMARK : '',
      formatDate(baseCheck.date)
    ]],
    columnStyles: {
      0: { cellWidth: tableWidth / 3 },
      1: { cellWidth: tableWidth / 3 },
      2: { cellWidth: tableWidth / 3, halign: 'center' }
    }
  });

  y = (doc as any).lastAutoTable.finalY + 10;

  // Candidate Details table
  autoTable(doc, {
    ...tableOptions,
    startY: y,
    margin: { left: margin, right: margin },
    head: [['Candidate Details', '']],
    body: [
      [
        { content: 'Name:', styles: { fontStyle: 'bold' } },
        pilot.name || '',
      ],
      [
        { content: 'License Number:', styles: { fontStyle: 'bold' } },
        pilot.licenseNumber || '',
      ],
      [
        { content: 'Medical Expiry:', styles: { fontStyle: 'bold' } },
        formatDate(baseCheck.medicalExpiry) || '',
      ],
      [
        { content: 'Total Hours:', styles: { fontStyle: 'bold' } },
        baseCheck.totalHours?.toString() || '',
      ],
      [
        { content: 'Hours on Type:', styles: { fontStyle: 'bold' } },
        baseCheck.hoursOnType?.toString() || '',
      ]
    ],
    columnStyles: {
      0: { cellWidth: 50, fontStyle: 'bold' },
      1: { cellWidth: tableWidth - 50 }
    }
  });

  y = (doc as any).lastAutoTable.finalY + 10;

  // Test Details table
  autoTable(doc, {
    ...tableOptions,
    startY: y,
    margin: { left: margin, right: margin },
    head: [['Test Details', '']],
    body: [
      ['Aircraft Type:', baseCheck.aircraftType || ''],
      ['Place of Departure:', baseCheck.departurePlace || ''],
      ['Registration:', baseCheck.registration || ''],
      ['Airborne Time:', baseCheck.airborneTime || ''],
      ['Landing Time:', baseCheck.landingTime || ''],
      ['Base Check #:', baseCheck.baseCheckNumber?.toString() || ''],
      ['Briefing Time:', baseCheck.briefingTime ? `${baseCheck.briefingTime} mins` : ''],
      ['Flight Time:', baseCheck.flightTime ? `${baseCheck.flightTime} mins` : ''],
      ['Number of Landings:', baseCheck.numberOfLandings?.toString() || ''],
      ['Debriefing Time:', baseCheck.debriefingTime ? `${baseCheck.debriefingTime} mins` : ''],
      ['Logbook Checked:', baseCheck.logbookChecked ? CHECKMARK : ''],
      ['License Checked:', baseCheck.licenseChecked ? CHECKMARK : '']
    ],
    columnStyles: {
      0: { cellWidth: 50, fontStyle: 'bold' },  // Reduced from 60
      1: { cellWidth: tableWidth - 50 }  // Adjusted accordingly
    }
  });

  y = (doc as any).lastAutoTable.finalY + 10;  // Increased spacing before next section

  // Function to add section with table
  const addSectionTable = (title: string, headers: string[], rows: any[]) => {
    y = (doc as any).lastAutoTable.finalY + 10;  // Space between sections
    
    // Check if there's enough space for title and table
    if (y > doc.internal.pageSize.height - 60) {
      doc.addPage();
      y = y + 5;
    }
    
    doc.setFontSize(14);
    doc.text(title, margin, y);
    
    autoTable(doc, {
      ...tableOptions,
      startY: y + 3,  // Reduced from 8 to 3 - minimal space between title and table
      margin: { left: margin, right: margin },
      head: [headers],
      body: rows
    });
  };

  // Ground Evaluation Section
  addSectionTable(
    'Ground Evaluation',
    ['Item', 'C', 'NC', 'Comments'],
    baseCheck.normalOperations
      .filter(op => op.id.startsWith('ground_'))
      .map(op => [
        op.title,
        op.performance === 'C' ? CHECKMARK : '',
        op.performance === 'NC' ? CHECKMARK : '',
        op.comments || ''
      ])
  );

  // Map sections to their ID prefixes
  const sectionPrefixes = {
    'Pre-Flight Operations': 'preflight_',
    'Takeoff Procedures': 'takeoff_',
    'Flight Maneuvers': 'maneuver_',
    'Instrument Flying': 'instrument_',
    'Approach & Landing': 'approach_'
  };

  // Numeric Sections
  Object.entries(sectionPrefixes).forEach(([section, prefix]) => {
    addSectionTable(
      section,
      ['Item', '1', '2', '3', '4', 'Comments'],
      baseCheck.normalOperations
        .filter(op => op.id.startsWith(prefix))
        .map(op => [
          op.title,
          op.performance === 1 ? CHECKMARK : '',
          op.performance === 2 ? CHECKMARK : '',
          op.performance === 3 ? CHECKMARK : '',
          op.performance === 4 ? CHECKMARK : '',
          op.comments || ''
        ])
    );
  });

  // Non-Normal Operations
  addSectionTable(
    'Non-Normal Operations',
    ['Item', '1', '2', '3', '4', 'Comments'],
    baseCheck.nonNormalOperations.map(op => [
      op.title,
      op.performance === 1 ? CHECKMARK : '',
      op.performance === 2 ? CHECKMARK : '',
      op.performance === 3 ? CHECKMARK : '',
      op.performance === 4 ? CHECKMARK : '',
      op.comments || ''
    ])
  );

  // Final Assessment
  addSectionTable(
    'Final Assessment',
    ['Field', 'Value'],
    [
      ['Result', baseCheck.result],
      ['Notes', baseCheck.notes || ''],
      ['Examiner Name', baseCheck.examinerName],
      ['Examiner License', baseCheck.examinerLicense],
      ['Examiner Signature', ""],
      ['Candidate Signature', ""],
      
    ]
  );

  return doc;
};

