import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { Criticas } from '../modelos/criticas';
import { CriticasService } from './../../servicosInterface/criticas.service';

@Component({
  selector: 'app-critica',
  templateUrl: './critica.component.html',
  styleUrls: ['./critica.component.scss']
})
export class CriticaComponent implements OnInit {

  critica$?: Observable<Criticas | undefined>;

  constructor
  (
    private route: ActivatedRoute,
    private criticasService: CriticasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.critica$ = this.criticasService.critica(id)
    .pipe(
      tap((data) => {
        if(!data){
          this.router.navigate(['/'])
        }
      })
    )
  }


}
