import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = ({ data }) => {
  const { link, content } = data;
  return (
    <li className="mb-4">
      <Link className="p-2 block hover:underline transition-all" to={link}>
        {content}
      </Link>
    </li>
  );
};

export default FooterLinks;
