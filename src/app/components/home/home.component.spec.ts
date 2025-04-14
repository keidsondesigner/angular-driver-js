import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { DriverDirective } from '../../directives/driver.directive';
import { DriverService } from '../../services/driver.service';
import { TOUR_STEPS } from '../../constants/driver-steps.constants';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let driverService: DriverService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, DriverDirective],
      providers: [DriverService]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    driverService = TestBed.inject(DriverService);
    spyOn(driverService, 'registerElement');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have welcome title with driver directive', () => {
    const welcome = fixture.debugElement.query(By.css('h2'));
    expect(welcome).toBeTruthy();
    expect(welcome.attributes['ng-reflect-driver-id']).toBe('step4');
    expect(welcome.attributes['ng-reflect-drive-title']).toBe('Boas-vindas');
  });

  it('should have content section with driver directive', () => {
    const content = fixture.debugElement.query(By.css('div[appDriver]'));
    expect(content).toBeTruthy();
    expect(content.attributes['ng-reflect-driver-id']).toBe('step5');
    expect(content.attributes['ng-reflect-drive-title']).toBe('Conteúdo');
  });

  it('should start tour when button is clicked', () => {
    spyOn(driverService, 'startTour');
    
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    
    expect(driverService.startTour).toHaveBeenCalledWith(TOUR_STEPS);
  });

  it('should register all elements with driver service', () => {
    expect(driverService.registerElement).toHaveBeenCalledTimes(2);
  });
}); 