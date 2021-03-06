import React from "react";
import axios from "axios";
import etcStyles from "../styles/Etc.module.css";
import Loading from "./Loading";

const VerseAddingForm = () => {
    const [showError, setShowError] = React.useState("");
    const [showLoader, setShowLoader] = React.useState(false);
    const [responseFromServer, setResponseFromServer] = React.useState(false);
    const [nameAuthorState, setNameAuthorState] = React.useState(
        localStorage.getItem("nameAuthor") || ""
    );
    const [publicLinkState, setPublicLinkState] = React.useState(
        localStorage.getItem("publicLink") || ""
    );

    const changeAlias = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameAuthorState(e.target.value);
    };

    const changeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPublicLinkState(e.target.value);
    };

    React.useEffect(() => {
        document.querySelector("form")!.addEventListener("keydown", (event) => {
            event.stopPropagation();
        });
    }, []);

    const beforeSending = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setShowLoader(true);

        let formDataStore = [];
        const formData: any = new FormData(document.querySelector("form")!);

        for (let pair of formData.entries()) {
            formDataStore.push(pair[1]);
        }

        let nameAuthor = formDataStore[0];
        let avatar = formDataStore[1];
        let verse = formDataStore[2].replace(/\r\n/g, "<br>");
        let illustration = formDataStore[3];
        let publicLink = formDataStore[4];

        if (
            nameAuthor !== "" &&
            avatar.name !== "" &&
            verse !== "" &&
            illustration.name !== "" &&
            publicLink !== ""
        ) {
            localStorage.setItem("nameAuthor", nameAuthor);
            localStorage.setItem("publicLink", publicLink);

            let formData = new FormData();

            formData.append("nameAuthor", nameAuthor);
            formData.append("avatar", avatar);
            formData.append("verse", verse);
            formData.append("illustration", illustration);
            formData.append("publicLink", publicLink);

            axios
                .post("http://localhost:80/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((res) => {
                    setShowLoader(false);
                    window.scrollTo(0, 0);
                    setResponseFromServer(res.data);
                    setShowError("");
                    document.querySelector("form")!.reset();
                });
        } else {
            setShowError("?????????? ?????????????????? ?????? ????????");
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
            <form>
                <div className="mb-3">
                    <label htmlFor="nik" className="form-label">
                        ?????? ???????????????????? ??????????????????
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
                        ?????? ????????????
                    </label>
                    <input
                        type="file"
                        name="avatar"
                        className="form-form-control form-control-sm"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="verse" className="form-label">
                        ????????
                    </label>
                    <textarea name="verse" className="form-control" rows={1} />
                </div>

                <div className="mb-3">
                    <label htmlFor="illustration" className="form-label">
                        ??????????????????????
                    </label>
                    <input
                        type="file"
                        name="illustration"
                        className="form-control form-control-sm"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="publicLink" className="form-label">
                        ???????????? ???? ?????? ????????????
                    </label>
                    <input
                        type="text"
                        name="publicLink"
                        className="form-control"
                        value={publicLinkState}
                        onChange={changeLink}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-warning"
                    onClick={beforeSending}
                >
                    {!showLoader ? "?????????????? ???????????? ??????????????" : <Loading />}
                </button>
            </form>
        </div>
    );
};

export default VerseAddingForm;
