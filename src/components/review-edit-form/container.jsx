import { useGetUsersQuery, useUpdateReviewMutation } from "../../store/services/api";
import { ReviewForm } from "../review-form/component";

export const ReviewEditFormContainer = ({ review, ...props }) => {
    const [updateReview] = useUpdateReviewMutation();
    const { data: user } = useGetUsersQuery(undefined, {
        selectFromResult: (result) => {
            return { ...result, data: result?.data?.find((user) => user.id === review.userId) };
        }
    });
    return <ReviewForm {...props}
        review={{ name: user?.name, text: review.text, rating: review.rating }}
        onSaveClick={({ text, rating }) =>
            updateReview({
                reviewId: review.id,
                review: { userId: user?.id, text, rating }
            })} />;
};