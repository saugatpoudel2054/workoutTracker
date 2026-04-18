import { integer, numeric, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const workouts = pgTable("workouts", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  name: text("name").notNull(),
  notes: text("notes"),
  loggedAt: timestamp("logged_at").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Catalog of available exercises, selectable by users
export const exercises = pgTable("exercises", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  muscleGroup: text("muscle_group"),
});

// Junction table: an exercise entry within a specific workout
export const workoutExercises = pgTable("workout_exercises", {
  id: serial("id").primaryKey(),
  workoutId: integer("workout_id")
    .notNull()
    .references(() => workouts.id, { onDelete: "cascade" }),
  exerciseId: integer("exercise_id")
    .notNull()
    .references(() => exercises.id, { onDelete: "restrict" }),
  order: integer("order").notNull(),
});

export const sets = pgTable("sets", {
  id: serial("id").primaryKey(),
  workoutExerciseId: integer("workout_exercise_id")
    .notNull()
    .references(() => workoutExercises.id, { onDelete: "cascade" }),
  setNumber: integer("set_number").notNull(),
  reps: integer("reps"),
  weightKg: numeric("weight_kg", { precision: 6, scale: 2 }),
  durationSecs: integer("duration_secs"),
  notes: text("notes"),
});
