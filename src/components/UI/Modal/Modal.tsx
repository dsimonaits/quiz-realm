import {
  BoxProps,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ScaleFade,
  UseDisclosureReturn,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  modalTitle: string;
  disclosure: UseDisclosureReturn;
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
          <ScaleFade
            in={true}
            style={{ position: "relative" }}
            transition={{ exit: { delay: 1 }, enter: { duration: 0.5 } }}
          >
            <ModalBody {...styles}>{children}</ModalBody>
          </ScaleFade>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default QuizModal;
