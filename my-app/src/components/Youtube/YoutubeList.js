import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
    console.log(props);
  return (
    <div >
    {props.children}
      {YoutubeData.map((item, index) => {
        if (index === 1) {
          console.log(item);
        }
        return (
          <YoutubeItem
            key={item.id}
            author={item.author}
            avatar={item.avatar}
            img={item.img}
            width={500}
            className={index % 2 === 0 ? "even" : "odd"}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;

