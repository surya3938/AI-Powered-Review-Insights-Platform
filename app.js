document.getElementById("summaryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const placeName = document.getElementById("placeName").value;
  const placeLoc = document.getElementById("placeLoc").value;

  // Construct the Google Maps API URL
  const googleMapsUrl = `https://www.google.com/maps/place/The+Pink+Elephant/@15.556727,73.7517139,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbfebbbd4f0923d:0x91e21a8a69403ba6!8m2!3d15.5567218!4d73.7542942!16s%2Fg%2F11hf3x31n2?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D`;

  // Fetch data from Google Maps API
  fetch(googleMapsUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.results && data.results.length > 0) {
        const placeId = data.results[0].place_id;

        // Send the Place ID to the Gemini API for summary
        const geminiApiUrl =
          "https://your-gemini-AIzaSyAELkuRNHCgauW9UL9G6-QEzgmfQBTvXy0-url.com/summarize";

        fetch(geminiApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ placeId }),
        })
          .then((response) => response.json())
          .then((summary) => {
            document.getElementById("output").innerText = summary.text;
          })
          .catch((error) => {
            document.getElementById("output").innerText =
              "Error summarizing the reviews.";
            console.error(error);
          });
      } else {
        document.getElementById("output").innerText =
          "No results found for the given location.";
      }
    })
    .catch((error) => {
      document.getElementById("output").innerText =
        "Error fetching location data.";
      console.error(error);
    });
});
