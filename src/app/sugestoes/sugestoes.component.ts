import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, filter, fromEvent, Observable, of, tap } from 'rxjs';

import { SugestoesService } from '../servicosInterface/sugestoes.service';
import { Sugestoes } from './modelos/sugestoes';

@Component({
  selector: 'app-sugestoes',
  templateUrl: './sugestoes.component.html',
  styleUrls: ['./sugestoes.component.scss']
})
export class SugestoesComponent implements OnInit, AfterViewInit {

  sugestoes$!: Observable<Sugestoes[]>;
  result$?: Observable<Sugestoes[]>;
  @ViewChild('searchInput') searchInput!: ElementRef

  constructor(
    private sugestoesService: SugestoesService
    ) { }

  ngOnInit(): void {
    this.sugestoes$ = this.sugestoesService.listagem()
    .pipe(
      catchError(err=>{
        console.log(err)
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
            this.result$ = this.sugestoesService.search(query)
          } else {
            this.result$ = undefined;
          }
        })
      ).subscribe();
  }

}
