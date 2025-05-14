import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Review {
  name: string;
  comments: string;
  stars: number;
}
@Component({
  selector: 'app-review-us',
  standalone: false,
  templateUrl: './review-us.component.html',
  styleUrl: './review-us.component.css'
})
export class ReviewUsComponent {
    reviewForm: FormGroup;
    reviews: any[] = [];
    alertVisible = false;
  
    // Static JSON Data for example
    reviewsData = [
      { name: 'John Doe', comments: 'Great service!', stars: 5 },
      { name: 'Jane Doe', comments: 'Good experience.', stars: 4 },
      { name: 'John Doe', comments: 'Great service!', stars: 5 },
      { name: 'Jane Doe', comments: 'Good experience.', stars: 4 }
    ];
  
    constructor(private fb: FormBuilder) {
      this.reviewForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
        comments: ['', [Validators.required, Validators.minLength(10)]],
        stars: [1, [Validators.required, Validators.min(1), Validators.max(5)]]
      });
      this.reviews = [...this.reviewsData];
    }
  
    get name() {
      return this.reviewForm.get('name');
    }
  
    get comments() {
      return this.reviewForm.get('comments');
    }
  
    get stars() {
      return this.reviewForm.get('stars');
    }
  
    onStarClick(starIndex: number) {
      this.reviewForm.patchValue({ stars: starIndex + 1 });
    }
  
    submitReview() {
      if (this.reviewForm.valid) {
        this.reviews.push(this.reviewForm.value);
        this.alertVisible = true;
        this.reviewForm.reset({ stars: 1 }); // Reset stars to 1 after submission
        setTimeout(() => this.alertVisible = false, 3000); // Hide alert after 3 seconds
      }
    }
  
    resetForm() {
      this.reviewForm.reset({ stars: 1 }); // Reset stars to 1 on form reset
    }
  }
