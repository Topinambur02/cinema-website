import { makeAutoObservable } from 'mobx'
import { HallType } from '../types/HallType'

export class HallStore {
  private halls: Array<HallType>

  constructor() {
    this.halls = []

    makeAutoObservable(this)
  }

  public setHalls(halls: Array<HallType>): void {
    this.halls = halls
  }

  public getHalls(): Array<HallType> {
    return this.halls
  }
}
