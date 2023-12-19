import { useNavigate } from 'react-router-dom';
import { Tab } from './component';

export const TabContainer = ({ restaurant, ...props }) => {
    const navigate = useNavigate();
    return <Tab onTabClick={() => navigate(`${restaurant.id}`)} {...props}>{restaurant.name}</Tab>;
};