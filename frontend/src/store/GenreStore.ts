import { makeAutoObservable } from "mobx";
import { GenreType } from "../types/GenreType";

export class GenreStore {

    private genres: Array<GenreType>

    constructor() {
        this.genres = []

        makeAutoObservable(this)
    }

    public setGenres(genres: Array<GenreType>): void {
        this.genres = genres
    }

    public getGenres(): Array<GenreType> {
        return this.genres
    }

}