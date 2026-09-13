function CourseDetailsModal({
    course,
    onClose
}) {

    if (!course) {
        return null;
    }


    return (
        <div
            className="modal-overlay"
            onClick={onClose}
        >

            <div
                className="course-modal"
                onClick={(event) =>
                    event.stopPropagation()
                }
            >

                <button
                    type="button"
                    className="course-modal__close"
                    onClick={onClose}
                >
                    ×
                </button>


                {course.image && (

                    <img
                        src={course.image}
                        alt={course.title}
                        className=
                            "course-modal__image"
                    />

                )}


                <div
                    className=
                        "course-modal__content"
                >

                    <span
                        className=
                            "course-modal__category"
                    >
                        {course.category?.name}
                    </span>


                    <h2>
                        {course.title}
                    </h2>


                    <p>
                        {course.description}
                    </p>


                    <strong>
                        ${course.price}
                    </strong>

                </div>

            </div>

        </div>
    );
}

export default CourseDetailsModal;