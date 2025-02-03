import classNames from "classnames";
import "./Button.css";
import { useState } from "react";

interface IPropsButton {
  style: "primary" | "secondary";
  size: 28 | 36 | 56;
  state: "enabled" | "disabled";
  counter: boolean;
  focused: boolean;
  lable: string;
  counterComponent?: JSX.Element;
}

export default function Button(props: IPropsButton) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  let buttonClass = classNames({
    btn: true,
    btn_primary: props.style === "primary",
    btn_secondary: props.style === "secondary",
    btn_size_28: props.size === 28,
    btn_size_36: props.size === 36,
    btn_size_56: props.size === 56,
    loading: isLoading === true,
    enabled: props.state === "enabled",
    focused: props.focused && props.state === "enabled",
  });

  return (
    <button
      disabled={props.state === "disabled"}
      className={buttonClass}
      onClick={() => setIsLoading(true)}
    >
      <div className={classNames({ content: true, contentLoading: isLoading === true })}>
        <span>{props.lable}</span>
        {props.counter ? props.counterComponent : ""}
      </div>
      {isLoading ? <span className="loader"></span> : ""}
    </button>
  );
}
