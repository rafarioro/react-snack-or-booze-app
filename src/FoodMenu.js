import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import MenuContext from "./MenuContext";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ snacks, drinks }) {

  const { clickedItem, getClicked } = useContext(MenuContext)


  //this could be replaced with using state, but I did this to do a quick test
  let item;

  //here the whole array of either snacks or drinks gets set to a variable
  //depending on what the clickedItem state is.
  //the item gets used as the "generic" term to know what to display
  //as state, this could be replaced with useState
  if(clickedItem === "snacks"){
    item = snacks
  }
  if(clickedItem === "drinks"){
    item = drinks
  }

  

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {item.map(ele => (
              <Link to={`/${clickedItem}/${ele.id}`} key={ele.id}>
                <ListGroupItem>{ele.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
