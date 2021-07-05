// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Basic = () => {
    const [showError, setShowError] = React.useState(false);

    return (
        <div>
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
                            alert(JSON.stringify(values, null, 2));
                        } else {
                            setShowError("Стоит полностью заполнить форму");
                        }

                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <div className="postAddForm">
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
        </div>
    );
};

export default Basic;
