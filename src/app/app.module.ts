import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
// Router linking
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { HousedetailsComponent } from './housedetails/housedetails.component';
import { CharacterdetailsComponent } from './characterdetails/characterdetails.component';
import { NotfoundComponent } from './notfound/notfound.component';

// import statement for service
import { GothttpService } from './gothttp.service';





@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BookdetailsComponent,
    HousedetailsComponent,
    CharacterdetailsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      {path: 'main', component: MainComponent},
      {path: 'main/bookdetails/:bookId', component: BookdetailsComponent},
      {path: 'main/housedetails/:houseId', component: HousedetailsComponent},
      {path: 'main/characterdetails/:characterId', component: CharacterdetailsComponent},
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: '**', component: NotfoundComponent}
    ])
  ],
  providers: [GothttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
