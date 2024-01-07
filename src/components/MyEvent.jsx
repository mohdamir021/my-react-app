import { Box, Spacer, Text, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function MyEvent() {
  // Variables
  let counter1 = 0; // regular var
  const [counter2, setCounter2] = useState(0); // state var
  const [counter3, setCounter3] = useState(0); // state var
  const [counter4, setCounter4] = useState(0); // state var
  const [counter5, setCounter5] = useState(0); // state var

  // Functions
  const addCounter1 = () => {
    counter1 = counter1 + 1; // regular update var
  };
  const addCounter2 = () => {
    setCounter2(counter2 + 1);
  };
  const addCounter3 = () => {
    setCounter3(counter3 + 1);
  };
  // useEffect with dependencies
  useEffect(() => {
    setCounter4(counter4 + 1);
  }, [counter3]);

  // useEffect with no dependencies
  useEffect(() => {
    setCounter5(counter5 + 1);
  }, []);

  return (
    <Box width={"100%"} justifyContent={"start"}>
      <Button
        onClick={() => {
          counter1 = 10;
          setCounter2(0);
          setCounter3(0);
          setCounter4(0);
          setCounter5(0);
        }}
      >
        Reset
      </Button>
      <Spacer />
      <Button onClick={addCounter1}>Add Counter 1</Button>
      <Spacer />
      <Button onClick={addCounter2}>Add Counter 2</Button>
      <Spacer />
      <Button onClick={addCounter3}>Add Counter 3</Button>
      <Spacer h={"20px"} />
      <Text>Counter 1: {counter1}</Text>
      <Text>Counter 2: {counter2}</Text>
      <Text>Counter 3: {counter3}</Text>
      <Text>Counter 4: {counter4}</Text>
      <Text>Counter 5: {counter5}</Text>
      <Spacer h={"20px"} />

      {/* The use of state variables */}
      {counter4 > 5 && <Text>Counter 4 has reached more than 5</Text>}
      {counter2 === counter3 ? (
        <Text>Counter 2 is now equal to Counter 3</Text>
      ) : (
        <Text> c2 != c3 </Text>
      )}
    </Box>
  );
}
