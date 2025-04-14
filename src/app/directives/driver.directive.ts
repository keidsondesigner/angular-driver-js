import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { DriverService } from '../services/driver.service';
import { DrivePosition, DriveAlign } from '../enums/driver.enum';

@Directive({
  selector: '[appDriver]'
})
export class DriverDirective implements OnInit {
  @Input() driverId!: string;
  @Input() driveTitle?: string;
  @Input() driveDescription?: string;
  @Input() drivePosition: DrivePosition = DrivePosition.BOTTOM;
  @Input() driveAlign: DriveAlign = DriveAlign.CENTER;

  constructor(
    private el: ElementRef,
    private driverService: DriverService
  ) {}

  ngOnInit(): void {
    this.driverService.registerElement(this.driverId, {
      element: this.el.nativeElement,
      popover: {
        title: this.driveTitle || 'Destaque',
        description: this.driveDescription || 'Este elemento está destacado',
        side: this.drivePosition,
        align: this.driveAlign
      }
    });
  }
}