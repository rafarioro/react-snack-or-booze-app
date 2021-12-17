import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ items, cantFind }) {
  const { id } = useParams();


  //using the variable "thing" to describe what will be either snacks or drinks
  let thing = items.find(ele => ele.id === id);
  if (!thing) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {thing.name}
          </CardTitle>
          <CardText className="font-italic">{thing.description}</CardText>
          <p>
            <b>Recipe:</b> {thing.recipe}
          </p>
          <p>
            <b>Serve:</b> {thing.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
