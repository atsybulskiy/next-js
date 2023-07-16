import { Metadata } from 'next';

async function getData(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  });

  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  return {
    title: `Post: ${id} | Next App`
  };
}

const Post = async ({ params: { id } }: Props) => {
  const post = await getData(id);
  console.log('%c⇒ post', 'color: #89DDF7', post);
  return (
    <>
      <h2 className="text-xl font-bold mb-4">
        {post.title} {id}
      </h2>
      <p className="text-gray-800">{post.body}</p>
    </>
  );
};

export default Post;
