import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  generatePdf() {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Set the document properties
    doc.setFontSize(22);
    doc.text('Custom PDF Document', 10, 10);

    doc.setFontSize(16);
    doc.text('______________________________________________________________' , 10, 20);
  
    doc.setFontSize(16);
    doc.text('This is a sample PDF generated using jsPDF in Angular.' , 10, 35);

    // Save the PDF
    doc.save('sample.pdf');
  }
}
