import { mysqlTable, varchar, int }  from "drizzle-orm/mysql-core";

export const TestTable = mysqlTable("Test", {
    id: int("id").autoincrement().primaryKey(),
    name: varchar("name", { length: 50}).notNull(),
})