import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string;

  constructor(private userService: UserService) {
    this.username = '';
  }

  ngOnInit() {
    this.username = this.userService.getUsername();
  }
}
