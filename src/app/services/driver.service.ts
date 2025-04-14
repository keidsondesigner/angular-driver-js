import { Injectable } from '@angular/core';
import { driver, Driver } from 'driver.js';
import type { DriveStep } from 'driver.js';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private driver: Driver;
  private elements: Map<string, DriveStep> = new Map();

  constructor() {
    this.driver = driver({
      animate: true,
      smoothScroll: true,
      showProgress: true,
      overlayColor: 'rgba(0, 0, 0, 0.8)',
      steps: [],
      progressText: '{{current}} de {{total}}',
      prevBtnText: 'Anterior',
      nextBtnText: 'Próximo',
      doneBtnText: 'Concluir'
    });
  }

  registerElement(id: string, step: DriveStep): void {
    this.elements.set(id, step);
  }

  startTour(stepIds: readonly string[]): void {
    const steps = stepIds
      .map(id => this.elements.get(id))
      .filter((step): step is DriveStep => step !== undefined);

    this.driver.setSteps(steps);
    this.driver.drive();
  }

  highlight(elementId: string): void {
    const step = this.elements.get(elementId);
    if (step) {
      this.driver.highlight(step);
    }
  }
}