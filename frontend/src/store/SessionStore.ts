import { makeAutoObservable } from 'mobx'
import { SessionType } from '../types/SessionType'

export class SessionStore {
  private sessions: SessionType[]

  constructor() {
    this.sessions = []

    makeAutoObservable(this)
  }

  public setSessions(sessions: SessionType[]): void {
    this.sessions = sessions
  }

  public getSessions(): SessionType[] {
    return this.sessions
  }
}
