import React from "react";
import axios from "axios";

const VerseAddingForm = () => {
    React.useEffect(() => {
        document.querySelector("form").addEventListener("keydown", (event) => {
            event.stopPropagation();
        });
    }, []);

    const beforeSending = (e) => {
        e.preventDefault();

        let formDataStore = [];

        const formData = new FormData(document.querySelector("form"));

        for (let pair of formData.entries()) {
            formDataStore.push(pair[1]);
        }

        if (formDataStore.length > 0) {
            let formData = new FormData();

            formData.append("nameAuthor", formDataStore[0]);
            formData.append("avatar", formDataStore[1]);
            formData.append("verse", formDataStore[2]);
            formData.append("illustration", formDataStore[3]);

            axios
                .post("http://localhost:80/api/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((res) => alert(res.data));
        }
    };

    return (
        <div className="postAddForm" id="postAddFormId">
            <form
                action="http://localhost:80/upload"
                method="post"
                encType="multipart/form-data"
            >
                <div className="mb-3">
                    <label for="nik" className="form-label">
                        Ваш творческий псевдоним
                    </label>
                    <input
                        type="text"
                        name="nameAuthor"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label for="avatar" className="form-label">
                        Ваш аватар
                    </label>
                    <input
                        type="file"
                        name="avatar"
                        className="form-form-control form-control-sm"
                    />
                </div>

                <div className="mb-3">
                    <label for="verse" className="form-label">
                        Стих
                    </label>
                    <textarea name="verse" className="form-control" rows="1" />
                </div>

                <div className="mb-3">
                    <label for="illustration" className="form-label">
                        Иллюстрация
                    </label>
                    <input
                        type="file"
                        name="illustration"
                        className="form-control form-control-sm"
                    />
                </div>

                <button
                    type="submit"
                    // disabled={isSubmitting}
                    className="btn btn-warning"
                    onClick={beforeSending}
                >
                    Сделать частью истории
                </button>
            </form>
        </div>
    );
};

export default VerseAddingForm;
