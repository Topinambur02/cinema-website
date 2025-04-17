import { GenreType } from "../GenreType"
import { HallType } from "../HallType"
import { ImageType } from "../ImageType"
import { MovieType } from "../MovieType"

export interface AdminRouterProps {
    selectedKey: string
    images: ImageType[]
    genres: GenreType[]
    movies: MovieType[]
    halls: HallType[]
}