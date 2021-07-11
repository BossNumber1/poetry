import React from "react";
import axios from "axios";

const VerseAddingForm = () => {
    const [showError, setShowError] = React.useState(false);

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
            let nameAuthor = formDataStore[0];
            let avatar = formDataStore[1];
            let verse = formDataStore[2];
            let illustration = formDataStore[3];

            if (
                nameAuthor !== "" &&
                avatar.name !== "" &&
                verse !== "" &&
                illustration.name !== ""
            ) {
                localStorage.setItem("nameAuthor", nameAuthor);
                let formData = new FormData();

                formData.append("nameAuthor", nameAuthor);
                formData.append("avatar", avatar);
                formData.append("verse", verse);
                formData.append("illustration", illustration);

                axios
                    .post("http://localhost:80/api/upload", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    })
                    .then((res) => {
                        alert(res.data);
                        setShowError(false);
                        document.querySelector("form").reset();
                        document.getElementsByName("nameAuthor")[0].value =
                            localStorage.getItem("nameAuthor");
                    });
            } else {
                setShowError(true);
            }
        }
    };

    return (
        <div className="postAddForm" id="postAddFormId">
            {showError && (
                <div style={{ color: "red" }}>{"Стоит заполнить все поля"}</div>
            )}
            <form
                action="http://localhost:80/upload"
                method="post"
                encType="multipart/form-data"
            >
                <div className="mb-3">
                    <label htmlFor="nik" className="form-label">
                        Ваш творческий псевдоним
                    </label>
                    <input
                        type="text"
                        name="nameAuthor"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="avatar" className="form-label">
                        Ваш аватар
                    </label>
                    <input
                        type="file"
                        name="avatar"
                        className="form-form-control form-control-sm"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="verse" className="form-label">
                        Стих
                    </label>
                    <textarea name="verse" className="form-control" rows="1" />
                </div>

                <div className="mb-3">
                    <label htmlFor="illustration" className="form-label">
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
