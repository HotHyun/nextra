import { useState } from "react";
import toast from "react-hot-toast";
import { useScoreStore } from "@/hooks/score";
import mixpanel from "mixpanel-browser";

interface propsType {
  answer: string;
  problem: string;
  description: string;
}

const Quiz_card = (props: propsType) => {
  const [answer, setAnswer] = useState("");

  const { setScore } = useScoreStore();

  const targetHandler = (event: any) => {
    setAnswer(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    console.log(answer);
  };

  const trackEvent = () => {
    console.log(mixpanel);
    return mixpanel.track("Quiz Card Submit");
  };

  const notify = () => {
    trackEvent();
    const hasVisitedPage = localStorage.getItem(props.description) === "true";
    answer === props.answer
      ? toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="/img/check_light_toast.png"
                    alt=""
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    This is Correct!
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    정답을 맞추셨습니다! 다음 페이지로 넘어가세요!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-purple-500 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                Close
              </button>
            </div>
          </div>
        ))
      : toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="/img/delete_button.png"
                    alt=""
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    This is False
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    정답이 아닙니다! 다시 생각해보세요!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => {
                  toast.dismiss(t.id);
                }}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Close
              </button>
            </div>
          </div>
        ));
    if (answer === props.answer && !hasVisitedPage) {
      let score = parseInt(localStorage.getItem("user-score") || "0", 10);
      score += 10;
      setScore(score);
      localStorage.setItem("user-score", score.toString());
      localStorage.setItem(props.description, "true");
    }
  };

  return (
    <div className="w-full h-100 my-12 bg-gradient-to-br from-purple-400 to-violet-500 dark:from-teal-300 dark:to-teal-500 rounded-xl shadow-lg shadow-gray-300 dark:shadow-gray-700 border-gray-200 border dark:border-none duration-200">
      <div className="py-8 px-10 h-full w-full items-center max-lg:py-6 max-lg:px-8 max-sm:py-4 max-sm:px-6">
        <div>
          <p className="self-start font-bold text-white text-2xl">
            This is Quiz
          </p>
          <div className="h-4"></div>
          <p className="text-white font-bold text-lg">{props.problem}</p>
          <div className="h-4"></div>
          <p className="text-white font-bold text-lg">
            초성에 들어갈 알맞은 말은?
          </p>
        </div>
        <div className="h-4"></div>
        <form onSubmit={submitHandler} className="w-full text-start rounded-lg">
          <input
            type="text"
            maxLength={13}
            onChange={targetHandler}
            placeholder="정답을 적어주세요"
            value={answer}
            className="h-12 w-full px-4 bg-white dark:text-black rounded-md shadow-md shadow-gray-500 hover:shadow-lg hover:shadow-gray-500 focus:shadow-gray-500 focus:shadow-lg duration-200"
          ></input>
          <div className="h-8"></div>
          <div className="flex justify-end">
            {/*bg-white*/}
            <div className="bg-white rounded-md shadow-md shadow-gray-500 hover:shadow-gray-500 hover:shadow-lg duration-200">
              <button
                type="submit"
                className="w-24 h-10 border border-gray-300 rounded-md text-gray-500 hover:text-black duration-200"
                onClick={notify}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Quiz_card;
