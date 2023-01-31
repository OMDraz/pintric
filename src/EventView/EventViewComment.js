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
            <div id="eventViewComment" className="text-sm py-6">
              <div>
                <div id="eventViewCommentcommentText">{commentText}</div>
              </div>
              <div>
                <div id="eventViewCommentfirstName">{firstName}</div>
                <div id="eventViewCommentlastName">{lastName}</div>
              </div>
              <div>
                <div id="eventViewCommentdate">{date}</div>
                <div id="eventViewCommentcommentLikes">{commentLikes}</div>
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
