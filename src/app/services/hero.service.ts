import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from '../models/hero';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
    constructor(private messageService: MessageService) { }

    public getAllHeroes(): Observable<any[]> {
        const heroes = [
            new Hero(1, 'Richard'),
            new Hero(2, 'Oldsooh'),
            new Hero(3, 'Fei Huang')
        ];

        this.messageService.add('HeroService: fetched heroes');

        return of(heroes);
    }
}
