import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HomeCategoriesService {
  configUrl = 'https://api.escuelajs.co/api/v1/categories';
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getHomeCategories(): Observable<any> {
    let params = new HttpParams();
    params = params.append('limit', 5);
    return this.http.get(this.configUrl, { params: params });
  }
  getHomeCategoryProducts(categoryId: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('offset', 1);
    params = params.append('limit', 5);

    return this.http.get(`${this.configUrl}/${categoryId}/products`, {
      params: params,
    });
  }
}
