import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Image, Text, Button } from '@chakra-ui/react';

const ChocolateItem = ({ chocolate, addToOrders }) => {
  return (
    <Box className="chocolate-item" p={4} border="1px" borderColor="gray.200" borderRadius="md">
      <Image src={chocolate.image} alt={chocolate.name} />
      <Text fontSize="xl" fontWeight="bold">{chocolate.name}</Text>
      <Text>{chocolate.price}</Text>
      <Button colorScheme="yellow" mt={4} onClick={() => addToOrders(chocolate)}>Add to Cart</Button>
      <Link to={`/chocolates/${chocolate.id}`}>
        <Button colorScheme="blue" mt={4}>View Details</Button>
      </Link>
    </Box>
  );
};

export default ChocolateItem;
