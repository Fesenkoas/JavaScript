import { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";
import Preloader from "../common/Preloader/Preloader";
import AboutMe from "./AboutMe";
import { myFetch } from "./../../utils/constants";

const AboutContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const dateOld = localStorage.getItem("edited");
    const oldUser = JSON.parse(localStorage.getItem("user"));
    const date = new Date();
    const current = `${date.getDate()} ${
      date.getMonth() + 1
    } ${date.getFullYear()}`;

    if (oldUser && dateOld >= current) {
      //if the date is greater than the current one, then we take it from the locale

      setUser(oldUser);
      setImgUrl(`${base_url}/${oldUser.image}`);
      setIsLoading(false);
    } else {
      //if the date is less than or equal to the local one, then we take it from the local
      
      myFetch(`${base_url}/v1/peoples/1`).then((data) => {
        setUser(data);
        setImgUrl(`${base_url}/${data.image}`);
        setIsLoading(false);
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("image", JSON.stringify(imgUrl));
        localStorage.setItem(
          "edited",
          `${date.getDate()} ${date.getMonth() + 2} ${date.getFullYear()}`
        );
      });
    }
  }, []);

  //  useEffect(() => {return () => {
  //   console.log('Game will unmount');
  //   localStorage.clear();
  // }},[])

  return (
    <>{isLoading ? <Preloader /> : <AboutMe User={user} imgUrl={imgUrl} />}</>
  );
};

export default AboutContainer;
