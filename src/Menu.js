import React from 'react';

export default class Menu extends React.Component {
    state = {
        menuItems: [
          "Egg Tarts",
          "Chicken Rice",
          "Penang Rojak",
          "Steamed Chicken Noodles"
        ]
    }

    showMenu() {
      let jsx = [];
      for (let item of this.state.menuItems) {
        jsx.push(<li key={item}>{item}</li>)
      }
      return jsx;
    }

    render() {
        return (
            <React.Fragment>
                <h1>Menu </h1>
                {this.showMenu()}
            </React.Fragment>
        );
    }
}