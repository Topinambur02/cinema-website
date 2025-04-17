import { HallType } from "../HallType"
import { MovieType } from "../MovieType"

export interface AddSessionModalProps {
    isAddModalOpen: boolean
    setIsAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    availableHalls: HallType[]
    availableMovies: MovieType[]
}