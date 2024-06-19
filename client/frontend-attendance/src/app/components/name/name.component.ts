import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { getName } from 'src/app/store/selector/auth.selector';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  constructor(private route : ActivatedRoute,
              private store : Store<AppState>,
              private toastr : ToastrService
  ) {}

  userName!: string;

  ngOnInit(): void {
    this.store.select(getName)
    .subscribe((data) =>{
      console.log("s",data);
      this.userName=data;
    })
  }

  logoutSucces() {
    this.toastr.success("You are Logout Successfully","Success");
  }

}
