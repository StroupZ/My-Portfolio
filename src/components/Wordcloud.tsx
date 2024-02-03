import React, { useEffect, useState } from "react";
import TagCloud from "TagCloud";

const Wordcloud = () => {
  const [isLoading, setLoad] = useState(true);

  const container: string = ".tagcloud";

  const texts: string[] = [
    "NextJS",
    "React",
    "GraphQL",
    "Hardhat",
    "NodeJS",
    "TypeScript",
    "HTML",
    "CSS",
    "JavaScript",
    "EthersJS",
    "Solidity",
    "TailwindCSS",
    "SQL",
    "Git",
  ];

  const options: object = {
    radius: 300,
    maxSpeed: "normal",
    initSpeed: "slow",
    direction: 135,
    keep: true,
  };

  useEffect(() => {
    if (isLoading) {
      TagCloud(container, texts, options);
      setLoad(false);
    }
  });

  return (
    <div className="text-sphere">
      <span className="tagcloud"></span>
    </div>
  );
};

export default Wordcloud;
