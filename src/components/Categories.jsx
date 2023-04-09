import React from 'react'

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(0);

 const onSelectItem = (index) => {
    setActiveItem(index)
  }

  return (
    <div className="categories">
      <ul>

        {items &&
        items.map((name, index) =>
          <li
            className={activeItem === index ? "active" : ''}
            key={`${name}_${index}`}
            onClick={() => onSelectItem(index)}
          >
            {name}
          </li>

        )}
      </ul>
    </div>
  )
}

export default Categories;
// class Categories extends React.Component {

// state = {
//   ativeItem: {}
// }

// onSelectItem = (index) => {
// this.setState({ativeItem: index})
// console.log(this.state)
// }

//   render() {

//     const { items, onClickItem } = this.props;

//     return (
//       <div className="categories">
//         <ul>
//           <li className="active">Все</li>
//           {items.map((name, index) =>

//             <li
//               key={`${name}_${index}`}
//               onClick={() => this.onSelectItem(index)}
//               className={this.state.ativeItem === index ? 'active' : ''}
//             >
//               {name}
//             </li>

//           )}
//         </ul>
//       </div>
//     )
//   }
// }


