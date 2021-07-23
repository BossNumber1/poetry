import React from "react";
import axios from "axios";

import etcStyles from "../styles/Etc.module.css";

import Loading from "./Loading";

const VerseAddingForm = () => {
    const [showError, setShowError] = React.useState(false);
    const [responseFromServer, setResponseFromServer] = React.useState(false);
    const [nameAuthorState, setNameAuthorState] = React.useState(
        localStorage.getItem("nameAuthor") || ""
    );

    const [showLoader, setShowLoader] = React.useState(false);

    const changeAlias = (e) => {
        setNameAuthorState(e.target.value);
    };

    React.useEffect(() => {
        document.querySelector("form").addEventListener("keydown", (event) => {
            event.stopPropagation();
        });
    }, []);

    const beforeSending = (e) => {
        e.preventDefault();
        setShowLoader(true);
        let formDataStore = [];

        const formData = new FormData(document.querySelector("form"));

        for (let pair of formData.entries()) {
            formDataStore.push(pair[1]);
        }

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
                    setShowLoader(false);
                    setResponseFromServer(res.data);
                    setShowError(false);
                    document.querySelector("form").reset();
                    document.getElementsByName("nameAuthor")[0].value =
                        localStorage.getItem("nameAuthor");
                });
        } else {
            setShowError("Стоит заполнить все поля");
        }
    };

    return (
        <div className={etcStyles.postAddForm} id="postAddFormId">
            {(showError || responseFromServer) && (
                <div
                    className={showError ? "alert-danger" : "alert-success"}
                    style={{
                        marginBottom: 20,
                        borderRadius: 5,
                        paddingLeft: 20,
                        paddingBottom: 5,
                        paddingTop: 5,
                        textAlign: "center",
                        top: "50%",
                        left: "50%",
                    }}
                >
                    {showError || responseFromServer}
                </div>
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
                        value={nameAuthorState}
                        onChange={changeAlias}
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
                    className="btn btn-warning"
                    onClick={beforeSending}
                >
                    {!showLoader ? "Сделать частью истории" : <Loading />}
                </button>
            </form>
        </div>
    );
};

export default VerseAddingForm;
