import Button from "./Components/Button";
import Counter from "./Components/Counter";
import "./App.css"

function App() {
  return (
    <div className="app">
      <Button
        style="primary"
        size={56}
        state="enabled"
        counter={true}
        focused={false}
        lable={"Что делать"}
      />
       <Button
        style="primary"
        size={36}
        state="enabled"
        counter={true}
        focused={false}
        lable={"Что делать"}
      />
       <Button
        style="primary"
        size={28}
        state="enabled"
        counter={true}
        focused={false}
        lable={"Что делать"}
      />
       <Button
        style="secondary"
        size={56}
        state="enabled"
        counter={true}
        focused={false}
        lable={"Что делать"}
      />
       <Button
        style="secondary"
        size={36}
        state="enabled"
        counter={true}
        focused={false}
        lable={"Что делать"}
      />
       <Button
        style="secondary"
        size={28}
        state="enabled"
        counter={true}
        focused={false}
        lable={"Что делать"}
      />
       <Button
        style="primary"
        size={56}
        state="enabled"
        counter={true}
        focused={false}
        lable={"Что делать"}
        counterComponent={
          <Counter
            style="primary"
            size={24}
            quantity="3"
            pulse={false}
          />
        }
      />
      <Button
        style="primary"
        size={36}
        state="enabled"
        counter={true}
        focused={false}
        lable={"Что делать"}
        counterComponent={
          <Counter
            style="primary"
            size={12}
            quantity="3"
            pulse={false}
          />
        }
      />
       <Button
        style="primary"
        size={28}
        state="enabled"
        counter={true}
        focused={false}
        lable={"Что делать"}
        counterComponent={
          <Counter
            style="primary"
            size={12}
            quantity="3"
            pulse={true}
          />
        }
      />
        <Button
        style="secondary"
        size={56}
        state="enabled"
        counter={true}
        focused={false}
        lable={"Что делать"}
        counterComponent={
          <Counter
            style="secondary"
            size={24}
            quantity="3"
            pulse={false}
          />
        }
      />
      <Button
        style="secondary"
        size={36}
        state="enabled"
        counter={true}
        focused={false}
        lable={"Что делать"}
        counterComponent={
          <Counter
            style="secondary"
            size={12}
            quantity="3"
            pulse={false}
          />
        }
      />
       <Button
        style="secondary"
        size={28}
        state="enabled"
        counter={true}
        focused={false}
        lable={"Что делать"}
        counterComponent={
          <Counter
            style="secondary"
            size={12}
            quantity="3"
            pulse={true}
          />
        }
      />
       <Button
        style="secondary"
        size={56}
        state="enabled"
        counter={true}
        focused={false}
        lable={"Что делать"}
        counterComponent={
          <Counter
            style="secondary"
            size={24}
            quantity="333"
            pulse={false}
          />
        }
      />
       <Button
        style="primary"
        size={36}
        state="enabled"
        counter={true}
        focused={false}
        lable={"Что делать"}
        counterComponent={
          <Counter
            style="primary"
            size={20}
            quantity="абвг"
            pulse={false}
          />
        }
      />
      <Button
        style="primary"
        size={56}
        state="enabled"
        counter={true}
        focused={true}
        lable={"Что делать"}
        counterComponent={
          <Counter
            style="primary"
            size={16}
            quantity="3"
            pulse={false}
          />
        }
      />
      <Button
        style="secondary"
        size={28}
        state="enabled"
        counter={true}
        focused={true}
        lable={"Что делать"}
        counterComponent={
          <Counter
            style="primary"
            size={8}
            quantity="3"
            pulse={true}
          />
        }
      />
      <Button
        style="primary"
        size={56}
        state="disabled"
        counter={true}
        focused={false}
        lable={"Что делать"}
        counterComponent={
          <Counter
            style="primary"
            size={8}
            quantity="3"
            pulse={true}
          />
        }
      />
      <Button
        style="secondary"
        size={56}
        state="disabled"
        counter={true}
        focused={false}
        lable={"Что делать"}
        counterComponent={
          <Counter
            style="secondary"
            size={8}
            quantity="3"
            pulse={true}
          />
        }
      />
    </div>
  );
}

export default App;
