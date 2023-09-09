import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesServiceService } from 'src/app/services/filmes-service.service';

@Component({
  selector: 'app-filmes-detalhes',
  templateUrl: './filmes-detalhes.page.html',
  styleUrls: ['./filmes-detalhes.page.scss'],
})
export class FilmesDetalhesPage implements OnInit {

  id!: string;
  informacao: any;
  constructor(private activatedRoute: ActivatedRoute, 
    private _filmesService: FilmesServiceService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
      this._filmesService.buscarDetalhado(id).subscribe(result => {
        this.informacao = result;
      });
  }


  abrirSite() {
    window.open(this.informacao.Website, '_blank');
  }
}
