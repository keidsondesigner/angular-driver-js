import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DriverService } from '../services/driver.service';
import { DrivePosition, DriveAlign } from '../enums/driver.enum';

@Directive({
  selector: '[appDriver]'
})
export class DriverDirective implements OnInit {
  @Input() driverId!: string;
  @Input() driveTitle!: string;
  @Input() driveDescription!: string;
  @Input() driveDescriptionLink?: string;
  @Input() driveTextLink?: string;
  @Input() driveUrlLink?: string;
  @Input() drivePosition: DrivePosition = DrivePosition.BOTTOM;
  @Input() driveAlign: DriveAlign = DriveAlign.CENTER;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private driverService: DriverService
  ) {}

  ngOnInit(): void {
    let description = this.driveDescription || 'Este elemento está destacado';

    // Se houver link, cria o HTML do link de forma segura usando Renderer2
    if (this.driveTextLink && this.driveUrlLink) {
      // Cria um elemento <a> temporário
      const a = this.renderer.createElement('a');
      this.renderer.setAttribute(a, 'href', this.driveUrlLink);
      this.renderer.setAttribute(a, 'target', '_blank');
      this.renderer.setAttribute(a, 'rel', 'noopener noreferrer');
      this.renderer.setStyle(a, 'color', '#3182ce');
      this.renderer.setStyle(a, 'textDecoration', 'underline');
      this.renderer.setProperty(a, 'innerText', this.driveTextLink);

      // Cria um container temporário para extrair o HTML seguro
      const tempDiv = this.renderer.createElement('div');
      this.renderer.appendChild(tempDiv, a);

      // Pega o HTML do link criado
      const linkHtml = tempDiv.innerHTML || tempDiv.textContent || '';

      // Adiciona o link ao final do description, com uma quebra de linha
      description += `<br>${this.driveDescriptionLink}<br>${linkHtml}`;
    }

    this.driverService.registerElement(this.driverId, {
      element: this.el.nativeElement,
      popover: {
        title: this.driveTitle || 'Destaque',
        description,
        side: this.drivePosition,
        align: this.driveAlign
      }
    });
  }
}