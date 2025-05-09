CREATE TABLE "rooms" (
  "id" integer PRIMARY KEY,
  "number" integer,
  "location" varchar
);

CREATE TABLE "users" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "email" varchar,
  "password" varchar
);

CREATE TABLE "bookings" (
  "id" integer PRIMARY KEY,
  "user_id" integer NOT NULL,
  "rooms_id" integer NOT NULL,
  "status" varchar,
  "created_at" timestamp,
  "start_time" timestamp,
  "end_time" timestamp
);

ALTER TABLE "bookings" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "bookings" ADD FOREIGN KEY ("rooms_id") REFERENCES "rooms" ("id");
