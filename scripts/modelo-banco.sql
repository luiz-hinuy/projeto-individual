CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE IF NOT EXISTS "rooms" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "number" integer,
  "location" varchar
);

CREATE TABLE IF NOT EXISTS "users" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "name" varchar,
  "email" varchar,
  "password" varchar
);

CREATE TABLE IF NOT EXISTS "bookings" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "user_id" integer NOT NULL,
  "rooms_id" integer NOT NULL,
  "status" varchar,
  "created_at" timestamp,
  "start_time" timestamp,
  "end_time" timestamp
);

ALTER TABLE "bookings" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "bookings" ADD FOREIGN KEY ("rooms_id") REFERENCES "rooms" ("id");
