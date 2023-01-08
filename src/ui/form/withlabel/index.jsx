import { useState, useRef } from "react";

export default function withLabel(Component) {
  const defaultClassNames = "text-left p-1";
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
