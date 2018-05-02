import { Directive ,  ElementRef, HostListener ,Output} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  public isShow : boolean = true;
  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
  
   
 }

 @HostListener('mouseleave') onMouseLeave() {
  
 }
}
