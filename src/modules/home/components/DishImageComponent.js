import React from 'react';
import '../styles/DishImageComponent.css';
import {Badge, CardImg} from "reactstrap";

const DistImageComponent = (props) => {
    const Status = () => {
      switch (props.badge) {
          case "NEW":
              return <Badge color="primary" className="badge-left-top">Mới</Badge>
          case "SALE":
              return <Badge color="success" className="badge-left-top">Giảm giá</Badge>
          case "HOT":
              return <Badge color="danger" className="badge-left-top">HOT</Badge>
          default:
              return "";
      }
    };
    return (
        <>
            <CardImg top width="100%"
                     src={props.imageSrc}
                     alt="Card image cap"/>
            <Status/>
        </>
    )
};
DistImageComponent.defaultProps = {
    badge: "",
    imageSrc: "https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cms/spanish-food-gambos-al-ajillo-1515494320-1000X561.jpg"
};
export default DistImageComponent