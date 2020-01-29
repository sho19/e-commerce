import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({id,name,imageUrl,price}) => (
  <div className="collection-item">
      <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
      <div className="collection-footer">
          <span className="name">{name.toUpperCase()}</span>
          <span className="price">{price}0₹</span>
      </div>
  </div>
);

export default CollectionItem;