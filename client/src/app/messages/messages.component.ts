
import { Component, OnInit } from '@angular/core';
import { Message } from '../_models/message';
import { Pagination } from '../_models/pagination';
import { ConfirmService } from '../_services/confirm.service';
import { MessageService } from '../_services/message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
messages:Message[]=[];
pagination:Pagination;
continer ='Unread';
pageNumber = 1;
pageSize = 5;
loading=false;


  constructor(private messageService:MessageService, private confirmService:ConfirmService) { }

  ngOnInit(): void {
    this.loadMessage();
    console.log("suresh");
  }

  loadMessage(){
    this.loading=true;
    this.messageService.getMessage(this.pageNumber,this.pageSize, this.continer).subscribe(Response=>{
      this.messages=Response.result;
      this.pagination=Response.pagination;
      this.loading=false;
    })
  }

  deleteMessage(id:number){
    this.confirmService.confirm('Confirm Delete Mesage', 'this connot be undone').subscribe(result=>{
      if(result){
        this.messageService.deleteMessage(id).subscribe(()=>{
          this.messages.splice(this.messages.findIndex(m=>m.id==id), 1)
        })
      }
    })
  }


  /*pageChanged(event:any){
    this.pageNumber= event.page;
    this.loadMessage();
  }
*/
  pageChanged(event: any){
    if (this.pageNumber !== event.page) {
        this.pageNumber = event.page;
        console.log(this.pageNumber);
        this.loadMessage();
    }
  }


}
