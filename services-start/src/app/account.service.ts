import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./Logging.service";

@Injectable()
export class AccountService {

    public accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    public statusUpdated = new EventEmitter<string>();

    constructor(private loggingService : LoggingService) {}

    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatusChange(newStatus);
    }

}