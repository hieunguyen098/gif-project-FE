import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GifListComponent } from './components/gif-list/gif-list.component';
import { GifComponent } from './components/gif/gif.component';
import { GifSearchListComponent } from './components/gif-search-list/gif-search-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GifListComponent,
    GifComponent,
    GifSearchListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    NzAutocompleteModule,
    MatAutocompleteModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
