import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {
  private daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  private date = new Date;
  public hour: any;
  public minute: string;
  public second: string;
  public ampm: string;
  public day: string;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
    }, 1000); // update in each second

    this.day = this.daysArray[this.date.getDay()];
  }

  private updateDate(date: Date) {
    const hours = date.getHours(); //get hour from date
    this.ampm = hours >= 12 ? 'PM' : 'AM';
    this.hour = hours % 12; // make hour in 12 hours format
    this.hour = this.hour ? this.hour : 12; // if hour is 0 then assign it to 12.
    this.hour = this.hour < 10 ? '0' + this.hour : this.hour; //if hour is single digit then add 0 before it.

    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString();
    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString();

  }
}
