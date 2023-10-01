import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightSpecial]',
})
export class HighlightSpecialDirective {
  @Input('appHighlightSpecial') isSpecial: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.isSpecial) {
      this.renderer.addClass(this.el.nativeElement, 'special-offer');
    }
  }
}
