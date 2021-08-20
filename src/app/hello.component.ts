import { Component, Input } from '@angular/core';

@Component({
  selector: 'nome',
  template: `<h1>{{name}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})

export class HelloComponent  {
  @Input() name: string; email: string
}
