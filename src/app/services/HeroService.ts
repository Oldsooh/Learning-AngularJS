import { Hero } from '../models/hero';

export class HeroService{
    public static getAllHeroes(): any[] {
        const heroes = [
            new Hero(1, 'Richard'),
            new Hero(2, 'Oldsooh'),
            new Hero(3, 'Fei Huang')
        ];

        return heroes;
    }
}
