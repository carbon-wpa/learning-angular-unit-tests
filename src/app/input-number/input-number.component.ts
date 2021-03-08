import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  @Input()
  public value = 0;

  @Input()
  public min = 0;

  @Input()
  public max = 10;


  @Output()
  public emitValue: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
    this._broadcastValue();
  }


  public onBlur(): void {
    if (typeof +this.value !== 'number' || isNaN(+this.value)) {
     this._setupDefaultValue();
    }

    if (this.value < this.min || this.value > this.max) {
      this._setupDefaultValue();
    }
    this._broadcastValue();
  }

  public increase(): void {
    this.value = this.value + 1 > this.max ? this.max : this.value + 1;
    this._broadcastValue();
  }

  public decrease(): void {
    this.value = this.value - 1 < this.min ? this.min : this.value - 1;
    this._broadcastValue();
  }


  private _broadcastValue(): void {
    this.emitValue.emit(this.value);
  }

  private _setupDefaultValue(): void {
    this.value = this.min;
  }

}
