import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const todos = sqliteTable('todos', {
  id: integer('id').primaryKey(),
  content: text('content'),
  done: integer('done')
});

/**
 * User table
 * 用户表
 */
export const User = sqliteTable('user', {
  /** 主键，唯一键 */
  id: integer('id').primaryKey({ autoIncrement: true }).notNull(),
  /** 用户名 */
  name: text('name').notNull(),
  /** 邮箱 */
  email: text('email').notNull(),
  /** 秘密 */
  password: text('password').notNull(),
  /** 手机号 */
  phone: text('phone').notNull()
});

/**
 * Blog table
 * 博客表
 */
export const Blog = sqliteTable('blog', {
  /** blog id */
  id: integer('id').primaryKey({ autoIncrement: true }).notNull(),
  /** 标题 */
  title: text('title').notNull(),
  /** 描述 */
  description: text('description').notNull(),
  /** 封面图 */
  cover: text('cover').notNull(),
  /** 内容 json */
  content: text('content').notNull(),
  /** 创建时间 */
  created_at: integer('created_at').notNull(),
  /** 更新时间 */
  updated_at: integer('updated_at').notNull(),
  /** 创建人 */
  user_id: integer('user_id').notNull(),
  /** 分类 */
  category_id: integer('category_id').notNull(),
  /** 标签 */
  tag_id: integer('tag_id'),
  /** 浏览量 */
  view_counts: integer('view_count').notNull(),
  /** 批注数 */
  comment_counts: integer('comment_count').notNull()
});

/**
 * Category table
 * 分类表
 */
export const Category = sqliteTable('category', {
  /** category id */
  id: integer('id').primaryKey({ autoIncrement: true }).notNull(),
  /** 分类名 */
  name: text('name').notNull()
});

/**
 * Tag table
 * 标签表
 */
export const Tag = sqliteTable('tag', {
  /** tag id */
  id: integer('id').primaryKey({ autoIncrement: true }).notNull(),
  /** 标签名 */
  name: text('name').notNull()
});

/**
 * Comment table
 * 评论表
 */
export const Comment = sqliteTable('comment', {
  /** comment id */
  id: integer('id').primaryKey({ autoIncrement: true }).notNull(),
  /** 评论内容 */
  content: text('content').notNull(),
  /** 评论时间 */
  created_at: integer('created_at').notNull(),
  /** 评论人 */
  user_id: integer('user_id').notNull(),
  /** 评论博客 */
  blog_id: integer('blog_id').notNull()
});

// export const ThirdAuth = sqliteTable('third_auth', {
//   /** 主键，唯一键 */
//   id: integer('id').primaryKey().notNull(),
//   /** 用户id */
//   user_id: integer('user_id').notNull(),
//   /** 第三方平台 */
//   platform: text('platform').notNull(),
//   /** 第三方平台用户id */
//   platform_user_id: text('platform_user_id').notNull(),
//   /** 第三方平台用户昵称 */
//   platform_user_name: text('platform_user_name').notNull(),
//   /** 第三方平台用户头像 */
//   platform_user_avatar: text('platform_user_avatar').notNull()
// });
