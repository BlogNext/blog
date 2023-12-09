import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrism from 'rehype-prism-plus';
export const Docs = defineDocumentType(() => ({
  name: 'Docs',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },

    date: { type: 'date', required: true },
    desc: {
      type: 'string',
      required: true
    },
    auth: {
      type: 'string',
      required: true
    },
    cover: {
      type: 'string',
      required: false
    }
  },
  computedFields: {
    url: { type: 'string', resolve: (docs) => `/detail/${docs._raw.flattenedPath}` }
  }
}));

export default makeSource({
  contentDirPath: './src/docs',
  documentTypes: [Docs],
  mdx: {
    // rehypeCodeTitles as any, // For adding titles to code blocks
    rehypePlugins: [[rehypePrism as any, { ignoreMissing: true }]]
  }
});
