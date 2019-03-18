import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginApp';

  ngOnInit() {
    const config = {
      apiKey: 'AIzaSyCr6yzlcK5hiwgPEot-6eVjdsCL0V7Tuj0',
      authDomain: 'myproject-9ea3d.firebaseapp.com',
      databaseURL: 'https://myproject-9ea3d.firebaseio.com',
      projectId: 'myproject-9ea3d',
      storageBucket: 'myproject-9ea3d.appspot.com',
      messagingSenderId: '744637847345'
    };
    firebase.initializeApp(config);

}}
