import { z } from "zod";

// `specialties` is an array of strings in the seed data, but according to the schema, it's a jsonb field.
// We're gunna strong type it for now because it'll allow for more certain type safety for now.
// We may need to change this in the future.
export const specialtiesSchema = z.array(z.string()).default([]);

export const advocateSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  city: z.string(),
  degree: z.string(),
  specialties: specialtiesSchema,
  yearsOfExperience: z.number(),
  phoneNumber: z.number(),
  createdAt: z.date().nullable(),
});

export const advocatesSchema = z.array(advocateSchema);

export type Advocate = z.infer<typeof advocateSchema>;
export type Advocates = z.infer<typeof advocatesSchema>;

