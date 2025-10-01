// frontend/api/redoxProxy.js

export default async function handler(req, res) {
  try {
    const response = await fetch("https://sirajummonir.wuaze.com/redox.php");
    const text = await response.text();

    let jsonData;

    // Try to extract JSON from the text
    const jsonMatch = text.match(/\{.*\}|\[.*\]/s); // match JSON object or array
    if (jsonMatch) {
      try {
        jsonData = JSON.parse(jsonMatch[0]);
      } catch (e) {
        jsonData = { error: "Failed to parse JSON", raw: jsonMatch[0] };
      }
    } else {
      jsonData = { error: "No JSON found in response", raw: text };
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
