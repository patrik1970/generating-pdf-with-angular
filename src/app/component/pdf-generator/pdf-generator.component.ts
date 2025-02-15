import { Component } from '@angular/core';
import { PdfService } from '../../service/pdf.service';

@Component({
  selector: 'app-pdf-generator',
  templateUrl: './pdf-generator.component.html',
  styleUrl: './pdf-generator.component.css'
})
export class PdfGeneratorComponent {
  constructor(private pdfService: PdfService) { }

  generatePdf() {
    this.pdfService.generatePdf();
  }
}
