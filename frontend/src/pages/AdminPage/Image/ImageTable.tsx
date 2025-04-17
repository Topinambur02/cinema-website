import { useContext } from "react"
import { Context } from "../../../App"
import { StoresType } from "../../../types/StoresType"
import { ImageType } from "../../../types/ImageType"
import ActionButtons from "../ActionButtons"
import ImagesApi from "../../../http/ImagesApi"
import GenericTable from "../GenericTable"
import { ImageTableProps } from "../../../types/props/ImageTableProps"

const ImageTable = ({
    setIsAddModalOpen,
    setIsEditModalOpen,
    setSelectedImage,
}: ImageTableProps) => {

    const { imageStore } = useContext(Context) as StoresType
    const images = imageStore.getImages()

    const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "Название", dataIndex: "name", key: "name" },
        { title: "Размер", dataIndex: "size", key: "size" },
        { title: "URL", dataIndex: "url", key: "url" },
        {
            title: "Действия",
            key: "actions",
            render: (_: any, record: ImageType) => (
                <ActionButtons<ImageType>
                    record={record}
                    onEdit={(image) => {
                        setSelectedImage(image)
                        setIsEditModalOpen(true)
                    }}
                    onDelete={async (image) => {
                        await ImagesApi.delete(image.id)
                        const updatedImages = await ImagesApi.getAll()
                        imageStore.setImages(updatedImages)
                    }}
                    confirmDeleteMessage="Вы уверены, что хотите удалить фото?"
                />
            ),
        },
    ]

    return (
        <GenericTable 
            dataSource={images}
            columns={columns}
            onAdd={() => setIsAddModalOpen(true)}
            addButtonText="Добавить фото"
        />
    )
}

export default ImageTable