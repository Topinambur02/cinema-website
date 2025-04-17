import { useContext } from "react";
import { MovieTableProps } from "../../../types/props/MovieTableProps"
import { Context } from "../../../App";
import { StoresType } from "../../../types/StoresType";
import GenericTable from "../GenericTable";
import { MovieType } from "../../../types/MovieType";
import { observer } from "mobx-react-lite";
import ActionButtons from "../ActionButtons";
import MoviesApi from "../../../http/MoviesApi";

const MovieTable = ({
    setIsAddModalOpen,
    setIsEditModalOpen,
    setSelectedMovie,
}: MovieTableProps) => {

    const { movieStore } = useContext(Context) as StoresType
    const movies = movieStore.getMovies()

    const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "Название", dataIndex: "name", key: "name" },
        { title: "Описание", dataIndex: "description", key: "description" },
        { title: "ImageID", dataIndex: "imageID", key: "imageID" },
        { title: "Возрастное ограничение", dataIndex: "ageLimit", key: "ageLimit" },
        { title: "Жанры", dataIndex: "genres_ids", key: "genres_ids" },
        {
            title: "Действия",
            key: "actions",
            render: (_: any, record: MovieType) => (
                <ActionButtons<MovieType>
                    record={record}
                    onEdit={(movie) => {
                        setSelectedMovie(movie)
                        setIsEditModalOpen(true)
                    }}
                    onDelete={async (movie) => {
                        await MoviesApi.delete(movie.id)
                        const updatedMovies = await MoviesApi.getAll()
                        movieStore.setMovies(updatedMovies)
                    }}
                    confirmDeleteMessage="Вы уверены, что хотите удалить фильм?"
                />
            ),
        },
    ]

    return (
        <GenericTable
            dataSource={movies}
            columns={columns}
            onAdd={() => setIsAddModalOpen(true)}
            addButtonText="Добавить фильм"
        />
    )
}

export default observer(MovieTable)