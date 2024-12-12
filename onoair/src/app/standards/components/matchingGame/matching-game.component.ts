import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-matching-game',
  imports: [],
  templateUrl: './matching-game.component.html',
  styleUrl: './matching-game.component.css',
})
export class MatchingGameComponent {}

@Component({
  selector: 'dialog-game-pick',
  //templateUrl: 'dialog-content-example-dialog.html',
  template: `
    <h2 mat-dialog-title>choose category to play</h2>

    <mat-dialog-content class="mat-typography">
      <mat-form-field>
        <mat-select (selectionChange)="categorySelect($event.value)">
          @for(item of categoyList; track item.id){
          <mat-option value="{{ item.id }}">{{ item.name }}</mat-option>
          }
        </mat-select>
      </mat-form-field>
      @if(categoryPick){
      <p>words: {{ categorPickData.words.length }}</p>
      <p>
        last update: {{ categorPickData.lastUpdateDate | date : 'dd/MM/yyyy' }}
      </p>
      }
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      @if(categoryPick){
      <button
        mat-button
        mat-dialog-close
        routerLink="/game/{{ gameAlias }}/{{ categorPickData.id }}"
      >
        Play
      </button>
      }
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class DialogGamePick {
  categoyList: any;
  categoryPick = 0;
  categorPickData: any;
  gameAlias: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.gameid == 1) {
      this.gameAlias = 'trivia';
    } else if (data.gameid == 2) {
      this.gameAlias = 'mixed';
    } else if (data.gameid == 3) {
      this.gameAlias = 'sorting';
    }
  }

  categorySelect(category: any) {
    this.categoryPick = category;
    this.categorPickData = this.categoyList.filter(
      (obj: any) => obj.id == this.categoryPick
    )[0];
  }
}
