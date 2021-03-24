import { Component } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { ResumeLoaderService, ResumeData } from './resume-loader/resume-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-resume-online';
  faDownload = faDownload;

  resumeData: ResumeData;

  constructor(private resumeService: ResumeLoaderService) {
    this.resumeService.getResumeInformation()
      .subscribe((res: ResumeData) => {
        this.resumeData = res;
        console.log(this.resumeData)
        this.resumeService.storeResumeInformations(res);
      });
  }

}
