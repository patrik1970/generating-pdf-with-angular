# PdfGeneratorApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.1.

## Overview

PdfGeneratorApp is an Angular application that demonstrates how to generate PDF documents using the jsPDF library. The application includes a simple user interface with a button to generate a sample PDF document.

## Project Structure

The project has the following structure:
Collecting workspace informationHere is the updated README.md file with detailed documentation for your project:

```md
# PdfGeneratorApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.1.

## Overview

PdfGeneratorApp is an Angular application that demonstrates how to generate PDF documents using the jsPDF library. The application includes a simple user interface with a button to generate a sample PDF document.

## Project Structure

The project has the following structure:

```
generating-pdf-with-angular/
  ├── .angular/
  ├── .vscode/
  ├── src/
  │   ├── app/
  │   │   ├── component/
  │   │   │   └── pdf-generator/
  │   │   │       ├── pdf-generator.component.html
  │   │   │       ├── pdf-generator.component.ts
  │   │   │       └── pdf-generator.component.css
  │   │   ├── service/
  │   │   │   └── pdf.service.ts
  │   │   ├── app-routing.module.ts
  │   │   ├── app.component.html
  │   │   ├── app.component.ts
  │   │   ├── app.module.ts
  │   │   └── app.module.server.ts
  │   ├── assets/
  │   ├── favicon.ico
  │   ├── index.html
  │   ├── main.server.ts
  │   ├── main.ts
  │   └── styles.css
  ├── .editorconfig
  ├── .gitignore
  ├── angular.json
  ├── package.json
  ├── README.md
  ├── server.ts
  ├── tsconfig.app.json
  ├── tsconfig.json
  └── tsconfig.spec.json
```

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## PDF Generation

The PDF generation functionality is implemented in the `PdfService` class located at [`src/app/service/pdf.service.ts`](src/app/service/pdf.service.ts). The service uses the jsPDF library to create and save a PDF document.

### PdfService

```typescript
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
```

### PdfGeneratorComponent

The `PdfGeneratorComponent` is responsible for invoking the `generatePdf` method of the `PdfService` when the "Generate PDF" button is clicked. The component is located at pdf-generator.component.ts.

```typescript
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
```

### PdfGeneratorComponent HTML

The HTML template for the `PdfGeneratorComponent` includes a button to trigger PDF generation. The template is located at pdf-generator.component.html.

```html
<h2>PDF GENERATOR</h2>
<button (click)="generatePdf()">Generate PDF</button>
```

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
```

This documentation provides an overview of the project, instructions for running the development server, building the project, running tests, and details about the PDF generation functionality.
This documentation provides an overview of the project, instructions for running the development server, building the project, running tests, and details about the PDF generation functionality.

Similar code found with 1 license type