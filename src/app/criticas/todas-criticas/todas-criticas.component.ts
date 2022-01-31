import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, filter, fromEvent, Observable, of, tap } from 'rxjs';

import { Criticas } from '../modelos/criticas';
import { CriticasService } from './../../servicosInterface/criticas.service';

@Component({
  selector: 'app-todas-criticas',
  templateUrl: './todas-criticas.component.html',
  styleUrls: ['./todas-criticas.component.scss']
})
export class TodasCriticasComponent implements OnInit, AfterViewInit {

  @ViewChild('searchInput') searchInput!: ElementRef;
  criticas$!: Observable<Criticas[]>;
  result$?: Observable<Criticas[]>;

  constructor(private criticasService: CriticasService) { }

  ngOnInit(): void {
    this.criticas$ = this.criticasService.listagem()
    .pipe(
      catchError(err=>{
        return of([])
      })
    )
  }

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup')
    .pipe(
      filter(Boolean),
      debounceTime(500),
      distinctUntilChanged(),
      tap(()=>{
      const query = this.searchInput.nativeElement.value;
        if(query){
          this.result$ = this.criticasService.search(query)
        } else {
          this.result$ = undefined;
        }
      })
    ).subscribe();
  }

}
