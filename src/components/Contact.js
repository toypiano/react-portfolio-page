import React from "react";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h1>Contact me</h1>
      <form action="">
        <label className="name">
          Name:
          <input type="text" id="name" />
        </label>
        <label className="email">
          Email:
          <input type="email" id="email" />
        </label>
        <label className="message">
          Message:
          <textarea name="message" id="message"></textarea>
        </label>
        <input type="submit" className="btn form-btn" value="SEND" />
      </form>
    </section>
  );
}
