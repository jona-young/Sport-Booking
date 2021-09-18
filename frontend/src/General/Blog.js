import React from "react";
import "./Blog.css";

function Blog() {
  return (
    <div className="blog">
      <h1 className="blog__header">Blog</h1>
      <div className="blog__post">
        <h2 className="blog__mainHeading">The Lightweight Solution for Tennis Sport Booking</h2>
        <span className="blog__mainDate">By Jona Young on 14/08/2020</span>
        <p className="blog__mainText">
          Frame offers a simple easy-to-use system for Sport Booking. Sign-Up
          for an account, login, and get to booking your tennis court in a short
          couple minutes!
        </p>
        <div className="blog__line"></div>
      </div>
      <div className="blog__post">
        <h2 className="blog__mainHeading">Tennis - Aim Higher</h2>
        <span className="blog__mainDate">By Carson Timms on 02/08/2020</span>
        <p className="blog__mainText">
          With clear direction, a set of measurable goals, and the ability to
          critically assess your performance and experiences, you will be on
          track to break many barriers to performance and excel in Tennis.
          Remember, the path to excellence is a journey not a sprint! Unless you
          are a dual tennis and track athlete at your local school. In that
          case, all bets are off, throw the clear direction, measurable goals,
          and self-reflection. Get to the finish line in both as fast as you
          can!
        </p>
        <div className="blog__line"></div>
      </div>
      <div className="blog__post">
        <h2 className="blog__mainHeading">The Shoe for You</h2>
        <span className="blog__mainDate">By Margot Calvert on 28/07/2020</span>
        <p className="blog__mainText">
          A shoe that combines comfortability, support, and proper contact to
          the ground is a keeper. For grass courts you will want outsoles with
          protruding bumps to grip on the court and provide greater traction.
          Clay courts require traction as well but you will want outsoles with
          zig zac grooves to dig into the clay. Hard courts are harder on the
          joints and while you will want a shoe with good traction you should
          also look out for improved stability and cushioning. Finally, for the
          food court maximizing for stability and cushioning is the most
          important. The reasoning being this is you will want to maintain your
          posture standing for long periods of time. So slip on those grandpa
          sneakers and get to eating!
        </p>
        <div className="blog__line"></div>
      </div>
      <div className="blog__post">
        <h2 className="blog__mainHeading">Whose Causing a Racket?</h2>
        <span className="blog__mainDate">By Alicia Briggs on 22/07/2020</span>
        <p className="blog__mainText">
          The Babolat Pure Strike 16x19 is a highly reccommended racket for
          intermediate to advanced tennis players that are looking for power on
          your strokes, appropriate feel on your volleys, and solid stability.
          If you are looking for a racket to take your game to the next level,
          you are probably looking in the wrong direction, ask your club
          professional instead on how to improve your game. If you are looking
          for a new racquet to show up your opponents at your next house league,
          then this is the racket for you!
        </p>
        <div className="blog__line"></div>
      </div>
      <div className="blog__post">
        <h2 className="blog__mainHeading">Imbalance Your Muscle Imbalances for Athletic Longevity!</h2>
        <span className="blog__mainDate">By Margot Calvert on 19/07/2020</span>
        <p className="blog__mainText">
          Two negatives make a positive, right? By approaching your strength
          training routine with this style you will create a more physically
          even body. The benefits of this approach are to strengthen the
          non-dominant side of the body for health benefits but also to create
          greater strength and power. If one side of your body is stronger then
          you may run into injury as the stronger side produces more force on
          shots or movements. If you strengthen the weaker side of your body,
          you will be able to produce greater power and minimize injury in the
          future!
        </p>
        <div className="blog__line"></div>
      </div>
    </div>
  );
}

export default Blog;
