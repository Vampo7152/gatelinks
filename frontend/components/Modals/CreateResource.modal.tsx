import type { NextComponentType, NextPageContext } from "next";
import { NFTForm } from "..";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Button,
} from "@chakra-ui/react";
import TNKForm from "../Misc/TNKForm.form";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const CreateModal: NextComponentType<NextPageContext, {}, Props> = ({
  isOpen,
  onOpen,
  onClose,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton _focus={{}} color="white" />

          <ModalBody bgColor="gray.800" py="8" px="8">
            <Tabs isFitted variant="enclosed" textColor="gray.100">
              <TabList>
                <Tab
                  _focus={{}}
                  _active={{}}
                  _selected={{ textColor: "gray.200", borderColor: "white" }}
                >
                  NFT
                </Tab>
                <Tab
                  _focus={{}}
                  _active={{}}
                  _selected={{ textColor: "gray.200", borderColor: "white" }}
                >
                  TKN
                </Tab>
              </TabList>
              {/* will change the input boxes later :cheems: depending on the tab */}
              <TabPanels>
                <TabPanel>
                  <Text
                    fontFamily="redHat"
                    textAlign="center"
                    fontSize="xl"
                    textColor="gray.100"
                    fontWeight="600"
                  >
                    Upload w NFT thingy{" "}
                  </Text>

                  <NFTForm />
                </TabPanel>
                <TabPanel>
                  <Text
                    fontFamily="redHat"
                    textAlign="center"
                    fontSize="xl"
                    textColor="gray.100"
                    fontWeight="600"
                  >
                    Upload w TKN thingy{" "}
                  </Text>

                  <TNKForm />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateModal;
