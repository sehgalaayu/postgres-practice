import { Client } from "pg";
import "dotenv/config";

const pgClient = new Client({
  connectionString: process.env.PG_CLIENT_URL,
  ssl: true,
});

async function main() {
  try {
    console.log("Connecting to:", process.env.PG_CLIENT_URL);

    await pgClient.connect();

    const response = await pgClient.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      ["aayu", "aayu@gmail.com", "aayuiscool"]
    );

    console.log("Inserted user:", response.rows[0]);
  } catch (err) {
    console.error("Error inserting user:", err);
  } finally {
    await pgClient.end();
  }
}

main();
