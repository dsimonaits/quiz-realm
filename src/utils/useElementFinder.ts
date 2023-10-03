import { useEffect, useRef, RefObject } from "react";

function useElementFinder({
  dataSetName,
  dependencies: dependencies,
}: {
  dataSetName: string;
  dependencies: string[];
}): RefObject<HTMLElement[] | null> {
  const foundElementRef = useRef<HTMLElement[] | null>(null);

  useEffect(() => {
    const htmlElements = document.querySelectorAll<HTMLElement>(
      `div[${dataSetName}]`
    );

    foundElementRef.current = Array.from(htmlElements);
  }, [dependencies]);

  return foundElementRef;
}

export default useElementFinder;
