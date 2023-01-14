import React, { useEffect, useState } from "react";
import SectionWrapper from "../../../components/UI/SectionWrapper/SectionWrapper";
import UserCard from "../../../components/UI/Cards/UserCard/UserCard";

const Banner = () => {
  const [userInfo, setUserInfo] = useState([]);

  const fetchUser = async () => {
    const res = await fetch("data/userData.json");
    const data = await res.json();
    setUserInfo(data);
  };

  useEffect(() => {
    fetchUser().catch((err) => console.error(err));
  }, []);

  return (
    <header className="bg-orange-mist">
      <SectionWrapper className="custome-container">
        <div className="text-center">
          <h1>The Professional Network</h1>
          <p className="text-base lg:text-2xl">
            for people in tech with robust work profiles at its core.
          </p>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <button>Continue with google</button>
          <span className="mt-4 mb-2">or</span>
          <button>Signup w/Email</button>
          <p className="mt-4">Don’t miss out on your favourite username ;)</p>
        </div>
        <div className="mt-10 md:mt-16 flex flex-wrap-reverse sm:flex-wrap md:flex-wrap-reverse gap-2 md:gap-6 justify-center">
          {userInfo &&
            userInfo.map((user, i) => (
              <UserCard key={user._id} userInfo={user} />
            ))}
        </div>
      </SectionWrapper>
    </header>
  );
};

export default Banner;
