import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import FoodItem from "./FoodItem";
import MenuContext from "./MenuContext";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [snacks, setSnacks] = useState([]);
  // adding drinks state
  const [drinks, setDrinks] = useState([]);

  //set the state for determining which Nav link was clicked
  const [clickedItem, setClickedItem] = useState(null)

  //create a function to set the clicked item with whatever was clicked 
  const getClicked = (item) => {
    setClickedItem(item)
    console.log(` hello from getClciked ${clickedItem}`)

  }

  useEffect(() => {
    async function getInfo() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks); //added setDrinks here
      setIsLoading(false);
    }
    getInfo();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
      
        <MenuContext.Provider value={ { snacks, drinks, clickedItem, getClicked } }>
            <NavBar />
            <main>
              <Switch>
                <Route exact path="/">
                  <Home snacks={snacks} />
                </Route>
                <Route exact path="/snacks">
                  <Menu snacks={snacks} title="Snacks" />
                </Route>

                {/* adding route for Drinks */}
                {
                /* How is react goin to know where I want to go? 
                I can use state and set that to the page I want to go to 
                In this case, if I click on Drinks, setPageChoice will 
                be set to drinks and that will be the value passed on to FoodMenu.js
                I need to add a funciton to handle this and 
                use context to pass the info down
                */
                }
                <Route exact path="/drinks">
                  <Menu drinks={drinks} title="Drinks"/>
                </Route>

                <Route path="/snacks/:id">
                  <FoodItem items={snacks} cantFind="/snacks" />
                </Route>

                <Route path="/drinks/:id">
                  <FoodItem items={drinks} cantFind="/drinks" />
                </Route>

                <Route>
                  <p>Hmmm. I can't seem to find what you want.</p>
                </Route>
              </Switch>
            </main>
        </MenuContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
