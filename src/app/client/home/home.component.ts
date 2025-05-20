import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvokerService } from '../../service/invoker.service';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards = [
    {
      image: 'webapps.jpg',
      h1: 'Build a functional website',
      keypoints: [
        'Template-based design',
        'Content upload',
        'Functional website',
        'Plugins and extensions'
      ],
      small_logos: [
        { name: 'WordPress', logo: 'wordpress-logo.png' },
        { name: 'Wix', logo: 'wix-logo.png' },
        { name: 'Shopify', logo: 'shopify-logo.png' }
      ]
    },
    {
      image: 'iosapps.jpg',
      h1: 'Launch your iOS mobile app',
      keypoints: [
        'Custom UI/UX Design',
        'App Store Optimization',
        'Native iOS Development',
        'Push Notifications Integration'
      ],
      small_logos: [
        { name: 'App Store', logo: 'appstore-logo.png' },
        { name: 'TestFlight', logo: 'testflight-logo.png' },
        { name: 'Xcode', logo: 'xcode-logo.png' }
      ]
    },
    {
      image: 'androidapps.jpg',
      h1: 'Create your Android application',
      keypoints: [
        'Material Design Standards',
        'Google Play Store Publishing',
        'Native Android Development',
        'API & Firebase Integration'
      ],
      small_logos: [
        { name: 'Google Play', logo: 'googleplay-logo.png' },
        { name: 'APK Build', logo: 'apkbuild-logo.png' },
        { name: 'Android Studio', logo: 'androidstudio-logo.png' }
      ]
    }
  ];
  transparentCards = [
    {
      icon: 'animated/discovery.gif',
      title: 'Discovery',
      description: 'Clarify the what and company in why to bring your vision into focus.',
    },
    {
      icon: 'animated/planing.gif',
      title: 'Planning',
      description: 'Define the roadmap that aligns us on the journey Ahead.',
    },
    {
      icon: 'animated/design.gif',
      title: 'Design',
      description: 'We design accordingly to the plan into digital.',
    },
    {
      icon: 'animated/development.gif',
      title: 'Development',
      description: 'Shape function, try company ruthlessly and leave nothing to chance.',
    },
    {
      icon: 'animated/support.gif',
      title: 'Support',
      description: 'Count on us to continue to actively invest in your  long-term success',
    }
  ];
  categories = [
    { title: 'WordPress', img: 'https://drive.google.com/file/d/1KWbLXOUZm9myY-vQN-MVWRvQffp6nl1B/view?usp=drive_link' },
    { title: 'Shopify', img: 'https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2610.svg' },
    { title: 'Custom Websites', img: 'https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2617.svg' },
    { title: 'Wix', img: 'https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2611.svg' },
    { title: 'Webflow', img: 'https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2613.svg' },
    { title: 'WooCommerce', img: 'https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2615.svg' },
    { title: 'Squarespace', img: 'https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2612.svg' },
    { title: 'Other Builders', img: 'https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2618.svg' },
    { title: 'ClickFunnels', img: 'https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2616.svg' },
    { title: 'GoDaddy', img: 'https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2614.svg' }
  ];
  boxes = [
    {
      image: 'https://ik.imagekit.io/4xwu0wvso/socialmedia.png?updatedAt=1747733878061',
      title: 'Social Media Management',
      description: 'Build brand, engage audiences, and drive growth across platforms'
    },
    {
      image: 'https://ik.imagekit.io/4xwu0wvso/contentcreateion.png?updatedAt=1747733877974',
      title: 'Content Creation',
      description: 'Create compelling content to captivate and convert your audience'
    },
    {
      image: 'https://ik.imagekit.io/4xwu0wvso/seooptimization.png?updatedAt=1747733878103',
      title: 'SEO Optimization',
      description: 'Improve your website’s visibility and organic search traffic'
    },
    {
      image: 'https://ik.imagekit.io/4xwu0wvso/paidmarketing.png?updatedAt=1747733876916',
      title: 'Paid Advertising',
      description: 'Maximize ROI with targeted ad campaigns across platforms'
    }
  ];

  contactForm: FormGroup;
  showAlert = false;

  constructor(private fb: FormBuilder,private clientService:InvokerService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
  if (this.contactForm.valid) {
    const clientData = {
      name: this.contactForm.value.name,
      phoneNumber: this.contactForm.value.phoneNumber,
      description: this.contactForm.value.description
    };

    this.clientService.addClient(clientData).subscribe({
      next: () => {
        this.showAlert = true;

        setTimeout(() => {
          this.showAlert = false;
          this.contactForm.reset();
        }, 1000);
      },
      error: (error: any) => {
        console.error('Error adding client:', error);
        // Optional: show an error alert to the user
      }
    });
  } else {
    this.contactForm.markAllAsTouched();
  }
}
}
