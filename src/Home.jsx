
import React from 'react';
import { Box, Heading, Text, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import "./Home.css"


const Home = () => {

  const productos = [
    { id: 1, titulo: "Controladora Pioneer DDJ 400", descripcion: "Controlador DJ de 2 canales para rekordbox", precio: 1000, category: "A", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgRE0LOWWQA6-fpkX4D1SSoQA8PzGVOXNQukWUBgJZGFui4FQbOOEs2BUtLNodPxqk7U&usqp=CAU" },
    { id: 2, titulo: "Controladora Pioneer DDJ 1000", descripcion: "Controlador DJ de 4 canales profesional para rekordbox", precio: 1500, category: "A", img: "https://store.audioplanet.com.ar/wp-content/uploads/2021/07/ddj-1000-angle-scaled.jpg" },
    { id: 3, titulo: "Auriculares Pioneer cue HDJ", descripcion: "Auriculares profesionales para cabina DJ", precio: 2000, category: "B", img: "https://www.heavenimagenes.com/heavencommerce/36552d98-557c-43dd-ad26-2c9343813a85/images/v2/PIONEER/2102240923529231_01_medium.jpg" },
    { id: 4, titulo: "Auriculares AudioTechnica M50X", descripcion: "Auriculares semi profesionales para cabina DJ", precio: 3000, category: "B", img: "https://http2.mlstatic.com/D_NQ_NP_741636-MLA68837050008_042023-O.webp" },
    { id: 5, titulo: "Parlante Rokit KRK 5", descripcion: "Parlante con kevlar y potencia de 90wts", precio: 4000, category: "C", img: "https://bairesrocks.vteximg.com.br/arquivos/ids/202307/992877-MLA32737209106_112019-F.jpg?v=637313062047930000" },
    { id: 6, titulo: "Parlante Rokit KRK 10", descripcion: "Parlante con kevlar y doble salida de audio con potencia de 200wts", precio: 5000, category: "C", img: "https://m.media-amazon.com/images/I/91AS8GdtEQL.jpg" }
  ]

  return (
    <div className='product-container'>
      <Box p={4} textAlign='center'>
        <Heading as="h1" size="xl" mb={4}>
          Bienvenidos a mi e-commerce
        </Heading>
        {productos.map(producto => (
          <Box key={producto.id} borderWidth="1px" borderRadius="lg" overflow="hidden" mb={2}>
            <Image src={producto.img} alt={producto.titulo} style={{ width: '30%', height: 'auto', margin: 'auto' }} />
            <Box p="6">
              <Heading as="h2" size="md" mb={2}>
                {producto.titulo}
              </Heading>
              <Text mb={2}>{producto.descripcion}</Text>
              <Text fontSize="lg" fontWeight="bold" mb={2}>

              </Text>
              <Link to={`/item/${producto.id}`}>
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