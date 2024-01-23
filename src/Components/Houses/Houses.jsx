import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const Houses = () => {
  const [allHouse, setAllHouse] = useState([]);

  useEffect(() => {
    fetch('public/data.json')
      .then((res) => res.json())
      .then((data) => setAllHouse(data));
  }, []);

  return (
    <div id="houses" className="pb-12">
      <h1 className="text-center py-12 lg:py-20 text-2xl lg:text-5xl font-bold">
        Featured Courses
      </h1>

      <div className="container mx-auto">
        <div className="home-container gap-5">
          <div className="card-container place-items-center grid grid-cols-1 lg:grid-cols-3 gap-4">
            {allHouse.map((house) => (
              <Card key={house.id} maxW="sm">
                <CardBody>
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Living room Sofa</Heading>
                    <Text>
                      This sofa is perfect for modern tropical spaces, baroque
                      inspired spaces, earthy toned spaces and for people who
                      love a chic design with a sprinkle of vintage design.
                    </Text>
                    <Text color="blue.600" fontSize="2xl">
                      $450
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Buy now
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Houses;
