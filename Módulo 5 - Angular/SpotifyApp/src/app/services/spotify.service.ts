import { Injectable } from '@angular/core';
import { Playlist } from '../models/playlist.model';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private playlists: Playlist[] = [
    new Playlist(1, 'Pop', ''),
    new Playlist(2, 'Chill', ''),
    new Playlist(3, 'Latino', ''),
    new Playlist(4, 'Rock', ''),
    new Playlist(5, 'Focus', ''),
  ];

  constructor() { }

  getPlaylists() {
    return this.playlists;
  }
}
