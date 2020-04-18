import { NgModule } from '@angular/core';


import { MaterialModule } from '../../material.moduel';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';

@NgModule({
  imports: [MaterialModule,DashboardRoutingModule],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
