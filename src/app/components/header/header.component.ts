import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverDirective } from '../../directives/driver.directive';
import { DRIVER_STEPS } from '../../constants/driver-steps.constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, DriverDirective],
  template: `
    <header class="bg-blue-600 p-4">
      <nav class="flex justify-between items-center">
        <h1
          appDriver
          [driverId]="DRIVER_STEPS.LOGO.id"
          [driveTitle]="DRIVER_STEPS.LOGO.title"
          [driveDescription]="DRIVER_STEPS.LOGO.description"
          [drivePosition]="DRIVER_STEPS.LOGO.drivePosition"
          [driveAlign]="DRIVER_STEPS.LOGO.driveAlign"
          class="text-white text-2xl"
        >
          Logo
        </h1>
        <div class="flex gap-4">
          <button
            appDriver
            [driverId]="DRIVER_STEPS.ABOUT.id"
            [driveTitle]="DRIVER_STEPS.ABOUT.title"
            [driveDescription]="DRIVER_STEPS.ABOUT.description"
            [drivePosition]="DRIVER_STEPS.ABOUT.drivePosition"
            [driveAlign]="DRIVER_STEPS.ABOUT.driveAlign"
            class="text-white"
          >
            Sobre
          </button>
          <button
            appDriver
            [driverId]="DRIVER_STEPS.CONTACT.id"
            [driveTitle]="DRIVER_STEPS.CONTACT.title"
            [driveDescription]="DRIVER_STEPS.CONTACT.description"
            [drivePosition]="DRIVER_STEPS.CONTACT.drivePosition"
            [driveAlign]="DRIVER_STEPS.CONTACT.driveAlign"
            class="text-white"
          >
            Contato
          </button>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {
  protected readonly DRIVER_STEPS = DRIVER_STEPS;

  constructor() {}
}