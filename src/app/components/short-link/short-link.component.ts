import { Component, EventEmitter, Output } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-short-link',
  templateUrl: './short-link.component.html',
  styleUrls: ['./short-link.component.scss'],
})
export class ShortLinkComponent {
  url = 'https://api.shrtco.de/v2/shorten?url=';
  param = '';
  @Output() links = new EventEmitter();
  constructor() {}
  onclick() {
    fetch(this.url + this.param)
      .then((response) => response.json())
      .then((data) => {
        this.links.emit([data.result.original_link, data.result.short_link]);
      });
  }
}
