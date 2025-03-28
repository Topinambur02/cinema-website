import { GenreStore } from "../store/GenreStore";
import { ImageStore } from "../store/ImageStore";
import { MovieStore } from "../store/MovieStore";

export interface StoresType {
    movieStore: MovieStore
    imageStore: ImageStore
    genreStore: GenreStore
}