import AddImageModal from "./AddImageModal"
import EditImageModal from "./EditImageModal"
import ImageTable from "./ImageTable"
import { ImageAdminPanelProps } from "../../../types/props/ImageAdminPanelProps"

const ImageAdminPanel = ({ 
    isAddModalOpen, 
    setIsAddModalOpen, 
    isEditModalOpen, 
    setIsEditModalOpen, 
    selectedImage, 
    setSelectedImage 
}: ImageAdminPanelProps) => {
    return (
        <>
            <ImageTable
                setIsAddModalOpen={setIsAddModalOpen}
                setIsEditModalOpen={setIsEditModalOpen}
                setSelectedImage={setSelectedImage}
            />

            <EditImageModal
                isEditModalOpen={isEditModalOpen}
                setIsEditModalOpen={setIsEditModalOpen}
                selectedImage={selectedImage}
            />

            <AddImageModal
                isAddModalOpen={isAddModalOpen}
                setIsAddModalOpen={setIsAddModalOpen}
            />
        </>
    )
}

export default ImageAdminPanel