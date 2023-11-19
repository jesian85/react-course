export function Restaurant({ restaurant }) {
    //console.log(restaurant);
    return (
      <>
        <div>
            RestaurantName: { restaurant.name },
        </div>
        <div>
            Меню:
            <ul>{ restaurant.menu.map((menu) => (<li key={menu.id}>{menu.name}</li>))}</ul>
        </div>
        <div>
            Отзывы:
            <ul>{ restaurant.reviews.map((review) => (<li key={review.id}>{review.text}</li>))}</ul>
        </div>
      </>
    );
}