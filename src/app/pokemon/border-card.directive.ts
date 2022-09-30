import { Directive, ElementRef , HostListener , Input } from '@angular/core';



@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
  private defaultColor: string ='#009688';

  constructor(private element : ElementRef) {
    this.setHeight(180);
    this.setBorder('#f5f5f5')
   }

   @Input('pkmnBorderCard') borderColor:string


   @HostListener("mouseenter")
  onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor )
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.setBorder('#f5f5f5')
  }


  setHeight(height:number){
    this.element.nativeElement.style.height = `${height}px`;
  }

  setBorder(color:string){
    let border = ' solid 4px ' + color ;
    this.element.nativeElement.style.border = border;

  }





}
