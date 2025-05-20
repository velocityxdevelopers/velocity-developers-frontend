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
      image: 'https://ik.imagekit.io/4xwu0wvso/aboutus2.gif?updatedAt=1747733878808'
    },
    {
      name: 'Venkat Sai',
      role: 'Mobile Developer',
      skills: 'React Native, Flutter',
      image: 'https://ik.imagekit.io/4xwu0wvso/aboutus2.gif?updatedAt=1747733878808'
    },
    {
      name: 'Mahesh Babu',
      role: 'Cloud Architect',
      skills: 'AWS, Docker, Kubernetes',
      image: 'https://ik.imagekit.io/4xwu0wvso/aboutus.gif?updatedAt=1747733876360'
    },
    {
      name: 'Tanishq',
      role: 'UI/UX Designer',
      skills: 'Figma, Sketch',
      image: 'https://ik.imagekit.io/4xwu0wvso/aboutus.gif?updatedAt=1747733876360'
    },
    {
      name: 'Swamy',
      role: 'Backend Developer',
      skills: 'Node.js, Express',
      image: 'https://ik.imagekit.io/4xwu0wvso/aboutus.gif?updatedAt=1747733876360'
    }
  ];
}
