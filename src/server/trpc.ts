import { initTRPC } from '@trpc/server';
import { type NextRequest } from 'next/server';
import { ZodError } from 'zod';
interface CreateContextOptions {
  headers: Headers;
}
export const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    headers: opts.headers
  };
};
export const createTRPCContext = (opts: { req: NextRequest }) => {
  // Fetch stuff that depends on the request

  return createInnerTRPCContext({
    headers: opts.req.headers
  });
};

// const t = initTRPC.create();
const t = initTRPC.context<typeof createTRPCContext>().create({
  // transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : null
      }
    };
  }
});

export const router = t.router;
export const publicProcedure = t.procedure;

// const { listen } = createHTTPServer({
//   router: appRouter
// });
// // The API will now be listening on port 3000!
// listen(3000);
