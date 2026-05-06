import { isPlatformBrowser } from "@angular/common";
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from "@angular/core";

interface SkillItem{
  name: String,
  description: String
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html'
})
export class Skills {
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  data: SkillItem[] = [
  {
    name: "Full-Stack Developer",
    description: "Building modern web applications with clean UI design and robust, scalable backend systems."
  },
  {
    name: "Microservices Architecture",
    description: "Designing and developing scalable microservices-based applications with a focus on modularity and performance."
  },
  {
    name: "DevOps Enthusiast",
    description: "Passionate about CI/CD, automation, containerization, and improving deployment workflows."
  },
  {
    name: "Problem Solver",
    description: "Strong foundation in data structures and algorithms, with experience in debugging, testing."
  }
];

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.drawConnections(), 50);
      window.addEventListener('resize', () => this.redraw());
    }
  }

  private redraw() {
    const svg = this.container.nativeElement.querySelector('#connection-lines');
    if (svg) svg.innerHTML = ''; // clear previous lines
    this.drawConnections();
  }

  private drawConnections() {
    const container = this.container.nativeElement;
    const circles = document.querySelectorAll('[id^="circle"]');
    const svg = container.querySelector('#connection-lines') as SVGSVGElement;

    if (!svg || circles.length < 2) return;

    const containerRect = container.getBoundingClientRect();

    for (let i = 0; i < circles.length - 1; i++) {
      const c1 = circles[i] as HTMLElement;
      const c2 = circles[i + 1] as HTMLElement;
      if (!c1 || !c2) continue;

      const r1 = c1.getBoundingClientRect();
      
      const r2 = c2.getBoundingClientRect();

      const x1 = r1.left + r1.width / 2 - containerRect.left;
      console.log(x1);
      const y1 = r1.top + r1.height / 2 - containerRect.top;
      console.log(y1)
      const x2 = r2.left + r2.width / 2 - containerRect.left;
      const y2 = r2.top + r2.height / 2 - containerRect.top;

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', x1.toString());
      line.setAttribute('y1', y1.toString());
      line.setAttribute('x2', x2.toString());
      line.setAttribute('y2', y2.toString());
      line.setAttribute('stroke', '#979799');
      line.setAttribute('stroke-width', '2');
      svg.appendChild(line);
    }
  }
}