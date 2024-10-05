import { Directive, Input, OnInit, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]',
  standalone: true
})
export class ForDirective implements OnInit {
  
  @Input('myForEm') numbers: number[]

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { 
    
  }

  ngOnInit(): void {
    for(let number of numbers) {
      this.container.createEmbeddedView(this.template, { $implicit : number })
    }
  }
}
