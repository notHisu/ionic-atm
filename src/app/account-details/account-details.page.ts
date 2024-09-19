import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.page.html',
  styleUrls: ['./account-details.page.scss'],
})
export class AccountDetailsPage implements OnInit {
  username: string;
  money: number;

  constructor(private userService: UserService) {
    this.username = '';
    this.money = 0;
  }

  ngOnInit() {
    this.username = this.userService.getUsername();
    this.money = this.userService.getMoney();
  }
}
