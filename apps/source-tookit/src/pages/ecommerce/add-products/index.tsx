import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@crema/components/AppAsyncComponent';

const AddProduct = asyncComponent(
  () => import('../../../modules/ecommerce/Admin/AddEditProduct'),
  {
    ssr: false,
  }
);
export default AppPage(() => <AddProduct />);
