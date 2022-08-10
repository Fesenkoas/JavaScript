import Contact from "./Contact";
import { base_url } from "../../utils/constants";
import { useEffect, useState } from "react";
import { myFetch } from "./../../utils/constants";

const ContactContainer = () => {
  const [planets, setPlanets] = useState([{ name: "Loading........." }]);

  useEffect(() => {
    const dateOld = localStorage.getItem("edited");
    const test = localStorage.getItem("planets");
    const date = new Date();
    const current = `${date.getDate()} ${
      date.getMonth() + 1
    } ${date.getFullYear()}`;

    if (test && dateOld >= current) {
      //if the date is greater than the current one, then we take it from the locale
      console.log("old contact");
      setPlanets(JSON.parse(localStorage.getItem("planets")));
    } else {
      //if the date is less than or equal to the local one, then we take it from the local
      console.log("new contact");
      myFetch(`${base_url}/v1/planets`).then((data) => {
        setPlanets(data);
        localStorage.setItem("planets", JSON.stringify(data));
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
    <>
      <Contact planets={planets} />
    </>
  );
};

export default ContactContainer;
