import { useMemo } from "react";

export const usePagination = (totalPages, posts) => {
  const result = useMemo(() => {
    let arr = [];
    for (let i = 0; i < totalPages; i++) {
      arr.push(i + 1);
    }
    return arr;
  }, [posts]);
  return result;
};
