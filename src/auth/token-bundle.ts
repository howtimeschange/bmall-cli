import { z } from 'zod';

export const TokenBundleSchema = z.object({
  tokenId: z.string().min(1),
  groupId: z.string().optional(),
  groupName: z.string().optional(),
  groupCode: z.string().optional(),
  userId: z.string().optional(),
  userName: z.string().optional(),
  mobile: z.union([z.string(), z.number()]).optional().transform((value) => value === undefined ? undefined : String(value)),
  roleCode: z.string().optional(),
  loginActiveTabName: z.string().optional(),
  permissions: z.array(z.unknown()).default([]),
  menuData: z.array(z.unknown()).default([])
});

export type TokenBundle = z.infer<typeof TokenBundleSchema>;

export function toTokenBundle(input: unknown): TokenBundle {
  if (typeof input === 'string') return TokenBundleSchema.parse({ tokenId: input });
  return TokenBundleSchema.parse(input);
}

export function isIamBundle(bundle: Pick<TokenBundle, 'loginActiveTabName'>): boolean {
  return bundle.loginActiveTabName === 'iam';
}
