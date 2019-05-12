import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import DistImageComponent from "./DishImageComponent";
import '../styles/DishItemComponent.css';

const DishItemComponent = (props) => {
    return (
        <div>
            <Card>
                <DistImageComponent badge={props.item.status}/>
                <CardBody className="dish-card-body">
                    <CardTitle className="dish-title">{props.item.name}</CardTitle>
                    <CardSubtitle className="dish-price">{props.item.price}</CardSubtitle>
                    <CardText className="dish-description">
                        {props.item.description}
                    </CardText>
                    <Button className="dish-btn">Button</Button>
                </CardBody>
            </Card>
        </div>
    );
};
DishItemComponent.defaultProps = {
    item: {
        status: "",
        name: "",
        capacity: "",
        description: ""
    }
};

export default DishItemComponent;