import { useEffect, useRef } from "react";

function useElementFinder({
  dataSetName,
  dependencies: dependencies,
}: {
  dataSetName: string;
  dependencies: unknown;
}): HTMLElement[] | null {
  const foundElementRef = useRef<HTMLElement[] | null>(null);

  const htmlElements = document.querySelectorAll<HTMLElement>(
    `div[${dataSetName}]`
  );

  useEffect(() => {
    foundElementRef.current = Array.from(htmlElements);
  }, [dependencies, htmlElements]);

  return foundElementRef.current;
}

export default useElementFinder;
