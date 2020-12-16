import { Link } from "gatsby";
import * as React from "react";

import * as style from "./PostItem.module.scss";

interface PostItemProps {
  title: string;
  path: string;
}

const PostItem: React.FC<PostItemProps> = ({ title, path }) => (
  <div className={style.postItem}>
    <Link to={path}>{title}</Link>
  </div>
);

export default PostItem;
