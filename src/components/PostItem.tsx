import * as React from "react";

import * as style from "./postItem.module.scss";

interface PostItemProps {
  title: string;
}

const PostItem: React.FC<PostItemProps> = ({ title }) => (
  <div className={style.postItem}>{title}</div>
);

export default PostItem;
