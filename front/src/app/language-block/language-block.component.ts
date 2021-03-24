import { Component, OnInit, Input } from '@angular/core';
import { Language } from '../resume-loader/resume-loader.service';

@Component({
  selector: 'ro-language-block',
  templateUrl: './language-block.component.html',
  styleUrls: ['./language-block.component.scss']
})
export class LanguageBlockComponent implements OnInit {

  @Input() languages: Language[]

  counter: Array<number> = [1, 2, 3, 4]

  constructor() { }

  ngOnInit(): void {
  }

}
