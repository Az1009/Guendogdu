import { Component,  OnInit, Input, } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  // @input von aussen einstellbare Eigenschaft Annotation
  @Input() darkMode = true;

  constructor() { }

  ngOnInit(): void {
  }

}
