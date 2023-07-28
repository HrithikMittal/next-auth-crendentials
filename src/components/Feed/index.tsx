"use client";

import React, { useEffect, useState } from "react";

import PromptCard from "../PromptCard";

const PromptCardList = ({ data, handleTagClick }: any) => {
  return (
    <ul className="mt-16 prompt_layout">
      {data.map(
        (
          { prompt, tag, creator }: any,
          index: React.Key | null | undefined
        ) => {
          return (
            <PromptCard
              prompt={prompt}
              key={index}
              tag={tag}
              creator={creator}
              handleTagClick={handleTagClick}
            />
          );
        }
      )}
    </ul>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setData(data);
    };
    fetchPosts();
  }, []);

  const handleSearchChange = () => {};
  const handleTagClick = () => {
    console.log("tag clicked");
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-container">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={data} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
