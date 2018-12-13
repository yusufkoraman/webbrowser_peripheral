import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { SerialportComponent } from './components/serialport/serialport.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ErrorComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        SerialportComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'serial-port', component: SerialportComponent },
            { path: 'error', component: ErrorComponent },
            { path: '**', redirectTo: 'error' }
        ])
    ]
})
export class AppModuleShared {
}
