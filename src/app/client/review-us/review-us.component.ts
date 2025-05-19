import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvokerService } from '../../service/invoker.service';
import { Review } from '../../models/review.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-review-us',
  standalone: false,
  templateUrl: './review-us.component.html',
  styleUrl: './review-us.component.css'
})
export class ReviewUsComponent{

  constructor(private fb: FormBuilder,private reviewService:InvokerService,private htppClient:HttpClient ) {
    this.reviewForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      stars: [1, [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }
  reviews : Review[]=[]
  reviewForm: FormGroup;
  alertVisible = false;
  defaultReviews = [
  { name: 'John Doe', description: 'Excellent service and very friendly staff!', numberOfStars: 5 },
  { name: 'Jane Smith', description: 'Quick response and reliable support.', numberOfStars: 4 },
  { name: 'Alex Johnson', description: 'Highly recommend for fast delivery and quality work.', numberOfStars: 5 },
  { name: 'Emily Davis', description: 'Good experience overall, but room for improvement.', numberOfStars: 3 },
  { name: 'Michael Brown', description: 'Professional and timely service.', numberOfStars: 4 }
  ];

  get name() {
    return this.reviewForm.get('name');
  }
  get description() {
    return this.reviewForm.get('description');
  }
  get stars() {
    return this.reviewForm.get('stars');
  }
  onStarClick(starIndex: number) {
    this.reviewForm.patchValue({ stars: starIndex + 1 });
  }
  submitReview(): void {
  if (this.reviewForm.valid) {
    const reviewData = {
      name: this.reviewForm.value.name,
      numberOfStars: this.reviewForm.value.stars, // assuming 'stars' is your form control
      description: this.reviewForm.value.description
    };
    this.reviewService.addReview(reviewData).subscribe({
      next: () => {
        this.alertVisible = true;
        this.reviewForm.reset({ stars: 1 }); // Reset stars to 1
        this.loadReviews(); // 🔁 re-fetch reviews
        setTimeout(() => this.alertVisible = false, 3000);
      },
      error: (error: any) => {
        console.error('Error posting review:', error);
        // Optional: show error alert
      }
    });
    } else {
      this.reviewForm.markAllAsTouched();
    }
  }
  resetForm() {
    this.reviewForm.reset({ stars: 1 }); // Reset stars to 1 on form reset
  }
  loadReviews(){
  this.htppClient.get<{ reviews: Review[] }>('http://localhost:3001/velocityxdev/dnk1/client/viewreviews').subscribe({
    next: (response) => {
      this.reviews = [...this.defaultReviews, ...response.reviews]; // <-- use the .reviews array
    },
    error: (err) => {
      console.error('Error fetching reviews:', err);
      this.reviews = [...this.defaultReviews]; // fallback
    }
  })
  }

  ngOnInit():void{
    this.loadReviews()
}
}
