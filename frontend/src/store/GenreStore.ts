import { makeAutoObservable } from 'mobx'
import { GenreType } from '../types/GenreType'

export class GenreStore {
  private genres: GenreType[]

  constructor() {
    this.genres = []

    makeAutoObservable(this)
  }

  public setGenres(genres: GenreType[]): void {
    this.genres = genres
  }

  public getGenres(): GenreType[] {
    return this.genres
  }
}
