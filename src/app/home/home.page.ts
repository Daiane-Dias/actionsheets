import { Component } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public actionsheetCtrl : ActionSheetController
  ) {}
async openMenu(){
  const actionSheet = await this.actionsheetCtrl.create({
    header: 'Update Album',
    buttons:[
      {
        text: 'Desctructive',
        role:'desctructive',
        handler:() => {
          console.log('Destructive clicked');

        }
      },
      {
        text:'Create',
        handler:() => {
            console.log('Create clicked');
        }
      },
      {
        text:'Play',
        handler: () => {
          console.log('Play clicked');
        }
      },
      {
        text:'Favorite',
        handler: () => {
          console.log('Favorite clicked');
        }
      },
      {
        text:'Cancel',
        role:'Cancel',
        handler: () => {
          console.log('Cancel clicked');
        }

      }
    ] 
  });
  await actionSheet.present();
}

}
