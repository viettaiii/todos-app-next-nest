"use client";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Kbd,
  Text,
  TextField,
} from "@radix-ui/themes";

export default function Home() {
  return (
    <main>
      <Container size="1" className=" pt-20 ">
        <div className=" bg-indigo-200 py-3 px-2 rounded-xl">
          <Container>
            <Kbd>Todos(5)</Kbd>
          </Container>
          <div className="py-4">
            <TextField.Root>
              <TextField.Input placeholder="Enter toto here" />
              <TextField.Slot className="px-0">
                <Button color="indigo" variant="soft">
                  Submit
                </Button>
              </TextField.Slot>
            </TextField.Root>
          </div>
          <Flex gap="1" direction="column">
            <Box
              height={"8"}
              width={"100%"}
              className=" bg-indigo-300 px-2 flex items-center justify-between rounded-md"
            >
              <div>
                <Text as="label" size="2">
                  <Flex gap="2">
                    <Checkbox defaultChecked /> <Kbd>Walk </Kbd>
                  </Flex>
                </Text>
              </div>
              <div className=" space-x-2">
                <Button color="sky">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Button>
                <Button color="red">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Button>
              </div>
            </Box>
          </Flex>
        </div>
      </Container>
    </main>
  );
}
