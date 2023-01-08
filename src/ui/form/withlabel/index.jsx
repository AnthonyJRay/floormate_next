import { useState, useRef } from "react";

export default function withLabel(Component) {
  const defaultClassNames = "text-blue-100";
  return function WrappedComponent({ children }) {
    const [clicked, setClicked] = useState(false);
    return (
      <>
        <label
          className={defaultClassNames}
          onClick={() => {
            setClicked(true), setTimeout(() => setClicked(false), 500);
          }}
        >
          {children}
        </label>
        <Component focused={clicked} />
      </>
    );
  };
}
