import { TestBed } from '@angular/core/testing';
import { DriverService } from './driver.service';
import { DrivePosition, DriveAlign } from '../enums/driver.enum';

describe('DriverService', () => {
  let service: DriverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DriverService]
    });
    service = TestBed.inject(DriverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register and retrieve element', () => {
    const mockStep = {
      element: document.createElement('div'),
      popover: {
        title: 'Test Title',
        description: 'Test Description',
        side: DrivePosition.BOTTOM,
        align: DriveAlign.CENTER
      }
    };

    service.registerElement('test-id', mockStep);
    const steps = service['elements'];
    expect(steps.get('test-id')).toEqual(mockStep);
  });

  it('should create tour steps from registered elements', () => {
    const mockStep1 = {
      element: document.createElement('div'),
      popover: {
        title: 'Step 1',
        description: 'Description 1',
        side: DrivePosition.BOTTOM,
        align: DriveAlign.START
      }
    };

    const mockStep2 = {
      element: document.createElement('div'),
      popover: {
        title: 'Step 2',
        description: 'Description 2',
        side: DrivePosition.RIGHT,
        align: DriveAlign.CENTER
      }
    };

    service.registerElement('step1', mockStep1);
    service.registerElement('step2', mockStep2);

    const steps = service['elements'];

    expect(steps.size).toBe(2);
    expect(steps.get('step1')).toEqual(mockStep1);
    expect(steps.get('step2')).toEqual(mockStep2);
  });

  it('should highlight specific element', () => {
    const mockStep = {
      element: document.createElement('div'),
      popover: {
        title: 'Test Title',
        description: 'Test Description',
        side: DrivePosition.BOTTOM,
        align: DriveAlign.CENTER
      }
    };

    service.registerElement('highlight-test', mockStep);
    spyOn(service['driver'], 'highlight');

    service.highlight('highlight-test');
    expect(service['driver'].highlight).toHaveBeenCalledWith(mockStep);
  });

  it('should not highlight non-existent element', () => {
    spyOn(service['driver'], 'highlight');

    service.highlight('non-existent');
    expect(service['driver'].highlight).not.toHaveBeenCalled();
  });
});