import React from "react";
import { Formik, Form, Field } from "formik";
// import axios from "axios";

import { useHttpPost } from "./useHttp.hook";

const VerseAddingForm = () => {
    const [showError, setShowError] = React.useState(false);

    const { requestPost } = useHttpPost();

    React.useEffect(() => {
        document.querySelector("form").addEventListener("keydown", (event) => {
            event.stopPropagation();
        });
    }, []);

    return (
        <Formik
            initialValues={{
                nameAuthor: "",
                avatar: "",
                verse: "",
                illustration: "",
            }}
            validate={(values) => {
                if (
                    !values.nameAuthor ||
                    !values.avatar ||
                    !values.verse ||
                    !values.illustration
                ) {
                    setShowError(false);
                }
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    if (
                        values.nameAuthor !== "" &&
                        values.avatar !== "" &&
                        values.verse !== "" &&
                        values.illustration !== ""
                    ) {
                        // alert(JSON.stringify(values, null, 2));

                        // axios
                        //     .get(`http://localhost:80/api/createPost/`)
                        //     .then((response) => {
                        //         alert(response);
                        //         // setAllo(response.data);
                        //     });

                        requestPost(`http://localhost:80/api/createPost/`, {
                            nameAuthor: values.nameAuthor,
                            avatar: values.avatar,
                            verse: values.verse,
                            illustration: values.illustration,
                        }).then((response) => {
                            alert(response);
                            // showSuccess(true);
                            // localStorage.setItem("login", formData.login);
                            // localStorage.setItem("pass", formData.password);
                            // dispatch(logOffDouble(false));
                            // const { pathname } = Router;
                            // if (pathname == "/access") {
                            //     Router.push("/booksAll");
                            // }
                        });
                    } else {
                        setShowError("Стоит полностью заполнить форму");
                    }

                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <div className="postAddForm" id="postAddFormId">
                    {showError && (
                        <div style={{ color: "red" }}>{showError}</div>
                    )}
                    <Form>
                        <fieldset>
                            <div className="mb-3">
                                <label for="nik" className="form-label">
                                    Ваш творческий псевдоним
                                </label>

                                <Field
                                    type="text"
                                    name="nameAuthor"
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <label for="avatar" className="form-label">
                                    Ваш аватар
                                </label>
                                <Field
                                    type="file"
                                    name="avatar"
                                    className="form-form-control form-control-sm"
                                />
                            </div>

                            <div className="mb-3">
                                <label for="verse" className="form-label">
                                    Стих
                                </label>

                                <Field
                                    name="verse"
                                    as="textarea"
                                    className="form-control"
                                    rows="1"
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    for="illustration"
                                    className="form-label"
                                >
                                    Иллюстрация
                                </label>
                                <Field
                                    type="file"
                                    name="illustration"
                                    className="form-control form-control-sm"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-warning"
                            >
                                Сделать частью истории
                            </button>
                        </fieldset>
                    </Form>
                </div>
            )}
        </Formik>
    );
};

export default VerseAddingForm;
