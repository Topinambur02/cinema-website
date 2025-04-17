import { JSX, useContext } from 'react'
import { Context } from '../../../App'
import { StoresType } from '../../../types/StoresType'
import { ImageType } from '../../../types/ImageType'
import ActionButtons from '../ActionButtons'
import ImagesApi from '../../../http/ImagesApi'
import GenericTable from '../GenericTable'
import { ImageTableProps } from '../../../types/props/ImageTableProps'

const ImageTable = ({ setIsAddModalOpen, setIsEditModalOpen, setSelectedImage }: ImageTableProps): JSX.Element => {
  const { imageStore } = useContext(Context) as StoresType
  const images = imageStore.getImages()
  const onEdit = (image: ImageType) => {
    setSelectedImage(image)
    setIsEditModalOpen(true)
  }
  const onDelete = async (image: ImageType) => {
    await ImagesApi.delete(image.id)
    const updatedImages = await ImagesApi.getAll()
    imageStore.setImages(updatedImages)
  }
  const onAdd = () => setIsAddModalOpen(true)

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Название', dataIndex: 'name', key: 'name' },
    { title: 'Размер', dataIndex: 'size', key: 'size' },
    { title: 'URL', dataIndex: 'url', key: 'url' },
    {
      title: 'Действия',
      key: 'actions',
      render: (_: any, record: ImageType) => (
        <ActionButtons<ImageType>
          record={record}
          onEdit={onEdit}
          onDelete={onDelete}
          confirmDeleteMessage="Вы уверены, что хотите удалить фото?"
        />
      ),
    },
  ]

  return (
    <GenericTable
      dataSource={images}
      columns={columns}
      onAdd={onAdd}
      addButtonText="Добавить фото"
    />
  )
}

export default ImageTable
