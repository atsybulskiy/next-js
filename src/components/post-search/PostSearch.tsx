import { ChangeEventHandler, FormEventHandler, useCallback, useMemo, useState } from 'react';
import { getPostsBySearch } from '@services/getPost';
import { Post } from '@types';
import { debounce } from '@helpers/utils';

type Props = {
  onSearch(value: Post[]): void;
  setLoading(loading: boolean): void;
};

export const PostSearch = ({ onSearch, setLoading }: Props) => {
  const [search, setSearch] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const posts = await getPostsBySearch(search);
    onSearch(posts);
  };

  const changeHandler = useCallback(
    async (searchString: string) => {
      try {
        setLoading(true);
        const posts = await getPostsBySearch(searchString);
        setLoading(false);
        onSearch(posts);
      } catch (e) {
        console.log('%c⇒ e', 'color: #FF5370', e);
      }
    },
    [onSearch, setLoading]
  );

  const debouncedSearch = useMemo(() => {
    return debounce(changeHandler, 500);
  }, [changeHandler]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    setSearch(value);
    debouncedSearch(value);
  };

  return (
    <div className="flex items-center justify-end mb-4">
      <form onSubmit={handleSubmit}>
        <input
          type={'search'}
          placeholder={'search'}
          value={search}
          onChange={handleChange}
          className="py-2 px-4 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
        <button className="ml-2 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md">Search</button>
      </form>
    </div>
  );
};
