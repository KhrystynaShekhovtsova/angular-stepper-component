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
  @Input() steps: Step[] = [];
  @Input() currentStep: number = 0;
  @Input() color?: string = '#22ECE9';
  @Input() isVertical?: boolean = false;

  stepElements: StepItem[] = [];

  constructor() {}

  ngOnInit() {
    this.stepElements = this.steps.map(step => ({
      ...step,
      isSubmitted: false
    }));
  }

  onNext(): void {
    if (this.currentStep < this.stepElements.length - 1) {
      this.currentStep++;
    }
  }

  onPrevious(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  goToStep(i: number): void {
    this.currentStep = i;
  }

  onSubmit(currentIndex: number): void {
    // mark the current step as submitted
    this.stepElements[currentIndex].isSubmitted = true;
  
    // find index of the next non-submitted step
    const nextNonSubmittedIndex = this.stepElements.findIndex((step, index) => index > currentIndex && !step.isSubmitted);
  
    // in case all steps are submitted, return
    if (nextNonSubmittedIndex !== -1) {
      this.goToStep(nextNonSubmittedIndex);
    }
  }

  get stepperFinished(): boolean {
    return !!this.stepElements.filter(step => !step.isSubmitted);
  }
}
