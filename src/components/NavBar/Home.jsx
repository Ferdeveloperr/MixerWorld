
import React from 'react';
import { Box, Heading, Text, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import "../styles/Home.css"
import { doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, snapshotEqual } from "firebase/firestore"
import { useParams } from 'react-router-dom';


const Home = () => {



  const [productos, setProductos] = useState([])


  useEffect(() => {

    const db = getFirestore()



    const itemsCollection = collection(db, "Parlantes")

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setProductos(docs);

    })



  }, [])


  return (
    <div className='product-container'>
      <Box p={4} textAlign='center'>
        <Heading as="h1" size="xl" mb={4}>
          Bienvenidos a mi e-commerce
        </Heading>
        {productos.map((p) => (
          <Box key={p.id} borderWidth="1px" borderRadius="lg" overflow="hidden" mb={2}>
            <Image src={p.imagen} alt={p.nombre} style={{ width: '30%', height: 'auto', margin: 'auto' }} />
            <Box p="6">
              <Heading as="h2" size="md" mb={2}>
                {p.nombre}
              </Heading>
              {/* <Text mb={2}>{p.descripcion}</Text> */}
              <Text fontSize="lg" fontWeight="bold" mb={2}>

              </Text>
              <Link to={`/item/${p.id}`}>
                <Button colorScheme="blue" width="100%">
                  Ver detalles
                </Button>
              </Link>
            </Box>
          </Box>
        ))}
      </Box>


    </div>
  );
};

export default Home;