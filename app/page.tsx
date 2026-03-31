import React from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";

const Home = () => {
  return (
    <Container className="bg-shop-light-pink">
      <h2 className="text-xl font-semibold">Home</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        ratione accusantium. Consequuntur fugiat sed culpa quis quidem quod
        consectetur, ex quos ipsam alias asperiores soluta ducimus eius
        repellat, accusamus quo?
      </p>
      <Button>Check out</Button>
    </Container>
  );
};

export default Home;
