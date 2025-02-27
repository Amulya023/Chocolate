import React from 'react';
import { useDispatch } from 'react-redux';
import { addToOrders } from './ordersSlice';
import './Home.css'; 
import ChocolateList from './ChocolateList';
import ContactDetails from './Contact';
const chocolates = [
    { id: 1, name: "Dark Chocolate", price: "Rs.500", image: "https://img.freepik.com/free-vector/announcement-delicious-chocolate-with-almonds_52683-4298.jpg?t=st=1739595672~exp=1739599272~hmac=8d637275597d5ec955888b7e087c8a4a3bbf948a20c1a8220176a4bbb516a8be&w=740" },
    { id: 2, name: "Milk Chocolate", price: "Rs.300", image: "https://img.freepik.com/free-vector/chocolate-splash_23-2147665792.jpg?t=st=1739595810~exp=1739599410~hmac=d6e7151b383c183a6805e2ed8748b8604f7cb954b8d487a21baff53c7224f322&w=740" },
    { id: 3, name: "White Chocolate", price: "Rs.400", image: "https://img.freepik.com/free-photo/white-chocolate-splash_23-2151939223.jpg?t=st=1739601659~exp=1739605259~hmac=ac305fd2adb80836b6825c5459e54021acd4be08e99a5d2ec0127275febf635d&w=360" },
    { id: 4, name: "Hazelnut Chocolate", price: "Rs.1000", image: "https://img.freepik.com/free-photo/pile-chocolate-bars_23-2148180777.jpg?t=st=1739601736~exp=1739605336~hmac=4e692981cd0c4e9556f08f2f19c148557f5c80973e39ae0c3a1ade48e24a091c&w=740" },
    { id: 5, name: "Caramelized Chocolate", price: "Rs.300", image: "https://img.freepik.com/free-photo/delicious-marzipan-still-life_52683-97011.jpg?t=st=1739601817~exp=1739605417~hmac=d533fad803e343fe8e379d3094d7f66fd6aedb9f31c97801417efe805f4acc8b&w=740" },
    { id: 6, name: "Mint Chocolate", price: "Rs.800", image: "https://img.freepik.com/free-photo/close-up-delicious-chocolate-bar-with-mint_23-2150660937.jpg?t=st=1739602276~exp=1739605876~hmac=f09295dc06e061fde3a8ebc6760a557b25b3cb8fa21b7c2ad2b6d5b6edc5eb87&w=360" },
    { id: 7, name: "Chocolate Truffles", price: "Rs.1200", image: "https://img.freepik.com/free-photo/top-view-tasty-chocolate-truffles-ready-be-served_23-2148622320.jpg?t=st=1739602360~exp=1739605960~hmac=a38a0c31d17849639acab9cb734d9b6502477f99da00a011680ff493cc95474c&w=360" },
    { id: 8, name: "Chocolate with Almonds", price: "Rs.250", image: "https://img.freepik.com/free-photo/almonds-proteins-bar-isolated-white-background_23-2147906632.jpg?t=st=1739602478~exp=1739606078~hmac=63e69eb4eb1508b9d1e909e937b5674c6964029c4b31ea8aad9b1af48e471c12&w=740" },
    { id: 9, name: "Roasted Almonds $ cashewnuts Chocolate", price: "Rs.400", image:  "//img.freepik.com/free-photo/bee-pollens-dry-fruit-granola-bars-black-marble-texture-background_23-2147918957.jpg?t=st=1739948746~exp=1739952346~hmac=63a03a1e5b48493eac2882c1c37d7255c08d63285395f7a358a2d6c2cdbff2c8&w=740" },
    { id: 10, name: " Rosted cashewnuts Chocolate", price: "Rs.300", image: "https://img.freepik.com/free-photo/chocolate-covered-cookies-with-hazelnut-white-background_23-2148180814.jpg?t=st=1739949536~exp=1739953136~hmac=fce5f12358cf6d77a6dce5d1d679ef91671d2112ff612007f81492c406367257&w=740" },
    { id: 11, name: "Peanuts Caramelized Chocolate", price: "Rs.250", image: "https://media.istockphoto.com/id/533476757/photo/peanut-caramel-and-nougat-candy-bar.jpg?s=1024x1024&w=is&k=20&c=4Hf239VOm71kAjuZK3re4HEFA6ECw39DnzjbPgrIVlE=" }
  ];

  const Home = () => {
    const dispatch = useDispatch();
  
    const handleAddToOrders = (chocolate) => {
      console.log('Adding to orders:', chocolate);
      dispatch(addToOrders(chocolate));
    };
  
    return (
      <div className="home-container">
        <h2>Our Chocolates</h2>
        <ChocolateList chocolates={chocolates} addToOrders={handleAddToOrders} />
        <ContactDetails />
      </div>
    );
  };
  
  export default Home;