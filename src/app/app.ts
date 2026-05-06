import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./core/components/header.component";
import { Footer } from "./core/components/footer.component";
import { Contact } from "./features/home/components/contact.component";
import { Skills } from "./features/home/components/skills.component";
import { Intro } from "./features/home/components/intro.component";
import { Stack } from "./features/home/components/stack.component";
import { Project } from "./features/home/components/project.component";
import { CommonModule } from '@angular/common';
import { Formation } from './features/home/components/formation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Contact, Skills, Intro, Stack, Project, Formation, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-portfolio');
  showContent = false;

  activeSection: string = 'about';

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = ['about', 'projects', 'education'];

    for (let section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  showMainContent() {
  this.showContent = true;

  setTimeout(() => {
    const element = document.getElementById('pf-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

}
