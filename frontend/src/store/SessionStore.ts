import { makeAutoObservable } from 'mobx'
import { SessionType } from '../types/SessionType'

export class SessionStore {
  private sessions: Array<SessionType>

  constructor() {
    this.sessions = []

    makeAutoObservable(this)
  }

  public setSessions(sessions: Array<SessionType>): void {
    this.sessions = sessions
  }

  public getSessions(): Array<SessionType> {
    return this.sessions
  }
}
