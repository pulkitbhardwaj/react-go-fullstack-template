import { useEffect, useState } from "react";

export function useDocumentBody() {
  const [body, setBody] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!body) {
      setBody(document?.body);
    }
  }, []);

  return body;
}
