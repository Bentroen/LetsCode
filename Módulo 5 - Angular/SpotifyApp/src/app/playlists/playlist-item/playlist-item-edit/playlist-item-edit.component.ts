import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Playlist } from 'src/app/models/playlist.model';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-playlist-item-edit',
  templateUrl: './playlist-item-edit.component.html',
  styleUrls: ['./playlist-item-edit.component.css'],
})
export class PlaylistItemEditComponent implements OnInit {
  id!: number;
  playlist!: Playlist | undefined;

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.getPlaylist();
  }

  getPlaylist() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log(this.id);

      this.playlist = this.spotifyService.getPlaylist(this.id);
      console.log('PLAYLIST NO EDIT-ITEM');
      console.log(this.playlist);
    });
  }
}
