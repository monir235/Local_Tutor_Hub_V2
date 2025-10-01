// frontend/api/redoxProxy.js

export default async function handler(req, res) {
  try {
    const response = await fetch("https://sirajummonir.wuaze.com/redox.php");
    const text = await response.text();

    let jsonData;

    try {
      // Try parsing directly first
      jsonData = JSON.parse(text);
    } catch {
      // Fallback: extract JSON array or object from any HTML wrapper
      const match = text.match(/\[.*\]|\{.*\}/s); // matches first array or object
      if (match) {
        try {
          jsonData = JSON.parse(match[0]);
        } catch {
          jsonData = { error: "Failed to parse JSON", raw: match[0] };
        }
      } else {
        jsonData = { error: "No JSON found in response", raw: text };
      }
    }

    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Content-Type", "application/json");

    res.status(200).json(jsonData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
