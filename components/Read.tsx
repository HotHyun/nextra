import { useScoreStore } from "@/hooks/score";
import mixpanel from "mixpanel-browser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface propsType {
  route: string;
  title: string;
}

const Read = (props: propsType) => {
  const router = useRouter();
  const [view_title, setView_title] = useState("");
  const { score } = useScoreStore();
  if (typeof window !== "undefined") {
    useEffect(() => {
      let nine_two_score = parseInt(
        localStorage.getItem("user-92kg") || "0",
        10
      );
      let eight_eight_score = parseInt(
        localStorage.getItem("user-88kg") || "0",
        10
      );
      let eight_four_score = parseInt(
        localStorage.getItem("user-84kg") || "0",
        10
      );
      if (localStorage.getItem(props.route) === "true") {
        setView_title(`✓  ${props.title}`);
      } else {
        setView_title(`•  ${props.title}`);
      }
      if (localStorage.getItem("user-make-environment") === "3") {
        if (localStorage.getItem("/Diet/92kg/Make_Environment") !== "true") {
          nine_two_score += 1;
        }
        localStorage.setItem("/Diet/92kg/Make_Environment", "true");
        localStorage.setItem("user-92kg", nine_two_score.toString());
      }
      if (localStorage.getItem("user-eating-style") === "4") {
        if (localStorage.getItem("/Diet/92kg/Eating_Style") !== "true") {
          nine_two_score += 1;
        }
        localStorage.setItem("/Diet/92kg/Eating_Style", "true");
        localStorage.setItem("user-92kg", nine_two_score.toString());
      }
      if (localStorage.getItem("user-life-style") === "4") {
        if (localStorage.getItem("/Diet/88kg/Life_Style") !== "true") {
          eight_eight_score += 1;
        }
        localStorage.setItem("/Diet/88kg/Life_Style", "true");
        localStorage.setItem("user-88kg", eight_eight_score.toString());
      }
      if (localStorage.getItem("user-gym") === "5") {
        if (localStorage.getItem("/Diet/84kg/GYM") !== "true") {
          eight_four_score += 1;
        }
        localStorage.setItem("/Diet/84kg/GYM", "true");
        localStorage.setItem("user-84kg", eight_four_score.toString());
      }
      if (localStorage.getItem("user-yoyo") === "1") {
        if (localStorage.getItem("/Diet/84kg/YoYo_Phenomenon") !== "true") {
          eight_four_score += 1;
        }
        localStorage.setItem("/Diet/84kg/YoYo_Phenomenon", "true");
        localStorage.setItem("user-84kg", eight_four_score.toString());
      }
      if (localStorage.getItem("user-92kg") === "2") {
        localStorage.setItem("/Diet/92kg", "true");
      }
      if (localStorage.getItem("user-88kg") === "1") {
        localStorage.setItem("/Diet/88kg", "true");
      }
      if (localStorage.getItem("user-84kg") === "2") {
        localStorage.setItem("/Diet/84kg", "true");
      }
      if (localStorage.getItem("About") === "23") {
        localStorage.setItem("/about/Dietary_Control", "true");
      }
    }, [router.pathname, score]);
  }
  return <p>{`${view_title}`}</p>;
};

export default Read;
