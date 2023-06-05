import { IOClients } from '@vtex/api'
import { OMS } from '@vtex/clients'

import Getnet from './getnet'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get oms() {
    return this.getOrSet('oms', OMS)
  }

  public get getnet() {
    return this.getOrSet('getnet', Getnet)
  }
}
