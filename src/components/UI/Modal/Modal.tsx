import {
  BoxProps,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalContentProps,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  modalTitle: string;
  disclosure: any;
  styles?: BoxProps;
}

const QuizModal: FC<ModalProps> = ({
  children,
  modalTitle,
  disclosure,
  styles,
}) => {
  return (
    <>
      <Modal
        isOpen={disclosure.isOpen}
        onClose={disclosure.onClose}
        size={["lg", "lg", "2xl"]}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody {...styles}>{children}</ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default QuizModal;
