import { Component } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { DRIVER_STEPS, TOUR_STEPS } from '../../constants/driver-steps.constants';

@Component({
  selector: 'app-home',
  template: `
    <div class="p-4">
      <h2
        appDriver
        [driverId]="DRIVER_STEPS.WELCOME.id"
        [driveTitle]="DRIVER_STEPS.WELCOME.title"
        [driveDescription]="DRIVER_STEPS.WELCOME.description"
        [drivePosition]="DRIVER_STEPS.WELCOME.drivePosition"
        [driveAlign]="DRIVER_STEPS.WELCOME.driveAlign"
        class="text-2xl mb-4"
      >
        Bem-vindo!
      </h2>
      <button
        (click)="startTour()"
        class="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Iniciar Tour
      </button>
      <div
        appDriver
        [driverId]="DRIVER_STEPS.CONTENT.id"
        [driveTitle]="DRIVER_STEPS.CONTENT.title"
        [driveDescription]="DRIVER_STEPS.CONTENT.description"
        [drivePosition]="DRIVER_STEPS.CONTENT.drivePosition"
        [driveAlign]="DRIVER_STEPS.CONTENT.driveAlign"
        class="mt-8"
      >
        <p>Este é um exemplo de conteúdo que pode ser destacado no tour.</p>
      </div>
    </div>
  `
})
export class HomeComponent {
  protected readonly DRIVER_STEPS = DRIVER_STEPS;

  constructor(private driverService: DriverService) {}

  startTour(): void {
    this.driverService.startTour(TOUR_STEPS);
  }
}