import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum TiposDeBusca{
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class FilmesServiceService {
  private url = 'http://www.omdbapi.com';
  private apiKey = 'eb7bd423';

  constructor(private http: HttpClient) { }


    buscarFilmes(titulo: string, type: TiposDeBusca) : Observable<any>{
      return this.http.get(`${this.url}?s=${encodeURI(titulo)}&type=${type}&apikey=${this.apiKey}`);
    }

    buscarDetalhado(id: any){
      console.log(id);
      return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
    }
}
