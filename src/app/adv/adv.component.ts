import { Component, OnInit } from '@angular/core';
import {AdvAuthor} from './AdvAuthor';
import {Help} from './Help';

@Component({
  selector: 'app-adv',
  templateUrl: './adv.component.html',
  styleUrls: ['./adv.component.css']
})
export class AdvComponent implements OnInit {
  advContent: string;
  advAuthor: AdvAuthor;
  help: Help;
  setAdvContent(advContent: string) {
   this.advContent = advContent;
  }
  ngOnInit() {
    this.setAdvContent('jack');
    this.advAuthor = new AdvAuthor('jackliu', 1);
    this.help = new Help('ps -ef|grep 3030', 4);
  }

}
