'use client';

import { FormEventHandler, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { Form } from '@components/Form';
import { Prompt } from '@types';

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState<Partial<Prompt>>({ prompt: '', tag: '' });

  const createPrompt: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user?.id,
          tag: post.tag
        })
      });

      if (response.ok) {
        router.push('/');
      }
    } catch (e) {
      console.log(e);
    } finally {
      setSubmitting(false);
    }
  };

  return <Form type={'Create'} post={post} submitting={submitting} setPost={setPost} handleSubmit={createPrompt} />;
};

export default CreatePrompt;
