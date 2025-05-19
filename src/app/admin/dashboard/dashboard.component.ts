import { Component } from '@angular/core';
import { Client } from '../../models/client.model';
import { InvokerService } from '../../service/invoker.service';
import { Review } from '../../models/review.model';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  clients: Client[] = [];
  reviews: Review[] = [];
  
  constructor(private apiService: InvokerService) {}
  ngOnInit(): void {
    this.fetchClients();
    this.fetchReviews();    
  }
  
  // Fetch all clients
  fetchClients(): void {
    this.apiService.getClients().subscribe(
      (data) => {
        this.clients = data;
      },
      (error) => {
        console.error('Error fetching clients:', error);
      }
    );
  }

  // Delete a client by ID
  deleteClient(id: string): void {
    this.apiService.deleteClient(id).subscribe(
      () => {
        // Remove the deleted client from the list
        this.clients = this.clients.filter(client => client._id !== id);
      },
      (error) => {
        console.error('Error deleting client:', error);
      }
    );
  }

  fetchReviews(): void {
    this.apiService.getReviews().subscribe(
      (data) => {
        this.reviews = data;
      },
      (error) => {
        console.error('Error fetching reviews:', error);
      }
    );
  }

  // Delete a review by ID
  deleteReview(id: string): void {
    this.apiService.deleteReview(id).subscribe(
      () => {
        // Remove the deleted review from the list
        this.reviews = this.reviews.filter(review => review._id !== id);
      },
      (error) => {
        console.error('Error deleting review:', error);
      }
    );
  }
}
