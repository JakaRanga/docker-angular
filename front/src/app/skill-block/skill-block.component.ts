import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/resume-loader/resume-loader.service';

@Component({
  selector: 'ro-skill-block',
  templateUrl: './skill-block.component.html',
  styleUrls: ['./skill-block.component.scss']
})
export class SkillBlockComponent implements OnInit {


  @Input() skills: Skill[];

  constructor() { }

  ngOnInit(): void {
  }

}
