import { makeAutoObservable } from "mobx";
import { ImageType } from "../types/ImageType";

export class ImageStore {
    
    private images: Array<ImageType>

    constructor() {
        this.images = []

        makeAutoObservable(this)
    }

    public setImages(images: Array<ImageType>): void {
        this.images = images
    }

    public getImages(): Array<ImageType> {
        return this.images
    }
}