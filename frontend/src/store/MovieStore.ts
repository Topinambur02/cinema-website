import { makeAutoObservable } from "mobx";
import { MovieType } from "../types/MovieType";

export class MovieStore {

    private movies: Array<MovieType>

    constructor() {
        this.movies = []

        makeAutoObservable(this)
    }

    public setMovies(movies: Array<MovieType>): void {
        this.movies = movies
    }

    public getMovies(): Array<MovieType> {
        return this.movies
    }

}