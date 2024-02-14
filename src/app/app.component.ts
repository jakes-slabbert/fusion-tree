import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isScrolled = false;

  constructor(private router: Router) {}

  @HostListener("window:scroll")
  scrollEvent() {
    window.scrollY >= 80 ? (this.isScrolled = true) : (this.isScrolled = false);
  }

  title = 'fusion-tree';

  public scrollToElement($element: any): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
