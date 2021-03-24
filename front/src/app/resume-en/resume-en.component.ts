import { Component, OnInit, Input } from '@angular/core';
import { faEnvelope, faPhone, faLink, faDownload } from '@fortawesome/free-solid-svg-icons';
import { ResumeData } from '../resume-loader/resume-loader.service';

@Component({
  selector: 'ro-resume-en',
  templateUrl: './resume-en.component.html',
  styleUrls: ['./resume-en.component.scss'],
  host: { 'class': 'ro-flex-fill ro-flex-column' }
})
export class ResumeEnComponent implements OnInit {

  @Input() resumeData: ResumeData;

  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLink = faLink;
  faDownload = faDownload;

  constructor() { }

  ngOnInit(): void {
  }

  printAsPdf(componentName: string) {
    let printContents = document.getElementById(componentName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }
}
