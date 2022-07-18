import { useState } from "react";

export interface useToggleProps {
  defaultValue?: boolean;
}

const useToggle = (defaultValue?: boolean) => {
  const [status, setStatus] = useState(defaultValue || false);
  const toggleStatus = () => setStatus((prevStatus: boolean) => !prevStatus);

  return { status, toggleStatus } as const;
};

export default useToggle;
