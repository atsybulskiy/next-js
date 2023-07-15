'use client';

import { ChangeEventHandler, useEffect, useState } from 'react';
import { Prompt } from '@types';
import { PromptCardList } from '@components/prompts/PromptCardList';

type Timeout = ReturnType<typeof setTimeout> | null;

export const Feed = () => {
  const [allPosts, setAllPosts] = useState<Prompt[]>([]);

  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState<Timeout>(null);
  const [searchedResults, setSearchedResults] = useState<Prompt[]>([]);

  const fetchPosts = async () => {
    const response = await fetch('/api/prompt');
    const data = await response.json();

    console.log('%c⇒ data', 'color: #89DDF7', data);

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (search: string) => {
    const regex = new RegExp(search, 'i'); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName: string) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {/* All Prompts */}
      {/*{searchText ? (*/}
      <PromptCardList
        data={searchText ? searchedResults : allPosts}
        handleTagClick={handleTagClick}
      />
      {/*) : (*/}
      {/*  <PromptCardList data={allPosts} handleTagClick={handleTagClick} />*/}
      {/*)}*/}
    </section>
  );
};
