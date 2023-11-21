export const Review = ({ review }) => {
    if (!review) {
        return;
    }
    return <div>{review.text}</div>;
};