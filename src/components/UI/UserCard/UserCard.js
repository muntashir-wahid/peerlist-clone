import React from "react";

const UserCard = ({ userInfo }) => {
  const { name, picture, job } = userInfo;

  return (
    <article className="p-2 bg-white rounded-md flex cursor-pointer gap-2 hover:shadow-lg hover:border-green-bright border-white border transition-all">
      <figure>
        <img className="w-14 h-14 rounded-full" src={picture} alt={name} />
      </figure>
      <div className="hidden md:block">
        <p>{name}</p>
        <p>{job}</p>
      </div>
    </article>
  );
};

export default UserCard;
