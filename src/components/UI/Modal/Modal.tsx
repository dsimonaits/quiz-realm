import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import QuizButton from "../Button/Button";

interface ModalProps {
  children: ReactNode;
  modalTitle: string;
  buttonName: string;
  disclosure: any;
  styles?: String;
}

const QuizModal: FC<ModalProps> = ({
  children,
  modalTitle,
  buttonName,
  disclosure,
}) => {
  return (
    <>
      <QuizButton onClickHandler={disclosure.onOpen}>{buttonName}</QuizButton>

      <Modal isOpen={disclosure.isOpen} onClose={disclosure.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default QuizModal;
