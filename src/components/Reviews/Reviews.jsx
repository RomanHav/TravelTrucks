import { useOutletContext } from "react-router-dom";
import css from "./Reviews.module.css";
import { nanoid } from "nanoid";

export default function Reviews() {
  const data = useOutletContext();

  if (!data) {
    return <div>Loading...</div>;
  }

  const maxStars = 5;

  return (
    <div className={css.container}>
      <ul className={css.mainList}>
        {data.reviews.map((review) => {
          const stars = Array.from({ length: maxStars }, (v, i) => {
            return i < review.reviewer_rating ? "filled" : "empty";
          });

          return (
            <li className={css.mainListPart} key={nanoid()}>
              <div className={css.mainDescr}>
                <div className={css.avatar}>
                  {review.reviewer_name.charAt(0)}
                </div>
                <div className={css.ratingContainer}>
                  <h4 className={css.ratingTitle}>{review.reviewer_name}</h4>
                  <ul className={css.ratingStars}>
                    {stars.map((type, index) => (
                      <li key={index}>
                        {type === "filled" ? (
                          <img src="/rating.svg" alt="Filled Star" width={16} />
                        ) : (
                          <img
                            src="/rating-zero.svg"
                            alt="Empty Star"
                            width={16}
                          />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p>{review.comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
