import { Component } from '@angular/core';
import { DRIVER_STEPS } from '../../constants/driver-steps.constants';

@Component({
  selector: 'app-header',
  template: `
    <header class="bg-blue-600 p-4">
      <nav class="flex justify-between items-center">
        <div
          appDriver
          [driverId]="DRIVER_STEPS.LOGO.id"
          [driveTitle]="DRIVER_STEPS.LOGO.title"
          [driveDescription]="DRIVER_STEPS.LOGO.description"
          [drivePosition]="DRIVER_STEPS.LOGO.drivePosition"
          [driveAlign]="DRIVER_STEPS.LOGO.driveAlign"
          class="logo-container"
        >
          <img src="assets/logo-oficial-doc-site.png" alt="Logo Oficial Doc" class="h-12 logo-animation" />
        </div>
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
  `,
  styles: [`
    .logo-container {
      overflow: hidden;
      perspective: 1000px;
    }
    
    .logo-animation {
      animation: creativeLogo 1.2s cubic-bezier(0.4, 0, 0.2, 1);
      animation-delay: 300ms;
      animation-fill-mode: backwards;
      transform-origin: center;
    }
    
    @keyframes creativeLogo {
      0% {
        opacity: 0;
        transform: scale(0) rotate(-180deg);
        filter: blur(10px);
      }
      
      40% {
        opacity: 0.6;
        transform: scale(1.2) rotate(10deg);
        filter: blur(5px);
      }
      
      60% {
        opacity: 0.8;
        transform: scale(0.9) rotate(-5deg);
        filter: blur(2px);
      }
      
      80% {
        opacity: 0.9;
        transform: scale(1.1) rotate(2deg);
        filter: blur(1px);
      }
      
      100% {
        opacity: 1;
        transform: scale(1) rotate(0);
        filter: blur(0);
      }
    }
    
    .logo-animation:hover {
      animation: pulse 1s infinite;
    }
    
    @keyframes pulse {
      0% {
        transform: scale(1);
        filter: brightness(100%);
      }
      
      50% {
        transform: scale(1.05);
        filter: brightness(110%);
      }
      
      100% {
        transform: scale(1);
        filter: brightness(100%);
      }
    }
  `]
})
export class HeaderComponent {
  protected readonly DRIVER_STEPS = DRIVER_STEPS;

  constructor() {}
}