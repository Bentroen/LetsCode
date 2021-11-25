import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Playlist } from 'src/app/models/playlist.model';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.css'],
})
export class PlaylistItemComponent implements OnInit {
  @Input() playlist!: Playlist;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    console.log('Playlist ');
    console.log(this.playlist);
  }

  onNavigate() {
    this.router.navigate([this.playlist.id, { relativeTo: this.route }]);
  }
}
