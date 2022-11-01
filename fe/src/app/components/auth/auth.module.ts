import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authComponents } from './index';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatDialogModule,
  MatCardModule,
  MatExpansionModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  MatProgressBarModule,
  MatSnackBarModule } from '@angular/material';

const MAT_MODULES = [
  MatButtonModule,
  MatExpansionModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatDialogModule
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ...MAT_MODULES
  ],
  exports: [
    ...authComponents
  ],
  declarations: [
    ...authComponents
  ],
  entryComponents: [
    ...authComponents
  ]
})
export class AuthModule {

}
