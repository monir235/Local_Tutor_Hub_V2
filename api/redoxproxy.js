// /api/redoxProxy.js

export default async function handler(req, res) {
  try {
    // Fetch your Wuaze PHP output
    const response = await fetch("https://sirajummonir.wuaze.com/redox.php");
    const data = await response.text(); // Use text() because Wuaze may inject HTML

    // Optional: parse JSON safely
    let jsonData;
    try {
      jsonData = JSON.parse(data);
    } catch (e) {
      jsonData = { error: "Invalid JSON from Wuaze", raw: data };
    }

    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*"); // or your frontend URL
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Content-Type", "application/json");

    res.status(200).json(jsonData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
