import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FilmesServiceService, TiposDeBusca } from 'src/app/services/filmes-service.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {
  resultados! : Observable<any>;
  termosBusca: string = '';
  tipo! : TiposDeBusca.all;

  constructor(private filmesService : FilmesServiceService) { }

  ngOnInit() {  }

  buscar(){
    console.log(this.termosBusca)
    this.resultados = this.filmesService.buscarFilmes(this.termosBusca, this.tipo)
    .pipe(map(results => results['Search']));
  }

}
