import React, { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({
  prompt,
  creator,
  tag,
  handleTagClick,
  handleEdit,
  handleDelete,
}: any) => {
  const [copy, setCopied] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(prompt);
    setTimeout(() => {
      setCopied("");
    }, 3000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex gap-5 items-center">
          <Image
            src={creator?.image}
            width={50}
            height={50}
            alt="user_image"
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {creator?.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">{creator?.email}</p>
          </div>
          <div className="copy_btn" onClick={handleCopy}>
            <Image
              src={
                copy === prompt
                  ? "/assets/icons/tick.svg"
                  : "/assets/icons/copy.svg"
              }
              width={20}
              height={20}
              alt="copy"
            />
          </div>
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{prompt}</p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(tag)}
      >
        {tag}
      </p>
    </div>
  );
};

export default PromptCard;
