import { useSelector } from "react-redux";
import { selectReviewById } from "../../store/features/entities/review/selectors";

export const Review = ({ id, className }) => {
    const review = useSelector((state) => selectReviewById(state, id));
    if (!review) {
        return;
    }
    return <div className={className}>{review.text}</div>;
};