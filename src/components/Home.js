import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="content">
        <h2>Welcome to My Portfolio</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vivamus euismod, mauris at volutpat consequat, turpis erat
          bibendum nulla, in dignissim augue nulla id orci. 
          Quisque et ligula a felis maximus placerat. 
          Donec dignissim orci at erat scelerisque, vitae pulvinar 
          velit facilisis.
        </p>
        <p>
          Integer vulputate, lacus nec faucibus eleifend, tortor 
          ligula luctus nisl, et congue purus ex vitae neque. 
          Vestibulum nec tortor ac lectus fermentum blandit. 
          Nam vel urna ut velit egestas dictum.
        </p>
      </div>
    </section>
  );
}

export default Home;
