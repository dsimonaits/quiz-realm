import { Box, ToastPosition, useToast } from "@chakra-ui/react";
import React, { FC, useEffect } from "react";

interface IToast {
  title: string;
  position: ToastPosition;
  status?: string;
  toast: any;
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
