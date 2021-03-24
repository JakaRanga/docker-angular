import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ResumeData {

  profile: Profile,
  contacts: Contact[],
  experiences: Experience[],
  educations: Education[],
  skills: Skill[],
  languages: Language[]

}

export interface Profile {

  name: string,
  title: string,
  catchphrase: string,
  birthdate: string,
  nationality: string,
  localisation: string

}

export interface Contact {

  name: string,
  value: string

}

export interface Experience {

  title: string,
  subtitle: string,
  description: string,
  date: string

}

export interface Education {

  title: string,
  subtitle: string,
  date: string

}

export interface Skill {

  name: string,
  knowledge: number

}

export interface Language {

  type: string,
  level: number

}

@Injectable({
  providedIn: 'root'
})
export class ResumeLoaderService {

  resumeData: ResumeData;

  constructor(private http: HttpClient) { }

  public getResumeInformation(): Observable<ResumeData> {
    return this.http.get<ResumeData>(`${environment.apiUrl}/profile`);
  }

  public storeResumeInformations(resumeData: ResumeData): void {
    this.resumeData = resumeData;
  }

  public getResumeInformations(): ResumeData {
    return this.resumeData;
  }
}
