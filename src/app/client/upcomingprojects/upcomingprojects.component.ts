import { Component } from '@angular/core';
import { UpcomingProject } from '../../models/upcoming-project.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upcomingprojects',
  standalone: false,
  templateUrl: './upcomingprojects.component.html',
  styleUrl: './upcomingprojects.component.css'
})
export class UpcomingprojectsComponent {
constructor(private httpclient: HttpClient) {}
  upcomingprojects:UpcomingProject[]=[]
  staticData = [
  {
    title: 'velocity developers',
    description: [
      "Velocity Developers is a dedicated team of skilled professionals offering end-to-end solutions in web and mobile application development. We specialize in building fast, responsive, and user-friendly websites tailored to meet your business goals. Our team also excels in creating cross-platform mobile applications for both iOS and Android, ensuring seamless performance and a consistent user experience across devices",
      "With a strong focus on clean UI/UX design and scalable architecture, we help startups and enterprises alike bring their digital ideas to life. Whether you're launching a new product, redesigning an existing platform, or building a mobile app from scratch, Velocity Developers combines innovation, technical expertise, and customer-focused development to deliver high-impact solutions that drive growth."
    ],
    image: 'https://ik.imagekit.io/4xwu0wvso/Screenshot%202025-05-20%20at%205.32.00%E2%80%AFPM.png?updatedAt=1747742636406'
  },
  {
    title: 'Car Poolin',
    description: [
      "Car Poolin is a smart and eco-friendly ride-sharing solution designed to make daily commuting safer, more affordable, and sustainable. Whether you're heading to work, college, or running errands, Car Poolin connects drivers and passengers going the same way—cutting down fuel costs, traffic congestion, and your carbon footprint.","With built-in safety features, real-time tracking, and verified profiles, we ensure a secure and reliable carpooling experience. Save money on every ride, meet like-minded commuters, and help make our cities cleaner—one shared trip at a time",
      "Drive safe. Save money. Share the ride with Car Poolin."
    ],
    image: 'https://ik.imagekit.io/4xwu0wvso/begin2.png?updatedAt=1747742022218'
  },
  {
    title: 'Smart Calendar & To-Do List',
    description: [
      "Stay organized and boost your productivity with our all-in-one Smart Calendar and To-Do List app. Designed for individuals and teams, this app helps you seamlessly manage events, deadlines, and daily tasks from a single intuitive interface.",
      "Schedule meetings, set reminders, track goals, and prioritize tasks with just a few taps. Whether you're planning your week or managing a busy project, our app keeps everything in sync—so you never miss a beat.",
      "With features like drag-and-drop scheduling, recurring tasks, color-coded labels, and cross-device sync, staying on top of your day has never been easier."
    ],
    image: 'https://ik.imagekit.io/4xwu0wvso/begin3.png?updatedAt=1747742162369'
  }
];
loadupcomingprojects() {
  this.httpclient.get<{ upcomingprojects: UpcomingProject[] }>(
    'http://localhost:3001/velocityxdev/dnk1/client/viewupcomingprojects'
  ).subscribe({
    next: (data) => {
      this.upcomingprojects = data.upcomingprojects;
    },
    error: (err) => {
      console.error('Error fetching upcomingprojects:', err);
    }
  });
}

ngOnInit(): void {
  this.loadupcomingprojects();
}
}