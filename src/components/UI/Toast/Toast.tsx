import { ToastId, ToastPosition, UseToastOptions } from "@chakra-ui/react";
import { FC } from "react";

interface IToast {
  title: string;
  position: ToastPosition;
  status?: "info" | "warning" | "success" | "error" | "loading" | undefined;
  toast: (options: UseToastOptions) => ToastId | undefined;
}

const Toast: FC<IToast> = ({ toast, title, position, status = "info" }) => {
  return toast({
    title: title,
    position: position,
    status,
    isClosable: true,
  });
};

export default Toast;
