import { todos } from '@/db/schema';
import Database from 'better-sqlite3';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { z } from 'zod';
import { publicProcedure, router } from './trpc';
const qiniu = require('qiniu');

const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite);

migrate(db, { migrationsFolder: 'drizzle' });

console.log(qiniu, '--------db');
export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [1, 2, 3, 4];
  }),
  addTodo: publicProcedure.input(z.string()).mutation(async (opts) => {
    await db.insert(todos).values({ content: opts.input, done: 0 }).run();
    return true;
  }),
  setDone: publicProcedure
    .input(
      z.object({
        id: z.number(),
        done: z.number()
      })
    )
    .mutation(async (opts) => {
      await db
        .update(todos)
        .set({ done: opts.input.done })
        .where(eq(todos.id, opts.input.id))
        .run();
      return true;
    }),
  getArticles: publicProcedure.query(async () => {
    return [2, 2, 3, 4];
  }),
  generateUpdateToekn: publicProcedure.query(async () => {
    qiniu.conf.ACCESS_KEY = 'Access_Key';
    qiniu.conf.SECRET_KEY = 'Secret_Key';
    console.log(qiniu.conf, '--------qiniu');
    // 创建上传策略
    const putPolicy = new qiniu.rs.PutPolicy({
      scope: 'sudoku'
    });

    // 设置上传策略

    // 生成上传凭证
    const token = putPolicy.uploadToken();
    console.log(token, '-----------quibuy tijeb');
    return Promise.resolve(token);
    // res.status(200).json(Promise.resolve([2, 3]));
  })
});

export type AppRouter = typeof appRouter;
