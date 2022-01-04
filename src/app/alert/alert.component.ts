import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() type: string;
  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
    this.type = this.type ? this.type : 'error';
    this.message = this.message ? this.message : 'Ocurrió un error, inténtelo nuevamente';
  }

}
