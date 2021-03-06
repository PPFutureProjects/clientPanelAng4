import { Injectable } from '@angular/core';
import { AngularFireDatabase, 
        FirebaseListObservable, 
        FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';

import { Client } from '../models/Client';

@Injectable()
export class ClientService {

  clients: FirebaseListObservable<any[]>;
  client: FirebaseListObservable<any>

  constructor(
    public af: AngularFireDatabase
  ) { 
    this.clients = this.af.list('/clients') as FirebaseListObservable<Client[]>;
  }

  getClients() {
    return this.clients;
  }

}
