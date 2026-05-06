import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styles: [`
    :host {
      display: block;
      height: 100vh;
    }
  `]
})
export class Intro {
  @Output() startClicked = new EventEmitter<void>();

  start() {
    this.startClicked.emit();
  }
}