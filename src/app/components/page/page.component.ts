import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent {
  links: Array<any> = [];
  reciveValue(param: any) {
    this.links.push(param);
  }
  constructor() {}
}
