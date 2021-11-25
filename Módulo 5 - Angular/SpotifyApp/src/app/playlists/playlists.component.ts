import { Component, OnInit } from '@angular/core';
import { Playlist } from '../models/playlist.model';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css'],
})
export class PlaylistsComponent implements OnInit {
  playlists!: Playlist[];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.playlists = this.spotifyService.getPlaylists();
  }
}
