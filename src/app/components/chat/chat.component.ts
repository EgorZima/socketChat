import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { chatService } from '../../../services/chat.service';

@Component({
  selector: 'chat',
  templateUrl: 'chat.component.html'
})
export class ChatComponent {
    messages:any = [];
    message = '';
    connection; 
    username = '';
    alert = '';
    
    constructor(private ChatService: chatService) {}

    ngOnInit() {
        this.username = this.ChatService.getUsername();

        this.connection = this.ChatService.getMessages().subscribe(
            message => {
                this.messages.push(message)
            }
        )   
    }

    ngOnDestroy() {
        this.connection.unsubscribe();
    } 
 
    sendMassage() {
        this.ChatService.sendMessage(this.message, this.username); 
        this.message = '';
    }

    setUsername() {
        this.ChatService.setUsername(this.username);
        this.alert = 'username is set';   
    }
}
