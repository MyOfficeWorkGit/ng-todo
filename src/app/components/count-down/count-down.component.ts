import { interval, Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnInit {
  constructor() {}

  @Input() set endDate(endDate: Date) {
    this._endDate = endDate;
    this._dateNow = new Date();
  }

  private _endDate: Date;
  private _dateNow: Date = new Date();
  private _subscription: Subscription = new Subscription();
  private _millisecondInSecond: number = 1000;
  private _secondInMinute: number = 60;
  private _minuteInHour: number = 60;
  private _hoursInDay: number = 24;

  public timeDiff: number;
  public seconds: number;
  public minutes: number;
  public hours: number;
  public days: number;

  ngOnInit(): void {
    this._subscription.add(
      interval(1000).subscribe(()=>{
        this.getTimeDiff();
      })
    )
  }

  private getTimeDiff() {
    this.timeDiff =
      new Date(this._endDate).getTime() - new Date().getTime();
    this.setTimeUnits(this.timeDiff);
  }
  private setTimeUnits(timeDiff: number) {
    this.seconds = Math.floor(
      (timeDiff / this._millisecondInSecond) % this._secondInMinute
    );
    this.minutes = Math.floor(
      (timeDiff / (this._millisecondInSecond * this._minuteInHour)) %
        this._minuteInHour
    );
    this.hours = Math.floor(
      (timeDiff /
        (this._millisecondInSecond *
          this._minuteInHour *
          this._secondInMinute)) %
        this._hoursInDay
    );
    this.days = Math.floor(
      timeDiff /
        (this._millisecondInSecond *
          this._minuteInHour *
          this._secondInMinute *
          this._hoursInDay)
    );
  }
}
