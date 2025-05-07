import { Prisma } from "@prisma/client";
import { Pretty } from "src/shared/types/utility.types";
import { z } from "zod";

type RegisterExcludeKeys = 'id' | 'hash' | 'isVerified' | 'role' | 'refreshToken' | 'Permissions' | 'Account' | 'ImageUploads';
interface RegisterMergeType {
  username: string | null;
  password: string;
  confirmPassword: string;
}
export type RegisterBody = Pretty<Omit<Prisma.UserCreateInput, RegisterExcludeKeys> & RegisterMergeType>;

export const CreateUserSchema = z.object({
  email: z.string().trim().email().min(1),
  username: z.string().trim().max(32).transform((v) => v === '' ? null : v),
  password: z.string().trim().min(6),
  confirmPassword: z.string().trim()
} satisfies Record<keyof RegisterBody, any>).superRefine((record, ctx) => {
  if (record.password !== record.confirmPassword) {
    ctx.addIssue({
      code: 'custom',
      path: ['confirmPassword'],
      message: 'Passwords do not match'
    });
  }
});