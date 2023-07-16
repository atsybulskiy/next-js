import { PromptCard } from './prompts/PromptCard';
import { Prompt } from '@types';

type Props = {
  name: string;
  desc: string;
  data: Prompt[];
  handleEdit?(post: any): void;
  handleDelete?(post: any): void;
};

const Profile = ({ name, desc, data, handleEdit, handleDelete }: Props) => {
  console.log('%c⇒ data', 'color: #89DDF7', data);
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit?.(post)}
            handleDelete={() => handleDelete?.(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
