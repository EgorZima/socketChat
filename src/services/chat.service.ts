import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
                    
export class chatService {
    private url = 'http://localhost:8000';
    private socket: any;

    sendMessage(message, username) {
        this.socket.emit('add-message', message, username);
    }

    getMessages() {
        let observable = new Observable((observer:any) => {
            this.socket = io(this.url);
            this.socket.on('message', (data:any) => {
                observer.next(data);
            })
            return () => {
                this.socket.disconnect()
            }
        })
        return observable
    }

    getUsername() {
        return sessionStorage.getItem('username');
    }

    setUsername(username) { 
        sessionStorage.setItem('username', username);
    }
    
}
