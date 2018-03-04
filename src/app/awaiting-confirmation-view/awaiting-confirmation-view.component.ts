import { Component, OnInit } from '@angular/core';
import { MainView } from '../main-view/main-view.component';

@Component({
  selector: 'awaiting-confirmation-view',
  templateUrl: './awaiting-confirmation-view.component.html',
  styleUrls: ['./awaiting-confirmation-view.component.css']
})
export class AwaitingConfirmationView implements OnInit {
  presentingView: MainView;

  constructor() { }

  ngOnInit() {
  }

}
