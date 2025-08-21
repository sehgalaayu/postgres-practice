import { Client } from "pg";

const pgClient = new Client(process.env.PG_CLIENT_URL);
async function main() {
  await pgClient.connect();
  const response = pgClient.query(
    "INSERT INTO users (username,email,password) VALUES (aayu ,aayu@gmail.com, aayuiscool )"
  );
  console.log(response);
}
main();
