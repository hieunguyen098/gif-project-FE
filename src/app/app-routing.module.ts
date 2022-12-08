import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifListComponent } from './components/gif-list/gif-list.component';
import { GifSearchListComponent } from './components/gif-search-list/gif-search-list.component';

const routes: Routes = [
  { path: '', component: GifListComponent },
  { path: 'search/:id', component: GifSearchListComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
