import { Component } from '@angular/core';

@Component({
  selector: 'app-webdevelopment',
  standalone: false,
  templateUrl: './webdevelopment.component.html',
  styleUrl: './webdevelopment.component.css'
})
export class WebdevelopmentComponent {
    services = [
    {
      title: 'Web Development',
      features: [
        'Responsive design for all devices',
        'SEO & performance optimization',
        'Backend integration (APIs, databases)',
        'Content Management Systems (CMS)',
        'E-commerce functionality',
        'Cross-browser compatibility'
      ]
    },
    {
      title: 'iOS Development',
      features: [
        'Swift-based native applications',
        'Optimized for performance & battery',
        'Face ID, Touch ID, and Siri integration',
        'App Store deployment & compliance',
        'Custom animations and gestures',
        'Secure storage and networking'
      ]
    },
    {
      title: 'Android Development',
      features: [
        'Kotlin/Java-based development',
        'Material Design UI/UX',
        'Google Play Store deployment',
        'Push notifications and Firebase',
        'Device compatibility & testing',
        'Battery-efficient background tasks'
      ]
    }
  ];
}
