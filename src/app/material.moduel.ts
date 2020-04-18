import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule, MatCardModule,
    MatInputModule,
    MatListModule,],
  exports: [MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule, MatCardModule,
    MatFormFieldModule, MatInputModule,
    MatListModule,]
})
export class MaterialModule {
}
