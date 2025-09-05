import "dotenv/config";

import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "test123",
  database: "lunar_eclipse"
});

async function main() {
    await migrate(drizzle({ client: connection }), {
        migrationsFolder: "./src/drizzle/migrations"
    });
    await connection.end();
}

main();