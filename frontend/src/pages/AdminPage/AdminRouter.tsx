import { useState } from "react"
import { GenreType } from "../../types/GenreType"
import { HallType } from "../../types/HallType"
import { ImageType } from "../../types/ImageType"
import { MovieType } from "../../types/MovieType"
import { SeatType } from "../../types/SeatType"
import { SessionType } from "../../types/SessionType"
import MovieAdminPage from "./Movie/MovieAdminPage"
import GenreAdminPanel from "./Genre/GenreAdminPanel"
import HallAdminPanel from "./Hall/HallAdminPanel"
import ImageAdminPanel from "./Image/ImageAdminPanel"
import SeatAdminPanel from "./Seat/SeatAdminPanel"
import SessionAdminPanel from "./Session/SessionAdminPanel"
import { AdminRouterProps } from "../../types/props/AdminRouterProps"
import TicketsChart from "./TicketsChart/TicketsChart"

const AdminRouter = ({ selectedKey, images, genres, movies, halls }: AdminRouterProps) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState<MovieType | null>(null)
    const [selectedGenre, setSelectedGenre] = useState<GenreType | null>(null)
    const [selectedHall, setSelectedHall] = useState<HallType | null>(null)
    const [selectedSession, setSelectedSession] = useState<SessionType | null>(null)
    const [selectedSeat, setSelectedSeat] = useState<SeatType | null>(null)
    const [selectedImage, setSelectedImage] = useState<ImageType | null>(null)

    return (
        <div>
            {
                selectedKey === '1' &&
                <MovieAdminPage
                    isAddModalOpen={isAddModalOpen}
                    setIsAddModalOpen={setIsAddModalOpen}
                    isEditModalOpen={isEditModalOpen}
                    setIsEditModalOpen={setIsEditModalOpen}
                    selectedMovie={selectedMovie}
                    setSelectedMovie={setSelectedMovie}
                    images={images}
                    genres={genres}
                />
                ||
                selectedKey === '2' &&
                <GenreAdminPanel
                    isAddModalOpen={isAddModalOpen}
                    setIsAddModalOpen={setIsAddModalOpen}
                    isEditModalOpen={isEditModalOpen}
                    setIsEditModalOpen={setIsEditModalOpen}
                    selectedGenre={selectedGenre}
                    setSelectedGenre={setSelectedGenre}
                />
                ||
                selectedKey === '3' &&
                <HallAdminPanel
                    isAddModalOpen={isAddModalOpen}
                    setIsAddModalOpen={setIsAddModalOpen}
                    isEditModalOpen={isEditModalOpen}
                    setIsEditModalOpen={setIsEditModalOpen}
                    selectedHall={selectedHall}
                    setSelectedHall={setSelectedHall}
                />
                ||
                selectedKey === '4' &&
                <ImageAdminPanel
                    isAddModalOpen={isAddModalOpen}
                    setIsAddModalOpen={setIsAddModalOpen}
                    isEditModalOpen={isEditModalOpen}
                    setIsEditModalOpen={setIsEditModalOpen}
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                />
                ||
                selectedKey === '5' &&
                <SeatAdminPanel
                    isAddModalOpen={isAddModalOpen}
                    setIsAddModalOpen={setIsAddModalOpen}
                    isEditModalOpen={isEditModalOpen}
                    setIsEditModalOpen={setIsEditModalOpen}
                    selectedSeat={selectedSeat}
                    setSelectedSeat={setSelectedSeat}
                    halls={halls}
                />
                ||
                selectedKey === '6' &&
                <SessionAdminPanel
                    isAddModalOpen={isAddModalOpen}
                    setIsAddModalOpen={setIsAddModalOpen}
                    isEditModalOpen={isEditModalOpen}
                    setIsEditModalOpen={setIsEditModalOpen}
                    selectedSession={selectedSession}
                    setSelectedSession={setSelectedSession}
                    halls={halls}
                    movies={movies}
                />
                ||
                selectedKey === '7' && <TicketsChart />
            }
        </div>
    )
}

export default AdminRouter