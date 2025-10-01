export default async function handler(req, res) {
  try {
    const response = await fetch("https://sirajummonir.wuaze.com/tutorprofile.php", {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ success: false, message: "Proxy error", error: err.message });
  }
}
