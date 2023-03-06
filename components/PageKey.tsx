import { useScoreStore } from "@/hooks/score";
import React, { useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";

const PageKey = (props) => {
  const { ref, inView } = useInView();
  const { setScore } = useScoreStore();
  const docPageKey = `${props.route}`;

  const handleInView = useCallback(() => {
    const hasVisitedDocPage = localStorage.getItem(docPageKey) === "true";
    if (!hasVisitedDocPage) {
      const scoreKey = `user-score`;
      const make_environment = "user-make-environment";
      const eating_style = "user-eating-style";
      const life_style = "user-life-style";
      const gym = "user-gym";
      const yoyo = "user-yoyo";
      const about = "About";
      let make_score = parseInt(
        localStorage.getItem(make_environment) || "0",
        10
      );
      let eating_score = parseInt(
        localStorage.getItem(eating_style) || "0",
        10
      );
      let life_score = parseInt(localStorage.getItem(life_style) || "0", 10);
      let gym_score = parseInt(localStorage.getItem(gym) || "0", 10);
      let yoyo_score = parseInt(localStorage.getItem(yoyo) || "0", 10);
      let about_score = parseInt(localStorage.getItem(about) || "0", 10);

      let score = parseInt(localStorage.getItem(scoreKey) || "0", 10);
      score += 10;
      if (props.route?.includes("/Diet/92kg/Make_Environment/")) {
        make_score += 1;
        localStorage.setItem(make_environment, make_score.toString());
      }
      if (props.route?.includes("/Diet/92kg/Eating_Style/")) {
        eating_score += 1;
        localStorage.setItem(eating_style, eating_score.toString());
      }
      if (props.route?.includes("/Diet/88kg/Life_Style/")) {
        life_score += 1;
        localStorage.setItem(life_style, life_score.toString());
      }
      if (props.route?.includes("/Diet/84kg/GYM/")) {
        gym_score += 1;
        localStorage.setItem(gym, gym_score.toString());
      }
      if (props.route?.includes("/Diet/84kg/YoYo_Phenomenon/")) {
        yoyo_score += 1;
        localStorage.setItem(yoyo, yoyo_score.toString());
      }
      if (props.route?.includes("/about/Dietary_Control/")) {
        about_score += 1;
        localStorage.setItem(about, about_score.toString());
      }
      if (props.route === "/Diet") {
        score -= 10;
      }
      localStorage.setItem(scoreKey, score.toString());
      setScore(score);
      localStorage.setItem(docPageKey, "true");
      return true;
    }
  }, []);

  useEffect(() => {
    if (inView) {
      handleInView();
    }
  }, [inView]);

  return <div ref={ref} />;
};

export default PageKey;
