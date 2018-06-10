import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
  <div class="card" style="width: 18rem;">
  <ng-content select=".heading"> </ng-content>
  <div class="card-body">
   <ng-content select=".body"> </ng-content>
  </div>
</div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
