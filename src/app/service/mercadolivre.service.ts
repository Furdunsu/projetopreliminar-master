import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MercadoLivreService {

  private apiUrl = 'https://api.mercadolibre.com/sites/MLB/search?q=';

  constructor(private http: HttpClient) { }

  // Método para buscar produtos por termo
  searchProducts(term: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${term}`);
  }
}
