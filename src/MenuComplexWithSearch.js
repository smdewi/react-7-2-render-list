import React from 'react';

export default class Menu extends React.Component {
    state = {
        searchTerms: "",
        searchIngredients: "",
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
        let filteredResults =[];
        let results = [];
        for (let item of this.state.menuItems) {
            if (this.state.searchTerms === "" || item.name.toLowerCase().includes(this.state.searchTerms.toLowerCase())) {
                jsx.push(
                    <div key={item._id}>
                        <h3>{item.name}</h3>
                        <p>{item.ingredients}</p>
                        <p>{item.price}</p>
                    </div>
                );
                filteredResults.push({
                    "_id": item._id,
                    "name": item.name,
                    "price": item.price,
                    "ingredients": item.ingredients
                });   
            }
        }
    
        console.log("Filtered Result", filteredResults);
        for (let item of filteredResults) {
            if (this.state.searchIngredients === "" || item.ingredients.includes(this.state.searchIngredients)) {
                results.push(
                    <div key={item._id}>
                        <h3>{item.name}</h3>
                        <p>{item.ingredients}</p>
                        <p>{item.price}</p>
                    </div>
                );
            }
        }

        return results;
    }

    render() {
        return (
            <React.Fragment>
                <h1>Menu </h1>

                <div>
                <label>Search for menu </label>
                <input type="text" value={this.state.searchTerms}
                placeholder="Enter your menu search here"
                onChange={(e) => {this.setState({searchTerms: e.target.value})}}/>
                </div>
                
                <div>
                    <label>Search Ingredients</label>
                    <input type="text" value={this.state.searchIngredients}
                    placeholder="Enter ingredients search here"
                    onChange={(e) => {this.setState({searchIngredients: e.target.value})}}/>
                </div>
                
                {this.renderMenuItems()}
            </React.Fragment>
        );
    }
}