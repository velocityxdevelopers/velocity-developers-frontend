import { Component } from '@angular/core';

@Component({
  selector: 'app-upcomingprojects',
  standalone: false,
  templateUrl: './upcomingprojects.component.html',
  styleUrl: './upcomingprojects.component.css'
})
export class UpcomingprojectsComponent {
  staticData = [
  {
    title: 'Web Development Platform',
    description: [
      '🧱 Modular and component-driven design system',
      '⚡ Built with Angular, Node.js, and MongoDB',
      '🛠️ Designed for performance and easy scaling'
    ],
    image: 'https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Android App Suite',
    description: [
      '📱 A suite of productivity apps for professionals',
      '🎨 Beautiful, clean UI with intuitive navigation',
      '📤 Cloud sync, offline support, and push notifications'
    ],
    image: 'https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'AI-Powered Dashboard',
    description: [
      '🤖 Real-time analytics powered by AI',
      '📊 Customizable dashboards and reports',
      '🔐 Secure user access and role management'
    ],
    image: 'https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=80'
  }
];
;

  dynamicData: any[] = [];
}
