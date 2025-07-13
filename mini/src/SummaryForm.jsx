import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./SummaryForm.css";

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI("AIzaSyAiEHbWzuFiXjSb77e0irsdzBmbS58PicU");

const SummaryForm = () => {
  const [placeName, setPlaceName] = useState("");
  const [placeLocation, setPlaceLocation] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const placeDetails = await getPlaceDetails(placeName, placeLocation);

      const generatedSummary = await generateSummary(placeDetails);

      setSummary(generatedSummary);
    } catch (error) {
      console.error("Error:", error);
      setSummary("An error occurred while generating the summary.");
    } finally {
      setLoading(false);
    }
  };

  const getPlaceDetails = async (name, location) => {
    return `Details for ${name} in ${location}`;
  };

  const generateSummary = async (placeDetails) => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    // const prompt = `Summarize the following place details in a concise and informative manner and give it in paragrpah format little long and also give its rating out of 5  and few famous dishes from this place: ${placeDetails}`;
    const prompt = `Provide a comprehensive yet concise summary of the following medical details, ensuring clarity and accuracy. Present the information in a well-structured paragraph with sufficient depth. Additionally, evaluate the condition or treatment with a relevant medical assessment and highlight key symptoms, causes, or recommended treatments${placeDetails}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  };

  return (
    <div className="summary-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={placeName}
          onChange={(e) => setPlaceName(e.target.value)}
          placeholder="Name of any place"
          required
        />
        <input
          type="text"
          value={placeLocation}
          onChange={(e) => setPlaceLocation(e.target.value)}
          placeholder="Name of the location"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Summarizing..." : "Summarize!!"}
        </button>
      </form>
      {summary && (
        <div className="summary-output">
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default SummaryForm;
