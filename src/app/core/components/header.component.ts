import { Component, HostListener, Input } from "@angular/core";

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html'
})
export class Header {
  showNavbar = true;
lastScroll = 0;
  @Input() activeSection: string = '';

@HostListener('window:scroll', [])
onScroll() {

  const currentScroll = window.pageYOffset;

  if (currentScroll > this.lastScroll && currentScroll > 100) {
    this.showNavbar = false;
  } else {
    this.showNavbar = true;
  }

  this.lastScroll = currentScroll;
}
}