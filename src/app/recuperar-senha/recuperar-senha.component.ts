import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
})
export class RecuperarSenhaComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    if(this.dialog){
      this.dialog.closeAll();
    }
  }

}
