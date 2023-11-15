import { useState } from 'react';

type ReturnType = {
  onClose: VoidFunction;
  open: HTMLElement | null;
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
  setOpen: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
};

export default function usePopover(): ReturnType {
  const [open, setOpen] = useState<HTMLElement | null>(null);
  const onOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const onClose = () => {
    setOpen(null);
  };

  return {
    onClose,
    open,
    onOpen,
    setOpen,
  };
}
