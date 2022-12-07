import React from 'react';

export default class MallDirectoryComplex extends React.Component {
    state = {
        events: [
            "10% off at Coffee beans",
            "Caroling at Don Don Donki",
            "Free parking vouchers for spending above $100.00"
        ],
        shops: [
            {
            "id": 1,
            "name":"Macdonalds",
            "floor": 1,
            "unit":202,
            "type":"F&B"
            },
            {
            "id":2,
            "name":"Coffee Beans",
            "floor": 2,
            "unit":301,
            "type":"F&B"
            },
            {
            "id": 3,
            "name":"Uniqo",
            "floor": 1,
            "unit":101,
            "type":"Clothing"
            },
            {
            "id": 4,
            "name":"Don Don Donki",
            "floor": 5,
            "unit":103,
            "type":"Supermarket"
            }
            ]
    }

    renderShops() {
        let jsx = [];
        for (let s of this.state.shops) {
            jsx.push(
                <div key={s.id}>
                    <h3>{s.name}</h3>
                    <ul>
                        <li>Floor: {s.floor}</li>
                        <li>Unit: {s.unit}</li>
                        <li>Type: {s.type}</li>
                    </ul>
                </div>
            );
        }
        return jsx;
    }

    render() {
        return (
            <React.Fragment>
                <h1>Mall Directory</h1>
                <h2>Shops</h2>
                <div>
                    {this.renderShops()}
                </div>
            </React.Fragment>
        )
    }
}