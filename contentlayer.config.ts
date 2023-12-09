import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeCodeTitles from 'rehype-code-titles';
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
    rehypePlugins: [
      // rehypeCodeTitles as any, // For adding titles to code blocks
      rehypeCodeTitles,
      [rehypePrism as any, { ignoreMissing: true }]
      // imageMetadata // For adding image metadata (width, height)
    ]
  }
});
