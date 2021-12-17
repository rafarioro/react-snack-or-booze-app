import React, {useContext} from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import MenuContext from "./MenuContext";
//import useContext

function Home() {

  const { snacks, drinks } = useContext(MenuContext);


  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to the premier dive cafe!
            </h3>
            
          </CardTitle>

          <p>Choose from </p><br /> 
          <p>{snacks.length} snacks </p>
          <p>{drinks.length} drinks</p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
