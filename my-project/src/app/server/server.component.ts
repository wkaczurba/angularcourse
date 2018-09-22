import { Component } from '@angular/core';

@Component ({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 23
    serverStatus = 'Offline'
    
    getAdmin() {
        return `John O''Dowd`;
    }
}

