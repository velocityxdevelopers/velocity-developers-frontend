import { Component } from '@angular/core';

@Component({
  selector: 'app-carrers',
  standalone: false,
  templateUrl: './carrers.component.html',
  styleUrl: './carrers.component.css'
})
export class CarrersComponent {
  jobs = [
    {
      title: 'Frontend Developer (Angular)',
      type: 'Full-time',
      description: 'Develop cutting-edge user interfaces using Angular and TypeScript.'
    },
    {
      title: 'Mobile App Developer (React Native)',
      type: 'Full-time',
      description: 'Build cross-platform apps for iOS and Android with modern tech.'
    },
    {
      title: 'Node.js Backend Engineer',
      type: 'Contract',
      description: 'Design scalable APIs and cloud integrations with Node.js and AWS.'
    }
  ];

  reasons = [
    {
      title: 'Remote Friendly',
      text: 'Work from anywhere with flexible hours and an async culture.'
    },
    {
      title: 'Growth-Focused',
      text: 'We support your professional goals through mentorship and upskilling.'
    },
    {
      title: 'Real Impact',
      text: 'Build meaningful software for businesses across the globe.'
    },
    {
      title: 'Modern Stack',
      text: 'React, Angular, Node.js, AWS — we work with tools that matter.'
    }
  ];

  apply(position: string) {
    window.open(`mailto:careers@velocityxdev.com?subject=Application for ${position}`);
  }
}