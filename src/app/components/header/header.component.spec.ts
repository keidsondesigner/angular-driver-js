import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { DriverDirective } from '../../directives/driver.directive';
import { DriverService } from '../../services/driver.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let driverService: DriverService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, DriverDirective],
      providers: [DriverService]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    driverService = TestBed.inject(DriverService);
    spyOn(driverService, 'registerElement');
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have logo element with driver directive', () => {
    const logo = fixture.debugElement.query(By.css('h1'));
    expect(logo).toBeTruthy();
    expect(logo.attributes['ng-reflect-driver-id']).toBe('1');
    expect(logo.attributes['ng-reflect-drive-title']).toBe('Logo');
  });

  it('should have about button with driver directive', () => {
    const aboutBtn = fixture.debugElement.queryAll(By.css('button'))[0];
    expect(aboutBtn).toBeTruthy();
    expect(aboutBtn.attributes['ng-reflect-driver-id']).toBe('2');
    expect(aboutBtn.attributes['ng-reflect-drive-title']).toBe('Sobre');
  });

  it('should have contact button with driver directive', () => {
    const contactBtn = fixture.debugElement.queryAll(By.css('button'))[1];
    expect(contactBtn).toBeTruthy();
    expect(contactBtn.attributes['ng-reflect-driver-id']).toBe('3');
    expect(contactBtn.attributes['ng-reflect-drive-title']).toBe('Contato');
  });

  it('should register all elements with driver service', () => {
    expect(driverService.registerElement).toHaveBeenCalledTimes(3);
  });
}); 