import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {NativeStorage} from "@ionic-native/native-storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public userKey: string;
  public userValue: string;
  public storedData: string;

  constructor(public navCtrl: NavController,
              public storage: NativeStorage) {



  }


  public saveData() {

    if (this.userKey) {
      this.storage.setItem(this.userKey, this.userValue);
      this.userValue = '';
      this.userKey = '';
    }
  }

  public loadData() {

    if(!this.userKey)
      return;

    this.storage.getItem(this.userKey).then((data)=>{
      this.storedData = data;
      this.userValue = '';
      this.userKey = '';
    });
  }

}
