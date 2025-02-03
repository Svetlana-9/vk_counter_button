import "./Counter.css";
import classNames from "classnames";

interface IPropsCounter {
  style: "primary" | "secondary";
  size: 8 | 12 | 16 | 20 | 24;
  quantity: string;
  pulse: boolean;
}

export default function Counter(props: IPropsCounter) {
  let counterClass: string = classNames({
    counter: true,
    primary: props.style === "primary",
    secondary: props.style === "secondary",
    size_8: props.size === 8,
    size_12: props.size === 12,
    size_16: props.size === 16,
    size_20: props.size === 20,
    size_24: props.size === 24,
  });

  let counterPulseClass: string = classNames({
    pulse_counter: true,
    pulse_size_8: props.size === 8,
    pulse_size_12: props.size === 12,
  });

  let content: string = props.quantity;
  if (Number(content)) {
    if (Number(content) > 99) {
      content = "99+";
    }
  } else if (content.length > 3) {
    content = content.slice(0, 3);
  }

  return !props.pulse ? (
    <div className={counterClass}>
      {props.size !== 12 && props.size !== 8 ? content : ""}
    </div>
  ) : (
    <div className={counterPulseClass}>
      <div
        className={classNames({
          dot: true,
          pulse_size_8: props.size === 8,
          pulse_size_12: props.size === 12,
          pulse_primary: props.style === "primary",
          pulse_secondary: props.style == "secondary",
        })}
      ></div>
      <div
        className={classNames({
          pulse: true,
          one: true,
          pulse_size_8: props.size === 8,
          pulse_size_12: props.size === 12,
          pulse_primary: props.style === "primary",
          pulse_secondary: props.style == "secondary",
        })}
      ></div>
      <div
        className={classNames({
          pulse: true,
          two: true,
          pulse_size_8: props.size === 8,
          pulse_size_12: props.size === 12,
          pulse_primary: props.style === "primary",
          pulse_secondary: props.style == "secondary",
        })}
      ></div>
    </div>
  );
}
