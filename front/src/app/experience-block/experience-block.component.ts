import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/app/resume-loader/resume-loader.service';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ro-experience-block',
  templateUrl: './experience-block.component.html',
  styleUrls: ['./experience-block.component.scss']
})
export class ExperienceBlockComponent implements OnInit {

  faCircle = faCircle;

  @Input() experiences: Experience[];

  constructor() { }

  ngOnInit(): void {
  }

}
