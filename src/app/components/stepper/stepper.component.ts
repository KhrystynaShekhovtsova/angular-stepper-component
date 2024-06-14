import { Component, Input, OnInit } from '@angular/core';

interface Step {
  label: string,
}

interface StepItem extends Step {
  isSubmitted: boolean 
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})

export class StepperComponent implements OnInit {
  @Input() color: string = '#22ECE9';
  @Input() isVertical: boolean = true;
  @Input() steps: Step[] = [];
  @Input() currentStep: number = 0;

  stepElements: StepItem[] = [];

  constructor() {}

  ngOnInit() {
    this.stepElements = this.steps.map(step => ({
      ...step,
      isSubmitted: false
    }));
  }

  onNext() {
    if (this.currentStep < this.stepElements.length - 1) {
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

  onSubmit(i: number) {
    let index = i;
    this.stepElements[index].isSubmitted = true;

    if (index === this.stepElements.length - 1) {
      const notSubmittedStep:number = this.stepElements.findIndex(step => !step.isSubmitted);

      if (notSubmittedStep !== -1) {
        index = notSubmittedStep;
      } else {
        return;
      }
    } else {
      index++;
    }

    this.goToStep(index);
  }

  get stepperFinished(): boolean {
    return !!this.stepElements.filter(step => !step.isSubmitted);
  }
}
