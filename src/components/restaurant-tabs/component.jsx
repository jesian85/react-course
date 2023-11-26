import { Tab } from '../tab/component';

export const RestaurantTabs = ({restaurants, onTabClick}) => {
    return (
        <div>
            { restaurants.map(({ id, name}, index) => (
                <Tab key={id} onTabClick={() => onTabClick(index)}>{name}</Tab>
            ))}
        </div>
    );
};