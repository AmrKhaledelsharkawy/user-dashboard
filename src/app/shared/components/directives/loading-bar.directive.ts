import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLoadingBar]'
})
export class LoadingBarDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('http:start')
  onStart() {
    this.renderer.addClass(this.el.nativeElement, 'loading');
  }

  @HostListener('http:end')
  onEnd() {
    this.renderer.removeClass(this.el.nativeElement, 'loading');
  }
}
