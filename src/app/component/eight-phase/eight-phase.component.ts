import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-eight-phase',
  templateUrl: './eight-phase.component.html',
  styleUrls: ['./eight-phase.component.css']
})
export class EightPhaseComponent implements OnInit {

  today = new Date();
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  month = '';
  week = '';
  date = '';
  constructor() {
    this.date = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530').slice(0, 2);
    this.month = this.monthNames[this.today.getMonth()].slice(0, 3);
    this.week = this.weeks[this.today.getDay()];

  }

  ngOnInit(): void {
  }

}
