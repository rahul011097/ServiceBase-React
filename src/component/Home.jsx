import React from "react";
import "../styles/Home.scss";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillInstagram,AiFillYoutube} from 'react-icons/ai'

const Home = () => {
  return (
    <div>
      <div className="home">
        <main>
          <h1>Welcome to Raso</h1>
          <p>you have a problem ? Don't worry We have Solution</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics"></img>
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            animi delectus voluptatum, voluptate voluptatibus sequi, enim quos
            nihil aspernatur nulla quas laboriosam numquam vel possimus ipsa?
            Corrupti tenetur sunt voluptates.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:"0.5s"}}>
            <AiFillGoogleCircle />
            <p>Google</p>
                </div>
                <div style={{animationDelay:"0.4s"}}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
                </div>
                <div style={{animationDelay:"0.3s"}}>
            <AiFillYoutube />
            <p>Youtube</p>
                </div>
                <div style={{animationDelay:"0.1s"}}>
            <AiFillInstagram />
            <p>Instagram</p>
                </div>
            </article>
        </div>
      </div>
    </div>
  );
};

export default Home;
