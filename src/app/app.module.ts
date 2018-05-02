import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListAssetsComponent } from './list-assets/list-assets.component';
import { ServiceService} from '../app/service.service';
import { Http , HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomDirectiveDirective } from './custom-directive.directive';

import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'listAssets', component: ListAssetsComponent } 
];
 
@NgModule({
  declarations: [
    AppComponent,
    ListAssetsComponent,
    DashboardComponent,
    CustomDirectiveDirective
  ],
  imports: [
    BrowserModule,HttpModule ,RouterModule.forRoot(routes),FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
