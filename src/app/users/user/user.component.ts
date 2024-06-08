import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };
  paramSubcription: Subscription;
  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    console.log("cambiando de users")
    this.paramSubcription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'],
          this.user.name = params['name'];
      }
    );
  }




}
