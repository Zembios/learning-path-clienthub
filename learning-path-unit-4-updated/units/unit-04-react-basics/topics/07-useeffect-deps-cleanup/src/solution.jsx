import React, { useState, useEffect } from "react";

// Mock API call
function fetchMockData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ timestamp: new Date().toLocaleTimeString() });
    }, 500); // pretend API takes 0.5s
  });
}

function PollingExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true; // protect against state update after unmount

    const fetchData = async () => {
      try {
        const result = await fetchMockData();
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    // fetch immediately once
    fetchData();

    // then start polling every 3s
    const intervalId = setInterval(fetchData, 3000);
    console.log("📡 Polling started");

    // cleanup on unmount
    return () => {
      isMounted = false;
      clearInterval(intervalId);
      console.log("🧹 Polling stopped");
    };
  }, []); // [] ensures setup once, cleanup on unmount

  return (
    <div>
      <h2>Polling Example</h2>
      <p>Last fetched at: {data ? data.timestamp : "Loading..."}</p>
    </div>
  );
}

export default PollingExample;