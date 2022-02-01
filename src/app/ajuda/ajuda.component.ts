import { HotToastService } from '@ngneat/hot-toast';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError,of } from 'rxjs';
import { Ajuda } from '../modelosInterface/ajuda';
import { AjudaService } from '../servicosInterface/ajuda.service';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.scss']
})
export class AjudaComponent implements OnInit {


  cardAjuda$!: Observable<Ajuda[]>;

  constructor(private ajudaService: AjudaService,private toast: HotToastService) { }

  ngOnInit(): void {
    this.cardAjuda$ = this.ajudaService.listagemAjuda()
    .pipe(catchError(error => {
      this.toast.error('Um erro ocorreu: BS# ${error}')
      return of([])
    }))
  }

}
