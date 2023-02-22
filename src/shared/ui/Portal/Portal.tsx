import { type ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode
}

export const Portal = ({
  children
}: PortalProps) => {
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector('#root') ?? null;
    setMounted(true);
  }, []);

  return mounted && (ref.current !== null) ? createPortal(children, ref.current as Element) : null;
};
