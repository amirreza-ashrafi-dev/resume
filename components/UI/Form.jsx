import React from "react";
import classes from "../../styles/form.module.css";
import { useState } from "react";

const Form = () => {
  const [state, setState] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setState(true);
  };
  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Your Name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Email Address" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder="Message" required />
      </div>

      {state && <div style={{ color: "#01d293" }}>I will see your message and call you soon.</div>}
      <br />

      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
