import React from "react";
import AddProduct from '../components/AddProduct.jsx';
import Product from '../components/Product';
import Pagination from '../components/Pagination';
import axios from "axios";
import { useEffect } from "react";
import { Flex, Spacer } from '@chakra-ui/react'
// import { Flex } from "@chakra-ui/react";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  const Grid = () => <div />;

  return (
    <Flex>
     <AddProduct/>
      <Grid>
        <Product/>{/* List of Products */}</Grid>
      {/* Pagination */}
      <Pagination/>
    </Flex>
  );
};

export default Products;
