import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Import HttpClient
import { Observable,map } from 'rxjs';
import { Client } from '../models/client.model'; // Import Client model
import { Review } from '../models/review.model'; // Import Review model
import { UpcomingProject } from '../models/upcoming-project.model';

@Injectable({
  providedIn: 'root'
})
export class InvokerService {
  private apiUrlClient = 'http://localhost:3001/velocityxdev/dnk1/admin/getclients'; // Backend URL for Client
  private apiUrlReview = 'http://localhost:3001/velocityxdev/dnk1/admin/getreviews'; // Backend URL for Review
  private apiUrlClientdelete = 'http://localhost:3001/velocityxdev/dnk1/admin/deleteclient'; 
  private apiUrlReviewdelete = 'http://localhost:3001/velocityxdev/dnk1/admin/deletereviews';
  private apiUrlAddUpcomingProjects="http://localhost:3001/velocityxdev/dnk1/admin/";
  private apiUrlUpcomingProjectdelete="http://localhost:3001/velocityxdev/dnk1/admin/"
  
  // client opearions 
  private apiUrlAddClientFromClient="http://localhost:3001/velocityxdev/dnk1/client/addclient";
  private apiUrlAddReviewFromClient="http://localhost:3001/velocityxdev/dnk1/client/addreview";
  private apiUrlGetReviewsForClient="http://localhost:3001/velocityxdev/dnk1/client/viewreviews";

  //common operations 
  private apiUrlViewReviews="http://localhost:3001/velocityxdev/dnk1/client/viewreviews"
  private apiUrlViewUpcomingProjects="http://localhost:3001/velocityxdev/dnk1/client/viewupcomingprojects"

  constructor(private http: HttpClient) {}

  //Clients
  getClients(): Observable<Client[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Client[]>(this.apiUrlClient, { headers });
  }
  deleteClient(id: string): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`${this.apiUrlClientdelete}/${id}`, { headers });
  }
  addClient(client: Client): Observable<Client> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Client>(this.apiUrlAddClientFromClient, client,{headers});
  }

  // Reviews
  getReviewsForClient(): Observable<Review[]> {
    return this.http.get<{ reviews: Review[] }>(this.apiUrlGetReviewsForClient)
    .pipe(map(response => response.reviews)); // Extract 'reviews' from response
  }
  getReviews(): Observable<Review[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Review[]>(this.apiUrlReview, { headers });
  }
  addReview(review: Review): Observable<Review> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Review>(this.apiUrlAddReviewFromClient, review,{headers});
  }
  deleteReview(id: string): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`${this.apiUrlReviewdelete}/${id}`, { headers });
  }

  // UpcomingProjects
  addUpcomongProject(project:UpcomingProject):Observable<UpcomingProject>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<UpcomingProject>(this.apiUrlAddUpcomingProjects, { headers });
  }
  getUpcomingProjects(): Observable<UpcomingProject> {
    return this.http.get<{upcomingprojects:UpcomingProject}>(this.apiUrlViewUpcomingProjects)
    .pipe(map(response => response.upcomingprojects));
  }
  deleteUpcomingProject(id: string): Observable<void> {
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
