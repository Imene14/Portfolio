import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectData {
  name: string;
  description: string;
  keywords: string;
  date: string;
  technologies: { name: string; icon: string }[];
}

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
})
export class Project implements AfterViewInit{
  data: ProjectData[] = [
  {
    name: "Job Market Analyzer Platform",
    description: "An intelligent web platform designed for job seekers to track and manage applications while supporting the job search process. Built with a data-oriented architecture and an ETL pipeline for efficient data ingestion and analysis.",
    keywords: "TypeScript, Java, ETL, Data Processing",
    date: "Jan – April 2026",
    technologies: [
      { name: "Angular", icon: "assets/icons/angular.svg" },
      { name: "TypeScript", icon: "assets/icons/typescript.svg" },
      { name: "Java", icon: "assets/icons/java.svg" },
      { name: "Spring Boot", icon: "assets/icons/spring.svg" }
    ]
  },
  {
    name: "OCR Processing Module",
    description: "Developed a module to process and validate data extracted from OCR models. Integrated validation logic to ensure data accuracy and consistency within a verification workflow. Implemented REST APIs and deployed OCR models.",
    keywords: "Angular, Java, OCR, REST API",
    date: "Jan – March 2024",
    technologies: [
      { name: "Angular", icon: "assets/icons/angular.svg" },
      { name: "Java", icon: "assets/icons/java.svg" },
      { name: "REST API", icon: "assets/icons/api.svg" },
      { name: "OCR", icon: "assets/icons/ocr.svg" }
    ]
  },
  {
    name: "IAM Server",
    description: "Designed and implemented an authentication and authorization system using OAuth 2.0 with PKCE. Secured web applications and APIs, and deployed the solution on WildFly following modern security standards.",
    keywords: "Security, OAuth2, Jakarta EE, API",
    date: "Jan – March 2024",
    technologies: [
      { name: "Java", icon: "assets/icons/java.svg" },
      { name: "Jakarta EE", icon: "assets/icons/jakarta.svg" },
      { name: "OAuth2", icon: "assets/icons/oauth.svg" },
      { name: "WildFly", icon: "assets/icons/wildfly.svg" }
    ]
  }
];
  ngAfterViewInit(): void {
      setTimeout(() => this.organizeProject(), 1000);
  }
  private organizeProject(){
    // const projects = document.querySelectorAll('[id^="proj-item"]');
    // console.log(projects.length);
    // for(let i=0; i<projects.length; i++){

    // }
  }

}
