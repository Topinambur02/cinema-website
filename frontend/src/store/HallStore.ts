import { makeAutoObservable } from 'mobx'
import { HallType } from '../types/HallType'

export class HallStore {
  private halls: HallType[]

  constructor() {
    this.halls = []

    makeAutoObservable(this)
  }

  public setHalls(halls: HallType[]): void {
    this.halls = halls
  }

  public getHalls(): HallType[] {
    return this.halls
  }
}
