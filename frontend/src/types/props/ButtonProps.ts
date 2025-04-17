import { MovieType } from "../MovieType"

export interface ButtonsProps {
    record: MovieType
    setSelectedMovie: React.Dispatch<React.SetStateAction<MovieType | null>>
    setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}