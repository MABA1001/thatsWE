import exploreImg from "./../assets/explore.png";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          maxWidth: "1100px",
          margin: "180px auto",
        }}
      >
        <h1 style={{ fontSize: "57px", marginBottom: "5px" }}>
          Welcome to the Command Center for the{" "}
          <span
            style={{
              backgroundImage:
                "linear-gradient(rgba(185, 214, 239, 1), rgba(0, 67, 128, 1))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Perfect Vacation.
          </span>
        </h1>
        <p>
          Fulfill your customers wishes and increase your business potential
          with the thatsWe!
        </p>

        <Link to="/InfoHandeling">
          <button
            style={{
              padding: "16px 30px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "white",
              backgroundColor: "#2880CD",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              marginTop: "20px",
              marginBottom: "40px",
            }}
          >
            Explore More
          </button>
        </Link>

        <div style={{ textAlign: "center" }}>
          <img
            src={exploreImg}
            alt="Exploration"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#e6f7ff",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h3 style={{ fontSize: "44px", marginBottom: "12px" }}>About Us</h3>
        <p>
          Welcome to “thatsWE” – this platform specifically for travel agencies
          to offer their customers an unforgettable travel experience!
          <br />
          Exclusively for travel agencies, our app offers unique functions -
          from information about the start of your vacation to many situations
          during your vacation to saving your vacation experiences Try the free
          trial version now and experience what “thatsWE” exclusivity, customer
          friendliness and increased sales mean for your travel agency.
          <br />
          Winning customers and using the power of customer greed – “I want that
          too!”
        </p>
      </div>
    </>
  );
}
