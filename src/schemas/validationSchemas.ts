import { z } from "zod";

export const validationLoginSchema = z.object({
  email: z.string().email({ message: "Введите корректный email" }).nonempty({ message: "Email обязателен" }),
  password: z.string().nonempty({ message: "Пароль обязателен" }).min(6, { message: "Пароль должен быть минимум 6 символов" }),
});

export const validationResetSchema = z.object({
  email: z.string().email({ message: "Введите корректный email" }).nonempty({ message: "Email обязателен" }),
});

export type ValidationLoginSchema = z.infer<typeof validationLoginSchema>;
export type ValidationResetSchema = z.infer<typeof validationResetSchema>;