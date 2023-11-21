import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { prompts } from "~/server/db/schema";

export const promptRouter = createTRPCRouter({
  call: publicProcedure.query(async ({ ctx }) => {
    const prompts = await ctx.db.query.prompts.findMany();
    return prompts;
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.prompts.findMany();
  }),
  create: publicProcedure
    .input(
      z.object({
        content: z.string().min(1).max(255),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.insert(prompts).values({
        opener: input.content,
      });
    }),
});
