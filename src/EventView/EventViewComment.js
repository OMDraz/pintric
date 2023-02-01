import React from "react";
import { useState } from "react";
import { commentData } from "../dummyData/comments";

export const EventViewComment = ({ commentData }) => {
  const commentsArray = commentData.comments;
  const [comments, setComments] = useState(commentsArray);

  return (
    <div>
      {comments.map(
        ({ firstName, lastName, date, commentText, commentLikes }) => {
          return (
            <div>
              <div class="relative grid grid-cols-1 gap-4 p-1 mb-8 border rounded-lg bg-white shadow-lg">
                <div class="relative flex gap-4">
                  <div class="flex flex-col w-full">
                    <div class="flex flex-row justify-between">
                      <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">
                        {firstName} {lastName}
                      </p>
                      <a class="text-gray-500 text-xl" href="#">
                        <i class="fa-solid fa-trash"></i>
                      </a>
                    </div>
                    <p class="text-gray-400 text-sm">{date}</p>
                  </div>
                </div>
                <p class="-mt-4 text-gray-500">{commentText}</p>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

EventViewComment.defaultProps = {
  commentData,
};
