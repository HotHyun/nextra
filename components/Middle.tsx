import Link from "next/link";
import Image from "next/image";

const Middle = () => {
  return (
    <div className="max-2xl:hidden">
      <div>
        <div className="flex">
          <Link href="/Diet" className="flex-none">
            <button className="bg-gradient-to-br from-purple-400 to-violet-500 dark:from-teal-300 dark:to-teal-500 group rounded-[2rem] shadow-xl shadow-gray-300 dark:shadow-gray-700 relative w-[870px] h-auto aspect-[2160/1400]">
              <p className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-start justify-center text-white text-center font-bold mt-7 text-3xl">
                Powerful Diet Documentation
              </p>
              <Image
                className="rounded-[0.5rem] absolute top-12 bottom-0 left-0 z-10 right-0 mx-auto my-auto group-hover:w-[771px] group-hover:aspect-[730/411] shadow-xl shadow-gray-600 group-hover:shadow-xl group-hover:shadow-gray-800 duration-200"
                src="/img/Intro_Image.png"
                alt="This is Web-Intro-Image"
                width={765}
                height={765}
              />
            </button>
          </Link>
          <Link href="/Diet" className="grow ml-8">
            <button className="group w-full h-full rounded-[2rem] shadow-xl shadow-gray-300 dark:shadow-gray-700 relative bg-gradient-to-br from-purple-400 to-violet-500 dark:from-teal-300 dark:to-teal-500">
              <p className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-start justify-center text-white text-center font-bold mt-7 text-3xl">
                Gamification, Web-Interactive
              </p>
              <div className="flex flex-row justify-between w-full h-full px-8">
                <Image
                  className="rounded-[0.5rem] mb-12 my-auto shadow-xl shadow-gray-600 group-hover:shadow-xl group-hover:shadow-gray-800 group-hover:w-[182px] duration-200"
                  src="/img/zero-score.jpeg"
                  alt="This is Web-Intro-Image"
                  width={180}
                  height={180}
                />
                <Image
                  className="rounded-[0.5rem] my-auto align-middle duration-200"
                  src="/img/white-arrow.png"
                  alt="This is Web-Intro-Image"
                  width={25}
                  height={25}
                />
                <Image
                  className="rounded-[0.5rem] mb-12 my-auto duration-200 shadow-xl shadow-gray-600 group-hover:shadow-xl group-hover:shadow-gray-800 group-hover:w-[182px]"
                  src="/img/ten-score.png"
                  alt="This is Web-Intro-Image"
                  width={180}
                  height={180}
                />
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div>
        <div className="w-auto h-[32px]" />
        <div className="flex">
          <Link href="/Diet" className="flex-1 aspect-[16/10.3]">
            <button className="group w-full h-full rounded-[2rem] shadow-xl shadow-gray-300 dark:shadow-gray-700 relative bg-gradient-to-br from-purple-400 to-violet-500 dark:from-teal-300 dark:to-teal-500">
              <p className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-start justify-center text-white text-center font-bold mt-7 text-3xl">
                뭐부터 시작해야 할 지 모르는 사람들을 위해
                <br />
                "순차적"으로 제공하는 가이드
              </p>
              <div className="flex flex-row justify-between w-full h-full px-8">
                <Image
                  className="rounded-[0.5rem] my-auto mb-12 shadow-xl shadow-gray-600 group-hover:shadow-xl group-hover:shadow-gray-800 group-hover:w-[243px] duration-200"
                  src="/img/Sidebar.png"
                  alt="This is Sidebar image"
                  width={240}
                  height={240}
                ></Image>
                <Image
                  className="rounded-[0.5rem] my-auto mb-20 duration-200"
                  src="/img/trend.png"
                  alt="This is Web-Intro-Image"
                  width={90}
                  height={90}
                />
                <Image
                  className="rounded-[0.5rem] my-auto mb-12 shadow-xl shadow-gray-600 group-hover:shadow-xl group-hover:shadow-gray-800 group-hover:w-[243px] duration-200"
                  src="/img/TOC.png"
                  alt="This is Sidebar image"
                  width={240}
                  height={240}
                ></Image>
              </div>
            </button>
          </Link>
          <Link
            href="/about/Dietary_Control"
            className="flex-1 ml-8 aspect-[16/10.3]"
          >
            <button className="group w-full h-full rounded-[2rem] shadow-xl shadow-gray-300 dark:shadow-gray-700 relative bg-gradient-to-br from-purple-400 to-violet-500 dark:from-teal-300 dark:to-teal-500">
              <p className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-start justify-center text-white text-center font-bold mt-7 text-3xl">
                건강 관리에 대한 양질의 자료들이 모인 "자료실"
              </p>
              <div className="flex flex-row justify-center w-full h-full px-8">
                <Image
                  className="rounded-[0.5rem] my-auto mb-12 shadow-xl shadow-gray-600 group-hover:shadow-xl group-hover:shadow-gray-800 group-hover:w-[534px] duration-200"
                  src="/img/About.png"
                  alt="This is Sidebar image"
                  width={530}
                  height={530}
                ></Image>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Middle;
