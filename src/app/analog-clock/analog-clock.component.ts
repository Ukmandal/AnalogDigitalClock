import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss']
})
export class AnalogClockComponent implements OnInit {
  @ViewChild('hrHand', {static: false}) hrHand : ElementRef;
  @ViewChild('minHand', {static: false}) minHand : ElementRef;
  @ViewChild('secHand', {static: false}) secHand : ElementRef;
  
  constructor() { }

  ngOnInit(): void {
    setInterval(()=> {
      const date = new Date();
      this.updateClock(date);
    }, 1000);
  }

  updateClock(date: Date){
    this.secHand.nativeElement.style.transform = 'rotate(' +
    date.getSeconds() * 6 + 'deg)';

    this.minHand.nativeElement.style.transform = 'rotate(' +
    date.getMinutes() * 6 + 'deg)';

    this.hrHand.nativeElement.style.transform = 'rotate(' +
    (date.getHours() * 30 + date.getMinutes() * 0.5) + 'deg)';
  }

}
