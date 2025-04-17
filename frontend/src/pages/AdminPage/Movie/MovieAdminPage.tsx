import AddMovieModal from "./AddMovieModal"
import EditMovieModal from "./EditMovieModal"
import MovieTable from "./MovieTable"
import { MovieAdminPageProps } from "../../../types/props/MovieAdminPageProps"

const MovieAdminPage = ({ 
    isAddModalOpen, 
    setIsAddModalOpen, 
    isEditModalOpen, 
    setIsEditModalOpen, 
    selectedMovie, 
    setSelectedMovie, 
    images, 
    genres 
}: MovieAdminPageProps) => {
    return (
        <>
            <MovieTable
                setIsAddModalOpen={setIsAddModalOpen}
                setIsEditModalOpen={setIsEditModalOpen}
                setSelectedMovie={setSelectedMovie}
            />

            <EditMovieModal
                isEditModalOpen={isEditModalOpen}
                setIsEditModalOpen={setIsEditModalOpen}
                selectedMovie={selectedMovie}
                availableImages={images}
                availableGenres={genres}
            />

            <AddMovieModal
                isAddModalOpen={isAddModalOpen}
                setIsAddModalOpen={setIsAddModalOpen}
                availableImages={images}
                availableGenres={genres}
            />
        </>
    )
}

export default MovieAdminPage