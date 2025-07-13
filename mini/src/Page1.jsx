import "./Page1.css";
import SummaryForm from "./SummaryForm";

export default function Page1() {
  return (
    <>
      <div id="p1">
        <h1>SpotSummary: AI-Powered Review Insights for Locations</h1>
        <div id="s1">
          <div id="txt">
            <p>
              Introducing SpotSummary—a smart web application that transforms
              the way you explore public opinions about any location. Just enter
              the name and location of a place, and in no time, you will get an
              insightful, AI-generated summary of user reviews. No more endless
              scrolling through feedback! With SpotSummary, discovering the key
              points and overall sentiment is a breeze, helping you quickly
              understand what people are saying. Curious to learn more? Dive in
              and see how this tool makes navigating reviews a whole lot easier!
            </p>
            <p>
              What makes SpotSummary stand out is its ability to save you time
              by cutting through the noise of countless reviews. Powered by
              advanced AI, it gathers the most relevant insights, delivering a
              concise summary in a clean, user-friendly interface. Whether you
              are planning a visit or just curious about a location, SpotSummary
              gives you the highlights at a glance—so you can make informed
              decisions without the hassle. Ready to discover a simpler way to
              understand public feedback?
            </p>
          </div>
        </div>
      </div>
      <div id="p2">
        <h1>Tech stack used</h1>
        <div className="image-container">
          <img
            src="https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
            alt="React.js Logo"
          />
        </div>
        <div className="image-container">
          <img src="/hsj.png" alt="Tech Logo" />
        </div>
        <div className="image-container">
          <img
            src="https://seeklogo.com/images/G/google-gemini-logo-A5787B2669-seeklogo.com.png"
            alt="Google Gemini Logo"
          />
        </div>
        <div className="image-container">
          <img src="/maps.png" alt="Maps Logo" />
        </div>
      </div>
      <div id="p3">
        <center>
          <h1>Lets Explore places and summarize them...</h1>
        </center>
        <SummaryForm />
      </div>
    </>
  );
}
