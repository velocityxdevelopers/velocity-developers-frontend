import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  teamMembers = [
    {
      name: 'Naveen Kumar',
      role: 'Frontend Developer',
      skills: 'React, Angular, TypeScript',
      image: 'animated/aboutus2.gif'
    },
    {
      name: 'Venkat Sai',
      role: 'Mobile Developer',
      skills: 'React Native, Flutter',
      image: 'animated/aboutus2.gif'
    },
    {
      name: 'Mahesh Babu',
      role: 'Cloud Architect',
      skills: 'AWS, Docker, Kubernetes',
      image: 'animated/aboutus.gif'
    },
    {
      name: 'Tanishq',
      role: 'UI/UX Designer',
      skills: 'Figma, Sketch',
      image: 'animated/aboutus.gif'
    },
    {
      name: 'Swamy',
      role: 'Backend Developer',
      skills: 'Node.js, Express',
      image: 'animated/aboutus.gif'
    }
  ];
}
