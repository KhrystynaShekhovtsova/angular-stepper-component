import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  @Input() color: string = '#22ECE9';
  @Input() isVertical: boolean = true;
  @Input() steps: {label: string}[] = [];
  @Input() currentStep: number = 0;

  constructor() {}

  onNext() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  onPrevious() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  goToStep(i: number) {
    this.currentStep = i;
  }


  isLastStep(): boolean {
    return this.currentStep === this.steps.length - 1;
  }

  onSubmit() {
    console.log('Done!');
  }
}
