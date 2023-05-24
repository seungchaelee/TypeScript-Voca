import { useEffect, useState } from "react";
import PropTypes from "prop-types";

interface ILoading {
  text: string;
  speed: number;
}

export default function Loading({ text, speed }: ILoading) {
  const [loadingText, setLoadingText] = useState(text);

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      loadingText === text + "..."
        ? setLoadingText(text)
        : setLoadingText(loadingText + ".");
    }, speed);

    return () => {
      clearInterval(loadingInterval);
    }
  }, [loadingText, speed, text]);

  return (<p className="content">{loadingText}</p>);
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

Loading.defaultProps = {
  text: "Loading",
  speed: 300,
};
