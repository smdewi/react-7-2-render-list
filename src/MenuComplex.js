import React from 'react';

export default class Menu extends React.Component {
    state = {
        menuItems: [
            {
                "_id": 101,
                "name":"Chicken Udon Soup",
                "price": 11.99,
                "ingredients":["chicken stock", "udon", "chicken breast"]
                },
                {
                "_id": 203,
                "name":"Salmon Teriyaki Don",
                "price": 9.9,
                "ingredients":["salmon", "rice", "soya sauce"]
                },
                {
                "_id": 401,
                "name":"Raw Salmon Slices",
                "price": 15.99,
                "ingredients":["salmon"]
                },
                {
                "_id": 402,
                "name":"Chicken Miso Ramen",
                "price": 15.99,
                "ingredients":["chicken", "miso", "ramen"]
                }
        ]
    }

    renderMenuItems() {
        let jsx = [];
        for (let item of this.state.menuItems) {
            jsx.push(
                <div key={item._id}>
                    <h3>{item.name}</h3>
                    <p>{item.ingredients}</p>
                    <p>{item.price}</p>
                </div>
            );
        }
        return jsx;
    }

    render() {
        return (
            <React.Fragment>
                <h1>Menu </h1>
                {this.renderMenuItems()}
            </React.Fragment>
        );
    }
}