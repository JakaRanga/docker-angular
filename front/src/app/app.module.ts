import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResumeEnComponent } from './resume-en/resume-en.component';
import { SkillBlockComponent } from './skill-block/skill-block.component';
import { ResumeLoaderService } from './resume-loader/resume-loader.service';
import { ExperienceBlockComponent } from './experience-block/experience-block.component';
import { LanguageBlockComponent } from './language-block/language-block.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeEnComponent,
    SkillBlockComponent,
    ExperienceBlockComponent,
    LanguageBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FontAwesomeModule
  ],
  providers: [HttpClient, ResumeLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
