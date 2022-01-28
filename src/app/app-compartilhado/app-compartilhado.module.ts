import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppDialogosComponent } from './app-dialogos/app-dialogos.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { PipesPipepe } from './app-pipes/pipes.pipe';
import { MatStepperModule } from '@angular/material/stepper';
import { UserNameFromEmailPipe } from './app-pipes/user-name-from-email.pipe';

@NgModule({
  declarations: [AppDialogosComponent, PipesPipepe, UserNameFromEmailPipe],
  imports: [CommonModule, AppMaterialModule],
  exports: [
    AppDialogosComponent,
    PipesPipepe,
    MatStepperModule,
    UserNameFromEmailPipe,
  ],
})
export class AppCompartilhadoModule {}
