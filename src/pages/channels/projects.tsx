import React from "react";
import blogThumbnail from "assets/works/blog.png";
import snakeThumbnail from "assets/snake-thumbnail.png";
import papyrusThumbnail from "assets/papyrus.png";
import techpit1Thumbnail from "assets/techpit-1.png";
import techpit2Thumbnail from "assets/techpit-2.png";
import eggCutterThumbnail from "assets/egg-cutter.png";

import { More } from "components/styles";
import Message from "components/domains/channel/message";
import Page from "components/shared/templates/page";
import Papyrus from "components/domains/works/papyrus";
import Blog from "components/domains/works/blog";
import { Thumbnail } from "components/styles/index";
import Modal from "components/shared/templates/modal";

type Work = {
  key: string;
  title: string;
  body: string;
  thumbnails: string[];
  onClick: () => void;
};

const works: Work[] = [
  {
    key: "blog",
    title: "My Blog implemented by Gatsbyjs",
    body: "My handmade blog built with Gatsby.js . The main topics are engineering, career, travel, and so on.",
    thumbnails: [blogThumbnail],
    onClick: () => {
      Modal.show({ title: "Work", content: <Blog /> });
    },
  },
  {
    key: "techpit",
    title: "Online Programming Learning Materials(Techpit)",
    body: "Publish materials on e-learning platform for programming. I have published 2 courses which is about React Hook API and its state management.",
    thumbnails: [techpit1Thumbnail, techpit2Thumbnail],
    onClick: () => {
      doConfirm(
        () => (location.href = "https://www.techpit.jp/courses/category/React"),
      );
    },
  },
  {
    key: "papyrus",
    title: "Papyrus - Markdown Sticky Note Desktop Application.",
    body: "Desktop Markdown Memo application(Development Halt). It has no features to organize (category, note...) It is for organizing in your mind.",
    thumbnails: [papyrusThumbnail],
    onClick: () => {
      Modal.show({ title: "Work", content: <Papyrus /> });
    },
  },
  {
    key: "egg-cutter",
    title: "Egg Cutter - Online Audio Editor",
    body: "A simple tool to cut audio files online with only a frontend implementation. You can select points and cut audio files at those points while playing your audio file.",
    thumbnails: [eggCutterThumbnail],
    onClick: () => {
      doConfirm(() => (location.href = "https://egg-cutter.net/"));
    },
  },
  {
    key: "snake-game",
    title: "React Snake Game",
    body: "Well-known Snake Game implemented with React. you can play it on web.",
    thumbnails: [snakeThumbnail],
    onClick: () => {
      doConfirm(
        () => (location.href = "https://github.com/version-1/react-snake-game"),
      );
    },
  },
];

const doConfirm = (cb: () => void) =>
  confirm("You are going to leave this site. Do you want to continue?") && cb();

const customStyles = {
  "snake-game": {
    width: "auto",
    height: "320px",
  },
};

const Component: React.FC = () => {
  return (
    <Page title="Projects">
      {works.map((it) => {
        const style = customStyles[it.key as keyof typeof customStyles] || {};
        return (
          <Message
            title={it.title}
            body={
              <>
                <p>{it.body}</p>
                <div onClick={it.onClick}>
                  {it.thumbnails.map((thumbnail, index) => (
                    <Thumbnail
                      style={{ marginRight: "8px", ...style }}
                      src={thumbnail}
                      alt={`Thumbnail of ${it.title} ${index + 1}`}
                    />
                  ))}
                </div>
                <p>
                  <More onClick={it.onClick}>more...</More>
                </p>
              </>
            }
          />
        );
      })}
    </Page>
  );
};

export default Component;
