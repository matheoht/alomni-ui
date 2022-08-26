import { useState } from "react";

export interface useToggleProps {
  defaultValue?: Boolean;
}

const useToggle = (defaultValue?: Boolean) => {
  const [status, setStatus] = useState(defaultValue || false);
  const toggleStatus = () => setStatus((prevStatus: Boolean) => !prevStatus);

  return { status, toggleStatus } as const;
};

export default useToggle;
