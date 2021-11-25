import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistItemEditComponent } from './playlists/playlist-item/playlist-item-edit/playlist-item-edit.component';

const routes: Routes = [
  {
    path: 'playlist',
    component: PlaylistsComponent,
    children: [{ path: ':id', component: PlaylistItemEditComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
