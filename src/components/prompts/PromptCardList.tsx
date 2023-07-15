import { PromptCard } from '@components/prompts/PromptCard';
import { Prompt } from '@types';

type Props = {
  data: Prompt[];
  handleTagClick(tagName: string): void;
};

export const PromptCardList = ({ data, handleTagClick }: Props) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
          handleDelete={() => {}}
          handleEdit={() => {}}
        />
      ))}
    </div>
  );
};
