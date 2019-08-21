import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  appTitle: string = 'Kevin\'s First Angular App'

  //or you can do it:
  //appTitle = 'myapp'

  constructor() { }

  ngOnInit() {
  }

}
