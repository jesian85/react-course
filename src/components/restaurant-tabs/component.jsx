import { Tab } from '../tab/component';

export const RestaurantTabs = ({restaurants, onRestaurantSelect}) => {
    return (
        <div>
            { restaurants.map(({ id, name }) => (
                <Tab key={id} onTabClick={() => onRestaurantSelect(name)}>{name}</Tab>
            ))}
        </div>
    );
};