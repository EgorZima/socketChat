import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { chatService } from '../../../services/chat.service';

@Component({
  selector: 'chat',
  templateUrl: 'chat.component.html', 
  
})
export class ChatComponent {
    messages = [];
    message:string = '';
    connection; 
    username = '';
    alert = '';
    validationMessage;
    
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
        if (this.message.length) {
            this.validationMessage = '';

            let a = this.link(this.message);
        
            this.ChatService.sendMessage(a, this.username); 
            this.message = '';
            return
        } 
        this.validationMessage = "Form Is Not Valid";
    }

    link(text) {
        var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        return text.replace(urlRegex, function(url) {
            let a = '<a href="' + url + '">' + url + '</a>';
            return a;
        });
    }

    setUsername() {
        this.ChatService.setUsername(this.username);
        this.alert = 'username is set';   
    }
}
