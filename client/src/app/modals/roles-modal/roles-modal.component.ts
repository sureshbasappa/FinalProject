import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/_models/user';


@Component({
  selector: 'app-roles-modal',
  templateUrl: './roles-modal.component.html',
  styleUrls: ['./roles-modal.component.css']
})
export class RolesModalComponent implements OnInit {

  @Input() updateSelectedRoles= new EventEmitter();
  user:User;
  roles:any[];

  constructor(public bsModalRef:BsModalRef, private toster:ToastrService) { }

  ngOnInit(): void {
  }

  updateRoles(){
    this.updateSelectedRoles.emit(this.roles);
    this.bsModalRef.hide();
    this.toster.success('you have update the ' + this.user.username + ' roles');
  }

}
