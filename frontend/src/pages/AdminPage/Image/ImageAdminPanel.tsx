import AddImageModal from './AddImageModal'
import EditImageModal from './EditImageModal'
import ImageTable from './ImageTable'
import { ImageAdminPanelProps } from '../../../types/props/ImageAdminPanelProps'
import { JSX } from 'react'

const ImageAdminPanel = ({
  isAddModalOpen,
  setIsAddModalOpen,
  isEditModalOpen,
  setIsEditModalOpen,
  selectedImage,
  setSelectedImage,
}: ImageAdminPanelProps): JSX.Element => {
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
