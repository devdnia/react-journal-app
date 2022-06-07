import { NotesAppBar } from "./NotesAppBar"

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">

                <input
                    className="notes__title-input"
                    type="text"
                    placeholder="Some awesome title"
                    autoComplete="off"
                />

                <textarea
                    className="notes__textarea"
                    placeholder="What happend today">
                </textarea>

                <div className="notes__image">
                    <img 
                        src="https://www.worldbank.org/content/dam/photos/780x439/2022/jan-2/deep-blue-sea_shutterstock_1512728810.jpg"
                        alt="image"
                    />
                </div>

            </div>
        </div>
    )
}
