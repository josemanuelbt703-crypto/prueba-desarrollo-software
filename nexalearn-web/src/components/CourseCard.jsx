function CourseCard({ course }) {
    return (
        <article className="course-card">

            <img
                className="course-card__image"
                src={course.image}
                alt={course.title}
            />

            <div className="course-card__content">

                <span className="course-card__category">
                    {course.category?.name}
                </span>

                <h3 className="course-card__title">
                    {course.title}
                </h3>

                <p className="course-card__description">
                    {course.description}
                </p>

                <strong className="course-card__price">
                    ${course.price}
                </strong>

            </div>

        </article>
    );
}

export default CourseCard;