import { Box } from "@mui/material";
import Modal, { ModalUnstyledOwnProps } from "@mui/material/Modal";
import style from "./CvvModal.module.scss";

export default function CvvModal({
  children,
  ...props
}: ModalUnstyledOwnProps) {
  return (
    <Modal {...props}>
      <Box className={style.cvvModal}>{children}</Box>
    </Modal>
  );
}
