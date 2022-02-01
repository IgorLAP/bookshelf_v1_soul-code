import { CriticasService } from './../../servicosInterface/criticas.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { Criticas } from './../modelos/criticas';

@Component({
  selector: 'app-critica-dialog',
  templateUrl: './critica-dialog.component.html',
  styleUrls: ['./critica-dialog.component.scss']
})
export class CriticaDialogComponent implements OnInit {

  critica$?: Observable<Criticas | undefined>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public id: string,
    private criticasService: CriticasService
  ) { }

  ngOnInit(): void {
    this.critica$ = this.criticasService.critica(this.id)
  }

}
