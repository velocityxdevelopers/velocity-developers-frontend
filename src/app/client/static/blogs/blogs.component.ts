import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  standalone: false,
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
blogPosts = [
    {
      id: 1,
      title: 'Why Your Business Needs a Mobile App in 2025',
      slug: 'mobile-app-2025-benefits',
      summary: 'Mobile apps boost engagement, improve customer experience, and unlock new revenue streams.',
      content: `In 2025, having a mobile app is essential. Businesses leveraging native and cross-platform apps see better performance, stronger customer loyalty, and easier scalability.`,
      author: 'Jane Doe',
      date: '2025-05-10',
      tags: ['Mobile', 'Business']
    },
    {
      id: 2,
      title: 'Top 5 UI/UX Trends in 2025',
      slug: 'top-ui-ux-trends-2025',
      summary: 'Discover the design trends shaping digital products this year, from personalization to accessibility.',
      content: `User experience is evolving quickly. Prioritize simplicity, motion design, dark mode, and inclusive interfaces for better results.`,
      author: 'John Smith',
      date: '2025-04-28',
      tags: ['Design', 'UI/UX']
    },
    {
      id: 3,
      title: 'The Full-Stack Advantage',
      slug: 'full-stack-development-benefits',
      summary: 'Why full-stack teams deliver faster and more reliably in modern development projects.',
      content: `Full-stack development reduces friction between frontend and backend. It enables agile workflows, faster deployment, and consistent architecture.`,
      author: 'Ayesha Khan',
      date: '2025-04-15',
      tags: ['Development', 'Full-Stack']
    }
  ];
}
