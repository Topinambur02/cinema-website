import { makeAutoObservable } from 'mobx'
import { ImageType } from '../types/ImageType'

export class ImageStore {
  private images: ImageType[]

  constructor() {
    this.images = []

    makeAutoObservable(this)
  }

  public setImages(images: ImageType[]): void {
    this.images = images
  }

  public getImages(): ImageType[] {
    return this.images
  }
}
