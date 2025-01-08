"use client";

import { useRouter } from "next/navigation";

const SearchFormReset = () => {
  const router = useRouter();

  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
    router.push("/");
  };

  return (
    <button type="reset" onClick={reset}>
      Reset
    </button>
  );
};
export default SearchFormReset;
