import { FC } from "react";
import { createPortal } from "react-dom";
import { useDocumentBody } from "../../utils/useDocument";

/**
 * Portals provide a first-class way to render children into a body
 * of the document outside the DOM hierarchy of the parent
 * component.
 */
export const Portal: FC = ({ children }) => {
  const body = useDocumentBody();

  return body ? createPortal(children, body) : null;
};
