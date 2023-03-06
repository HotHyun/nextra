import { useScoreStore } from "@/hooks/score";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface propsType {
  description: string;
}

const Score_Bar = (props: propsType) => {
  // const [score, setScore] = useState(0);

  const { score, setScore } = useScoreStore();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userIdKey = "user-id";
      let userId = localStorage.getItem(userIdKey);

      if (!userId) {
        const hexDigits = "0123456789abcdef";
        let uuid = "";

        for (let i = 0; i < 32; i++) {
          uuid += hexDigits.charAt(Math.floor(Math.random() * 16));
        }

        // Insert hyphens at the appropriate positions to form a standard UUID
        userId = `${uuid.substring(0, 8)}-${uuid.substring(
          8,
          4
        )}-${uuid.substring(12, 4)}-${uuid.substring(16, 4)}-${uuid.substring(
          20
        )}`;
        localStorage.setItem(userIdKey, userId);
      }
    }
  }, [router.pathname]);

  useEffect(() => {
    const scoreKey = `user-score`;
    let newScore = parseInt(localStorage.getItem(scoreKey) || "0", 10);
    setScore(newScore);
  }, []);

  return (
    <span className="bg-white dark:bg-black">
      <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg dark:rounded-lg shadow-lg dark:shadow-lg dark:shadow-gray-600 mb-2">
        <div>
          <p className="text-center text-black dark:text-white mt-1">
            {props.description}
          </p>
          <h1 className="text-center text-black dark:text-white text-xl font-bold">
            {score}
          </h1>
        </div>
      </div>
    </span>
  );
};

export const getStaticProps = async () => {
  // 정적 생성
  return {
    props: {},
    //revalidate: 1, // 재빌드 되고 배포되는 주기 -> 백엔드 데이터의 추가로 인해 페이지가 바뀌어야하는 경우 새로고침을 하지 않고 페이지가 바뀌는 상황에서 얼마만큼의 주기로 렌더링 할 것인가?
  };
};

export default Score_Bar;
