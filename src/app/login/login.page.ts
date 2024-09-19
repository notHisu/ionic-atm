import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email: string;
  password: string;

  constructor(
    private navCtrl: NavController,
    private userService: UserService
  ) {
    this.email = '';
    this.password = '';
  }

  onSubmit() {
    if (this.email === testUser.id && this.password === testUser.password) {
      this.userService.setUsername(testUser.id);
      this.userService.setMoney(testUser.money);
      this.navCtrl.navigateRoot('/home');
    }
  }
}

interface User {
  id: string;
  password: string;
  money: number;
}

const testUser: User = {
  id: '2115208@gmail.com',
  password: '1234',
  money: 10000,
};
