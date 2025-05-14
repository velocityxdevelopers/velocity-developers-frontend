import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs';
import { Client } from '../models/client.model'; // Import Client model
import { Review } from '../models/review.model'; // Import Review model

@Injectable({
  providedIn: 'root'
})
export class InvokerService {
  private apiUrlClient = 'http://localhost:3001/velocityxdev/dnk1/admin/getclients'; // Backend URL for Client
  private apiUrlReview = 'http://localhost:3001/velocityxdev/dnk1/admin/getreviews'; // Backend URL for Review

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    const headers = this.getAuthHeaders();
    console.log(headers);
    return this.http.get<Client[]>(this.apiUrlClient, { headers });
  }
  // Delete a client
  deleteClient(id: string): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`${this.apiUrlClient}/${id}`, { headers });
  }

  // Review Methods

  // Get all reviews
  getReviews(): Observable<Review[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Review[]>(this.apiUrlReview, { headers });
  }

  // Delete a review
  deleteReview(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrlReview}/${id}`);
  }
  private getAuthHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('authToken') || '';
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }
  
}
