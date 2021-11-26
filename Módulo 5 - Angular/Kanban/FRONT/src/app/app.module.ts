import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { NewCardComponent } from './board/new-card/new-card.component';
import { CardListComponent } from './board/card-list/card-list.component';
import { CardComponent } from './board/card-list/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    NewCardComponent,
    CardListComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
