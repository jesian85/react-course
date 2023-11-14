import React from 'react'
import ReactDOM from 'react-dom/client'
import { restaurants } from './constants/mock.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ul>
    <li>
      <div>
        ReataurantName: { restaurants[0].name },
      </div>
      <div>
        Меню: 
        <ul>
          <li>{restaurants[0].menu[0].name}</li>
          <li>{restaurants[0].menu[1].name}</li>
          <li>{restaurants[0].menu[2].name}</li>
        </ul>
      </div>
      <div>
        Отзывы:
        <ul>
          <li>{restaurants[0].reviews[0].text}</li>
          <li>{restaurants[0].reviews[1].text}</li>
        </ul>
      </div>
    </li>
    <li>
      <div>
        ReataurantName: { restaurants[1].name },
      </div>
      <div>
        Меню: 
        <ul>
          <li>{restaurants[1].menu[0].name}</li>
          <li>{restaurants[1].menu[1].name}</li>
        </ul>
      </div>
      <div>
        Отзывы:
        <ul>
          <li>{restaurants[1].reviews[0].text}</li>
          <li>{restaurants[1].reviews[1].text}</li>
          <li>{restaurants[1].reviews[2].text}</li>
        </ul>
      </div>
    </li>
    <li>
      <div>
        ReataurantName: { restaurants[2].name },
      </div>
      <div>
        Меню: 
        <ul>
          <li>{restaurants[2].menu[0].name}</li>
          <li>{restaurants[2].menu[1].name}</li>
          <li>{restaurants[2].menu[2].name}</li>
        </ul>
      </div>
      <div>
        Отзывы:
        <ul>
          <li>{restaurants[2].reviews[0].text}</li>
        </ul>
      </div>
    </li>
    <li>
      <div>
        ReataurantName: { restaurants[3].name },
      </div>
      <div>
        Меню: 
        <ul>
          <li>{restaurants[3].menu[0].name}</li>
          <li>{restaurants[3].menu[1].name}</li>
        </ul>
      </div>
      <div>
        Отзывы:
        <ul>
          <li>{restaurants[3].reviews[0].text}</li>
          <li>{restaurants[3].reviews[1].text}</li>
        </ul>
      </div>
    </li>
  </ul>
);


// дополнительно (*)

// root.render(
//   React.createElement("ul", {}, 
//     React.createElement("li", {id: restaurants[0].id}, 'ReataurantName: ',
//       React.createElement("b", {}, restaurants[0].name),
//       React.createElement("p", {}, "Меню: ",
//         React.createElement("ul", {},
//           React.createElement("li", {id: restaurants[0].menu[0].id}, restaurants[0].menu[0].name),
//           React.createElement("li", {id: restaurants[0].menu[1].id}, restaurants[0].menu[1].name),
//           React.createElement("li", {id: restaurants[0].menu[2].id}, restaurants[0].menu[2].name),
//         )
//       ),
//       React.createElement("p", {}, "Отзывы: ",
//         React.createElement("ul", {},
//           React.createElement("li", {id: restaurants[0].reviews[0].id}, restaurants[0].reviews[0].text),
//           React.createElement("li", {id: restaurants[0].reviews[1].id}, restaurants[0].reviews[1].text),
//         )
//       ),
//     ),
//     React.createElement("li", {id: restaurants[1].id}, 'ReataurantName: ',
//       React.createElement("b", {}, restaurants[1].name),
//       React.createElement("p", {}, "Меню: ",
//         React.createElement("ul", {},
//           React.createElement("li", {id: restaurants[1].menu[0].id}, restaurants[1].menu[0].name),
//           React.createElement("li", {id: restaurants[1].menu[1].id}, restaurants[1].menu[1].name),
//         )
//       ),
//       React.createElement("p", {}, "Отзывы: ",
//         React.createElement("ul", {},
//           React.createElement("li", {id: restaurants[1].reviews[0].id}, restaurants[1].reviews[0].text),
//           React.createElement("li", {id: restaurants[1].reviews[1].id}, restaurants[1].reviews[1].text),
//           React.createElement("li", {id: restaurants[1].reviews[2].id}, restaurants[1].reviews[2].text),
//         )
//       ),
//     ),
//     React.createElement("li", {id: restaurants[2].id}, 'ReataurantName: ',
//       React.createElement("b", {}, restaurants[2].name),
//       React.createElement("p", {}, "Меню: ",
//         React.createElement("ul", {},
//           React.createElement("li", {id: restaurants[2].menu[0].id}, restaurants[2].menu[0].name),
//           React.createElement("li", {id: restaurants[2].menu[1].id}, restaurants[2].menu[1].name),
//           React.createElement("li", {id: restaurants[2].menu[2].id}, restaurants[2].menu[2].name),
//         )
//       ),
//       React.createElement("p", {}, "Отзывы: ",
//         React.createElement("ul", {},
//           React.createElement("li", {id: restaurants[2].reviews[0].id}, restaurants[2].reviews[0].text),
//         )
//       ),
//     ),
//     React.createElement("li", {id: restaurants[3].id}, 'ReataurantName: ',
//       React.createElement("b", {}, restaurants[3].name),
//       React.createElement("p", {}, "Меню: ",
//         React.createElement("ul", {},
//           React.createElement("li", {id: restaurants[3].menu[0].id}, restaurants[3].menu[0].name),
//           React.createElement("li", {id: restaurants[3].menu[1].id}, restaurants[3].menu[1].name),
//         )
//       ),
//       React.createElement("p", {}, "Отзывы: ",
//         React.createElement("ul", {},
//           React.createElement("li", {id: restaurants[3].reviews[0].id}, restaurants[3].reviews[0].text),
//           React.createElement("li", {id: restaurants[3].reviews[1].id}, restaurants[3].reviews[1].text),
//         )
//       ),
//     ),
//   )
// );