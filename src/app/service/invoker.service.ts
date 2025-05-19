import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Import HttpClient
import { Observable,map } from 'rxjs';
import { Client } from '../models/client.model'; // Import Client model
import { Review } from '../models/review.model'; // Import Review model

@Injectable({
  providedIn: 'root'
})
export class InvokerService {
  private apiUrlClient = 'http://localhost:3001/velocityxdev/dnk1/admin/getclients'; // Backend URL for Client
  private apiUrlReview = 'http://localhost:3001/velocityxdev/dnk1/admin/getreviews'; // Backend URL for Review
  private apiUrlClientdelete = 'http://localhost:3001/velocityxdev/dnk1/admin/deleteclient'; 
  private apiUrlReviewdelete = 'http://localhost:3001/velocityxdev/dnk1/admin/deletereviews';
  
  // client opearions 
  private apiUrlAddClientFromClient="http://localhost:3001/velocityxdev/dnk1/client/addclient";
  private apiUrlAddReviewFromClient="http://localhost:3001/velocityxdev/dnk1/client/addreview";
  private apiUrlGetReviewsForClient="http://localhost:3001/velocityxdev/dnk1/client/viewreviews"


  //common operations 
  private apiUrlViewReviews="http://localhost:3001/velocityxdev/dnk1/client/viewreviews"
  private apiUrlViewUpComingProjects="http://localhost:3001/velocityxdev/dnk1/client/viewupcomingprojects"

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Client[]>(this.apiUrlClient, { headers });
  }
  // Delete a client
  deleteClient(id: string): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`${this.apiUrlClientdelete}/${id}`, { headers });
  }
  //add client
  addClient(client: Client): Observable<Client> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Client>(this.apiUrlAddClientFromClient, client,{headers});
  }

  // Get all reviews
  
  getReviewsForClient(): Observable<Review[]> {
    return this.http.get<{ reviews: Review[] }>(this.apiUrlGetReviewsForClient)
    .pipe(map(response => response.reviews)); // Extract 'reviews' from response
  }
  getReviews(): Observable<Review[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Review[]>(this.apiUrlReview, { headers });
  }
  //add review
  addReview(review: Review): Observable<Review> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Review>(this.apiUrlAddReviewFromClient, review,{headers});
  }

  // Delete a review
  deleteReview(id: string): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`${this.apiUrlReviewdelete}/${id}`, { headers });
  }
  private getAuthHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('authToken') || '';
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }
  
}
