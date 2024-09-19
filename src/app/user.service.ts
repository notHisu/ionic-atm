import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private username: string;
  private money: number;

  constructor() {
    this.username = '';
    this.money = 0;
  }

  setUsername(username: string) {
    this.username = username;
  }

  setMoney(money: number) {
    this.money = money;
  }

  getUsername() {
    return this.username;
  }

  getMoney() {
    return this.money;
  }
}
