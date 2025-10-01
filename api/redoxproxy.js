// frontend/api/redoxProxy.js
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  // Connect to your MySQL database directly
  const conn = await mysql.createConnection({
    host: 'sql306.infinityfree.com',
    user: 'if0_40062061',
    password: 'DW101BxteSQ0c',
    database: 'if0_40062061_sirajdb',
  });

  try {
    const [rows] = await conn.execute(
      'SELECT name, availability, mobileNumber, email, location, institution, currentSubject FROM accept'
    );

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Content-Type', 'application/json');

    res.status(200).json(rows); // Return clean JSON
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    await conn.end();
  }
}
