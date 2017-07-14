import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  constructor() { }

  getMusicianTypes() {
    return ['comtenporany', 'classic'];
  }

}
