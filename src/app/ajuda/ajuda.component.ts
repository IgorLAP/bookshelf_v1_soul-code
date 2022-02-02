import { trigger, state, transition, animate, style } from '@angular/animations';
import { HotToastService } from '@ngneat/hot-toast';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError,of } from 'rxjs';
import { Ajuda } from '../modelosInterface/ajuda';
import { AjudaService } from '../servicosInterface/ajuda.service';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.scss'],
  animations: [
    trigger('alternando', [
      state('collapsed, void', style({height: '0px', visibility: 'hidden'})),
      state('expanded', style({height: '*', visibility: 'visible'})),
      transition('collapsed <=> expanded',
       animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
    ])
  ]
})
export class AjudaComponent implements OnInit {

  cardAjuda$!: Observable<Ajuda[]>;
  cardErros$!: Observable<Ajuda[]>;

  constructor(private ajudaService: AjudaService,private toast: HotToastService) { }

  ngOnInit(): void {
    this.cardAjuda$ = this.ajudaService.listagemAjuda()
    .pipe(catchError(error => {
      this.toast.error('Um erro ocorreu: BS# ${error}')
      return of([])
    }))
    this.cardErros$ = this.ajudaService.listagemErros()
    .pipe(catchError(error => {
      this.toast.error('Um erro ocorreu: BS# ${error}')
      return of([])
    }))
  }
}
