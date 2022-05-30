import React, { useEffect } from "react";
import axios from "axios";
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import {Tag,TagLabel,} from '@chakra-ui/react';


const Product = () => {
  // TODO: Remove below const and instead import them from chakra

  useEffect(()=>{
    const getdata = async () =>{
      let data = await axios.get("http://localhost:8080/products");
      console.log(data)
    };
    getdata();
  
  },[]);

  
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category"></Text>
      <Tag>
        <TagLabel data-cy="product-gender"></TagLabel>
      </Tag>
      <Heading data-cy="product-title"></Heading>
      <Box data-cy="product-price"></Box>
    </Stack>
  );
};

export default Product;
