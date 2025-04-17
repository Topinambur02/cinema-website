import { Dispatch, SetStateAction } from "react"
import { HallType } from "../HallType"
import { MovieType } from "../MovieType"
import { SessionType } from "../SessionType"

export interface SessionAdminPanelProps {
    isAddModalOpen: boolean
    setIsAddModalOpen: Dispatch<SetStateAction<boolean>>
    isEditModalOpen: boolean
    setIsEditModalOpen: Dispatch<SetStateAction<boolean>>
    selectedSession: SessionType | null
    setSelectedSession: Dispatch<SetStateAction<any>>
    halls: HallType[]
    movies: MovieType[]
}