import { makeAutoObservable } from 'mobx'
import { MovieType } from '../types/MovieType'

export class MovieStore {
  private movies: MovieType[]

  constructor() {
    this.movies = []

    makeAutoObservable(this)
  }

  public setMovies(movies: MovieType[]): void {
    this.movies = movies
  }

  public getMovies(): MovieType[] {
    return this.movies
  }
}
