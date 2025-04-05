import { GenreType } from './GenreType'
import { ImageType } from './ImageType'

export type MovieTypeWithImageAndGenres = {
  id: number
  name: string
  imageID: number
  description: string
  ageLimit: string
  genres_ids: Array<number>
  image: ImageType | undefined
  listOfGenres: GenreType[] | undefined
}
