import React, { Component } from "react";

import SHOP_DATA from "./shop.data";
import CollectionsPreview from "../../components/collections-preview/collections-preview.component";

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <CollectionsPreview key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
