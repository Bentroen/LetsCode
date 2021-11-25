import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from 'src/app/models/playlist.model';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.css'],
})
export class PlaylistItemComponent implements OnInit {
  @Input() playlist!: Playlist;

  constructor() {}

  ngOnInit(): void {}
}
