import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import DistImageComponent from "./DishImageComponent";
import '../styles/DishItemComponent.css';

const TableItemComponent = (props) => {
    let capacity = [];
    for (let i = 0; i < props.item.capacity; i++) {
        capacity.push(<i className="fas fa-user"/>);
    }
    return (
        <div>
            <Card>
                <DistImageComponent
                    imageSrc={"https://cdn.instructables.com/FN7/E8W8/IMS10ISD/FN7E8W8IMS10ISD.LARGE.jpg"}/>
                <CardBody className="dish-card-body">
                    <CardTitle className="dish-title">{props.item.name}</CardTitle>
                    <CardSubtitle className="dish-price">{capacity}</CardSubtitle>
                    <CardText className="dish-description">
                        {props.item.description}
                    </CardText>
                    <Button className="dish-btn">ĐẶT BÀN NÀY</Button>
                </CardBody>
            </Card>
        </div>
    );
};
TableItemComponent.defaultProps = {
    item: {
        name: "",
        capacity: "",
        description: ""
    }
};

export default TableItemComponent;