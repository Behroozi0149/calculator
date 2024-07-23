// ts codes
import { Component } from '@angular/core';

@Component({
  selector: 'calc',
  standalone: true,
  imports: [],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  clear() {
    this.mainValue = '0';
    this.prevValue = '0';
    this.operator = '';

  }
  digit(d: string) {
    this.mainValue = Number(this.mainValue + d).toString();
  }
  op() {
    if (this.operator == '+') {
      this.mainValue = (Number(this.prevValue) + Number(this.mainValue)).toString();
    }
    else if (this.operator == '-') {
      this.mainValue = (Number(this.prevValue) - Number(this.mainValue)).toString();
    }
    else if (this.operator == 'x') {
      this.mainValue = (Number(this.prevValue) * Number(this.mainValue)).toString();
    }
    else if (this.operator == '/') {
      this.mainValue = (Number(this.prevValue) / Number(this.mainValue)).toString();
    }
  }
  operate(o: string) {
    this.operator = o;
    this.prevValue = Number(this.mainValue).toString();
    this.mainValue = '0';

  }
  prevValue: string = '0';
  mainValue: string = '0';
  operator: string = '';

}

