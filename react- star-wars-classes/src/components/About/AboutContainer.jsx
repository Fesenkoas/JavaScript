import { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";
import Preloader from "../common/Preloader/Preloader";
import AboutMe from "./AboutMe";

const AboutContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const dateOld = localStorage.getItem("edited");
    const date = new Date();
    const current = `${date.getDate()} ${
      date.getMonth() + 1
    } ${date.getFullYear()}`;

    if (dateOld >= current) {
      //if the date is greater than the current one, then we take it from the locale
      console.log("Old");
      const oldData = {
        name: localStorage.getItem("name"),
        gender: localStorage.getItem("gender"),
        skin_color: localStorage.getItem("skin_color"),
        hair_color: localStorage.getItem("hair_color"),
        height: localStorage.getItem("height"),
        eye_color: localStorage.getItem("eye_color"),
        mass: localStorage.getItem("mass"),
        birth_year: localStorage.getItem("birth_year"),
      };

      setUser(oldData);
      setImgUrl(localStorage.getItem("image"));
      setIsLoading(false);
    } else {
      //if the date is less than or equal to the local one, then we take it from the local
      console.log("update");
      fetch(`${base_url}/v1/peoples/1`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
          setImgUrl(`${base_url}/${data.image}`);
          setIsLoading(false);

          localStorage.setItem(
            "edited",
            `${date.getDate()} ${date.getMonth() + 2} ${date.getFullYear()}`
          );
          localStorage.setItem("name", user.name);
          localStorage.setItem("gender", user.gender);
          localStorage.setItem("skin_color", user.skin_color);
          localStorage.setItem("hair_color", user.hair_color);
          localStorage.setItem("height", user.height);
          localStorage.setItem("eye_color", user.eye_color);
          localStorage.setItem("mass", user.mass);
          localStorage.setItem("birth_year", user.birth_year);
          localStorage.setItem("image", imgUrl);
        });
    }
  }, []);

  return (
    <>{isLoading ? <Preloader /> : <AboutMe User={user} imgUrl={imgUrl} />}</>
  );
};

export default AboutContainer;
