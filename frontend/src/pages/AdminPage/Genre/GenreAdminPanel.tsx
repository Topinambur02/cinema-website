import AddGenreModal from "./AddGenreModal"
import EditGenreModal from "./EditGenreModal"
import GenreTable from "./GenreTable"
import { GenreAdminPanelProps } from "../../../types/props/GenreAdminPanelProps"

const GenreAdminPanel = ({ 
    isAddModalOpen, 
    setIsAddModalOpen, 
    isEditModalOpen, 
    setIsEditModalOpen, 
    selectedGenre, 
    setSelectedGenre 
}: GenreAdminPanelProps) => {
    return (
        <>
            <GenreTable
                setIsAddModalOpen={setIsAddModalOpen}
                setIsEditModalOpen={setIsEditModalOpen}
                setSelectedGenre={setSelectedGenre}
            />

            <EditGenreModal
                isEditModalOpen={isEditModalOpen}
                setIsEditModalOpen={setIsEditModalOpen}
                selectedGenre={selectedGenre}
            />

            <AddGenreModal
                isAddModalOpen={isAddModalOpen}
                setIsAddModalOpen={setIsAddModalOpen}
            />
        </>
    )
}

export default GenreAdminPanel