import React from 'react';
import { Box, Text, Image, Button } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectChocolates } from './chocolateSlice';


const chocolates = [
  { id: 1, name: 'Dark Chocolate', description: 'Rich and bitter dark chocolate.', imageUrl: '/image/dark-chocolate.jpg' },
  { id: 2, name: 'Milk Chocolate', description: 'Smooth and sweet milk chocolate.', imageUrl: '/images/milk-chocolate.jpg' },
  { id: 3, name: 'White Chocolate', description: 'Creamy and sweet white chocolate.', imageUrl: '/images/white-chocolate.jpg' },
  { id: 4, name: "Hazelnut Chocolate", description:'combination of hazelnut and chocolate.', imageUrl: '/images/hazelnut-chocolate.jpg' },
  { id: 5, name: "Caramelized Chocolate", description: 'Caramelized white chocolate.', imageUrl: "/images/caramel-chocolate.jpg" },
  { id: 6, name: "Mint Chocolate", description: 'Smooth melting mint filling with chocolate.', imageUrl: "/images/mint-chocolate.jpg" },
  { id: 7, name: "Chocolate Truffles", description: 'Chocolate coded with coconut.', imageUrl: "/images/chocolate-truffles.jpg" },
  { id: 8, name: "Chocolate with Almonds", description: 'Cadbury Darkmilk roasted almonds.', imageUrl: "/images/chocolate-with-almonds.jpg" },
  { id: 9, name: "Roasted Almonds $ Cashewnuts Chocolate", description: 'Roasted  Almonds and Cashewnuts are cotted with Chocolate.', imageUrl: "/images/chocolate-with-almonds and cashewnuts.jpg" },
  { id: 10, name: "Chocolate with Cashewnuts", description: 'Cadbury Darkmilk roasted Cashewnuts.', imageUrl: "/images/Rosted Cashewnuts-Chocolate.jpg" },
  { id: 11, name: "Peanuts Caramelized Chocolate", description: 'Peanuts are cotted with Chocolate.', imageUrl: "/images/chocolate-with-Peanuts.jpg" }  
];

const ChocolateDetails = () => {
  const { id } = useParams(); 
  const chocolates = useSelector(selectChocolates);
  const chocolate = chocolates.find((choco) => choco.id === parseInt(id));
  
  if (!chocolate) {
    return <Text>Chocolate not found</Text>;
  }


  return (
    <Box p={4}>
      <Image src={chocolate.imageUrl} alt={chocolate.name} />
      <Text fontSize="3xl" fontWeight="bold">{chocolate.name}</Text>
      <Text mt={2}>{chocolate.description}</Text>
      <Button colorScheme="yellow" mt={4}>Buy Now</Button>
    </Box>
  );
};

export default ChocolateDetails;
