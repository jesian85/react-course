export const Review = ({ review, className }) => {
    if (!review) {
        return;
    }
    return <div className={className}>{review.text}</div>;
};