import { useCreateReviewMutation, useGetUsersQuery } from "../../store/services/api";
import { ReviewForm } from "./component";

export const ReviewFormContainer = ({ restaurantId, ...props }) => {
    const [createReview] = useCreateReviewMutation();
    const { data: user } = useGetUsersQuery(undefined, {
        selectFromResult: (result) => {
            return { ...result, data: result?.data?.find((user) => user) };
        }
    });
    return <ReviewForm {...props} 
        onSaveClick={({ text, rating }) => createReview({
            restaurantId,
            newReview: { userId: user?.id, text, rating }
        })} />;
};