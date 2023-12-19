import { useParams } from "react-router-dom";
import { RestaurantContainer } from "../../components/restaurant/container";

export function RestaurantPage() {
    const { restaurantId } = useParams();
    return <RestaurantContainer restaurantId={restaurantId} />;
}