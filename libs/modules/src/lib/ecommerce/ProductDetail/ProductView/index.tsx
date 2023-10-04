import React from 'react';
import ProductSpecification from './ProductSpecification';
import ProductInfo from './ProductInfo';
import DeliveryInfo from './DeliveryInfo';
import Reviews from './Reviews';
import AvailableOffers from './AvailableOffers';
import { Divider } from 'antd';
import {
  StyledProductView,
  StyledProductViewTitle,
  StyledStrokeSubtitle,
} from './index.styled';
import type { ProductDataType } from '@crema/models/ecommerce/EcommerceApp';

type Props = {
  product: ProductDataType;
};
const ProductView = ({ product }: Props) => {
  return (
    <StyledProductView>
      <StyledProductViewTitle>
        ${product.mrp}
        <span className="line-through">
          ${+product.mrp - +product.discount}
        </span>
      </StyledProductViewTitle>
      <StyledStrokeSubtitle>In stock</StyledStrokeSubtitle>
      <p className="text-secondary mb-0">
        {product.description || 'No description found'}
      </p>
      <Divider style={{ marginTop: 15, marginBottom: 15 }} />
      <AvailableOffers />
      <DeliveryInfo />
      <Divider style={{ marginTop: 15, marginBottom: 15 }} />
      <ProductSpecification productSpec={product.productSpec || []} />
      <Divider style={{ marginTop: 15, marginBottom: 15 }} />
      <ProductInfo productInfo={product.productInfo || []} />
      <Divider style={{ marginTop: 15, marginBottom: 15 }} />
      <Reviews />
    </StyledProductView>
  );
};

export default ProductView;
