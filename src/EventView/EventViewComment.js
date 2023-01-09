import React from "react";
import { useState } from "react";
import { data } from "../../test/testData/comments";

export const EventViewComment = (commentData) => {
  const [comments, setComments] = useState(commentData);
  const { firstName, lastName, date, commentText, commentLikes } =
    comments["comment"]["comments"][0];

  return (
    <div id="eventViewComment">
      <div id="eventViewCommentfirstName">{firstName}</div>
      <div id="eventViewCommentlastName">{lastName}</div>
      <div id="eventViewCommentdate">{date}</div>
      <div id="eventViewCommentcommentText">{commentText}</div>
      <div id="eventViewCommentcommentLikes">{commentLikes}</div>
      <div></div>
    </div>
  );
};

EventViewComment.defaultProps = {
  data,
};
