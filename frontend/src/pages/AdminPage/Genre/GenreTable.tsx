import { useContext } from "react"
import { Context } from "../../../App"
import { GenreType } from "../../../types/GenreType"
import { StoresType } from "../../../types/StoresType"
import ActionButtons from "../ActionButtons"
import GenresApi from "../../../http/GenresApi"
import GenericTable from "../GenericTable"
import { GenreTableProps } from "../../../types/props/GenreTableProps"

const GenreTable = ({
    setIsAddModalOpen,
    setIsEditModalOpen,
    setSelectedGenre,
}: GenreTableProps) => {

    const { genreStore } = useContext(Context) as StoresType
    const genres = genreStore.getGenres()

    const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "Название", dataIndex: "name", key: "name" },
        {
            title: "Действия",
            key: "actions",
            render: (_: any, record: GenreType) => (
                <ActionButtons<GenreType>
                    record={record}
                    onEdit={(genre) => {
                        setSelectedGenre(genre)
                        setIsEditModalOpen(true)
                    }}
                    onDelete={async (genre) => {
                        await GenresApi.delete(genre.id)
                        const updatedGenres = await GenresApi.getAll()
                        genreStore.setGenres(updatedGenres)
                    }}
                    confirmDeleteMessage="Вы уверены, что хотите удалить жанр?"
                />
            ),
        },
    ]

    return (
        <GenericTable
            dataSource={genres}
            columns={columns}
            onAdd={() => setIsAddModalOpen(true)}
            addButtonText="Добавить жанр"
        />
    )
}

export default GenreTable