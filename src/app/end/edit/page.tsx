'use client';

import Select from '@/components/Select';
import '@uiw/react-md-editor/markdown-editor.css';
import hljs from 'highlight.js';
import dynamic from 'next/dynamic';
import 'quill-emoji/dist/quill-emoji.css';
import 'quill/dist/quill.snow.css';
import { useCallback, useRef, useState } from 'react';

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });
hljs.configure({
  languages: ['javascript', 'php', 'python']
});

const EDIT_OPTIONS = {
  debug: 'true',
  modules: {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote', 'code-block'],
        [{ header: [1, 2, 3, 4, 5, 6, false] }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],
        ['link', 'image'],
        ['emoji'],
        ['clean'] // remove formatting button
      ],
      handlers: {
        image: function () {
          1111;
        },
        emoji: function () {}
      }
    },
    'emoji-toolbar': true, //是否展示出来
    'emoji-textarea': false, //我不需要emoji展示在文本框所以设置为false
    'emoji-shortname': true,
    syntax: {
      highlight: (text: string) => hljs.highlightAuto(text).value
    }
  },

  placeholder: 'Write something...',
  // readOnly: true,
  theme: 'snow'
};

const Edit = () => {
  const [editValue, setEditValue] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState<undefined | string | number>(undefined);

  const onHandleChange = (type: string, value: string | number) => {
    if (type === 'title') {
      setTitle(value as string);
      return;
    }

    if (type === 'desc') {
      setDesc(value as string);
      return;
    }

    if (type === 'category') {
      setCategory(value);
      return;
    }
  };
  const editorRef = useRef<any>();

  const _initEditor = useCallback(() => {
    if (editorRef.current && !document) return;
    // Quill?.register('modules/emoji', Emoji);
  }, []);

  const onHandleSubmit = useCallback(() => {
    console.log('submit');
  }, []);

  console.log(
    {
      title,
      desc,
      category,
      editValue
    },
    '-----form'
  );

  return (
    <div className='flex w-full flex-auto flex-col overflow-auto'>
      <div className='mt-[20px] w-full flex-none'>
        <input
          value={title}
          type='text'
          onChange={(e) => onHandleChange('title', e.target.value)}
          placeholder='请输入标题'
          className='input input-bordered w-full'
        />
      </div>
      <div className='mt-[20px] w-full flex-none'>
        <textarea
          value={desc}
          onChange={(e) => onHandleChange('desc', e.target.value)}
          className='textarea textarea-bordered w-full'
          placeholder='文章描述'
        />
      </div>
      <div className='mt-[20px] w-full flex-none'>
        <Select
          className='w-full'
          value={category}
          onChange={(value) => onHandleChange('category', value)}
          data={[
            { label: '1', value: 1 },
            { label: '2', value: 2 }
          ]}
        />
      </div>
      <div className='mt-[20px] w-full flex-none text-[#fff]'>
        <QuillEditor />
      </div>
      <div className='mt-[100px] flex w-full flex-none justify-center'>
        <button onClick={onHandleSubmit} className='btn btn-active btn-wide'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Edit;
