import { TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { DriverDirective } from './driver.directive';
import { DriverService } from '../services/driver.service';
import { DrivePosition, DriveAlign } from '../enums/driver.enum';

describe('DriverDirective', () => {
  let directive: DriverDirective;
  let driverService: DriverService;
  let el: ElementRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DriverService,
        DriverDirective,
        { provide: ElementRef, useValue: { nativeElement: document.createElement('div') } }
      ]
    });

    driverService = TestBed.inject(DriverService);
    el = TestBed.inject(ElementRef);
    directive = TestBed.inject(DriverDirective);
    directive.driverId = '';
    spyOn(driverService, 'registerElement');
  });

  it('should create', () => {
    expect(directive).toBeTruthy();
  });

  it('should register element with default values', () => {
    directive.ngOnInit();

    expect(driverService.registerElement).toHaveBeenCalledWith('', {
      element: el.nativeElement,
      popover: {
        title: 'Destaque',
        description: 'Este elemento está destacado',
        side: DrivePosition.BOTTOM,
        align: DriveAlign.CENTER
      }
    });
  });

  it('should register element with provided values', () => {
    directive.driverId = 'test-id';
    directive.driveTitle = 'Test Title';
    directive.driveDescription = 'Test Description';
    directive.drivePosition = DrivePosition.RIGHT;
    directive.driveAlign = DriveAlign.START;

    directive.ngOnInit();

    expect(driverService.registerElement).toHaveBeenCalledWith('test-id', {
      element: el.nativeElement,
      popover: {
        title: 'Test Title',
        description: 'Test Description',
        side: DrivePosition.RIGHT,
        align: DriveAlign.START
      }
    });
  });

  it('should use default values when inputs are not provided', () => {
    expect(directive.drivePosition).toBe(DrivePosition.BOTTOM);
    expect(directive.driveAlign).toBe(DriveAlign.CENTER);
  });
});