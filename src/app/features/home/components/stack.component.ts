import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {

  QueryList,

  ViewChildren,
  HostListener,
  Renderer2
} from '@angular/core';
interface SkillNode {
  name: string;
  children?: SkillNode[];
}

@Component({
  selector: 'app-stack',
  imports: [MatTreeModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './stack.component.html'
})
export class Stack implements AfterViewInit{
  @ViewChild('linesSvg', { static: true }) svgRef!: ElementRef<SVGSVGElement>;

  // Root node that contains all the domains
  data: SkillNode[] = [
    {
      name: 'My Skills',
      children: [
        {
          name: 'Development',
          children: [
            {
              name: 'Frontend',
              children: [
                { name: 'Angular' },
                { name: 'React' },
                { name: 'HTML / CSS' },
                { name: 'JavaScript' }
              ]
            },
            {
              name: 'Backend',
              children: [
                { name: 'Spring Boot' },
                { name: 'Node.js' }
              ]
            }
          ]
        },
        {
          name: 'DevOps',
          children: [
            {
              name: 'CI/CD',
              children: [
                { name: 'Jenkins' },
                { name: 'GitHub Actions' }
              ]
            },
            {
              name: 'Containerization',
              children: [
                { name: 'Docker' },
                { name: 'Kubernetes' }
              ]
            }
          ]
        },
        {
          name: 'Cybersecurity',
          children: [
            {
              name: 'Monitoring',
              children: [
                { name: 'Wazuh' },
                { name: 'TheHive' },
                { name: 'Shuffle' }
              ]
            }
          ]
        }
      ]
    }
  ];

  // function to get children of a node
  childrenAccessor = (node: SkillNode) => node.children ?? [];

  // check if a node has children
  hasChild = (_: number, node: SkillNode) =>
    node.children && node.children.length > 0;

  isLeafLevel(node: SkillNode): boolean {
    // Check if *all* children of this node have no children themselves
    if (!node.children) return false;
      return node.children.every(child => !child.children || child.children.length === 0);
    }


  ngAfterViewInit() {
    // Wait for Angular to render all tree nodes
    setTimeout(() => this.drawConnections(), 500);
  }

  private drawConnections() {
    const svg = this.svgRef.nativeElement;
    svg.innerHTML = ''; // clear old paths

    // find all elements with data-node attributes
    const allNodes = Array.from(document.querySelectorAll('[data-node]')) as HTMLElement[];
    if (!allNodes.length) {
      console.warn('⚠️ No nodes found with [data-node]');
      return;
    }

    const container = svg.parentElement!;
    const containerRect = container.getBoundingClientRect();

    const findNode = (name: string) =>
      allNodes.find(el => el.getAttribute('data-node') === name);

    const drawCurve = (parentEl: HTMLElement, childEl: HTMLElement) => {
      const parentRect = parentEl.getBoundingClientRect();
      const childRect = childEl.getBoundingClientRect();

      // Calculate positions relative to the container
      const x1 = parentRect.left + parentRect.width/2  - containerRect.left ;
      const y1 = parentRect.top - containerRect.top + 20;
      const x2 = childRect.left + childRect.width / 2 - containerRect.left;
      const y2 = childRect.top - containerRect.top;

      const midY = (y1 + y2) / 2;

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M${x1},${y1} C${x1},${midY} ${x2},${midY} ${x2},${y2}`);
      path.setAttribute('stroke', '#888');
      path.setAttribute('stroke-width', '2');
      path.setAttribute('fill', 'none');
      svg.appendChild(path);
    };

    const traverse = (nodes: SkillNode[], parent?: SkillNode) => {
      nodes.forEach(node => {
        if (parent) {
          const parentEl = findNode(parent.name);
          const childEl = findNode(node.name);
          if (parentEl && childEl) {drawCurve(parentEl, childEl); console.log(node.name, parent.name)}
          else console.warn('⚠️ Missing node element for', node.name);
        }
        if (node.children) traverse(node.children, node);
      });
    };

    traverse(this.data);
  }

}