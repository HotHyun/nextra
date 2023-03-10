import Image from "next/image";
import Link from "next/link";

const Midde_2xl = () => {
  return (
    <div className="h-auto bg-gradient-to-br from-purple-400 to-violet-500 dark:from-teal-300 dark:to-teal-500 2xl:hidden">
      <div className="h-auto px-12 pb-32 pt-10 max-[792px]:px-10 max-[484px]:px-8">
        <p className="text-4xl text-white font-bold max-[792px]:text-center max-[792px]:text-3xl max-[640px]:text-2xl max-[405px]:text-xl">
          Powerful Diet Documentation
        </p>
        <Link href="/Diet">
          <Image
            className="rounded-[0.5rem] mt-10 mb-32 hover:w-[771px] hover:aspect-[730/411] shadow-xl shadow-gray-600 hover:shadow-xl hover:shadow-gray-800 duration-200 max-[792px]:self-center"
            src="/img/Intro_Image.png"
            alt="This is Web-Intro-Image"
            width={765}
            height={765}
          />
        </Link>
        <div className="flex-col justify-end">
          <p className="text-4xl text-white font-bold text-end max-[792px]:text-center max-[792px]:text-3xl max-[640px]:text-2xl max-[405px]:text-xl">
            Gamification, Web-Interactive
          </p>
          <Link href="/Diet">
            <div className="flex justify-end max-[792px]:justify-center">
              <div className="group flex flex-row justify-between w-[500px] my-10 mb-32">
                <Image
                  className="rounded-[0.5rem] mb-0 my-auto shadow-xl shadow-gray-600 group-hover:shadow-xl group-hover:shadow-gray-800 group-hover:w-[182px] duration-200 max-[528px]:w-[160px] max-[528px]:group-hover:w-[162px] max-[484px]:w-[140px] max-[484px]:group-hover:w-[142px] max-[418px]:w-[120px] max-[418px]:group-hover:w-[122px]"
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
                  className="rounded-[0.5rem] mb-0 my-auto duration-200 shadow-xl shadow-gray-600 group-hover:shadow-xl group-hover:shadow-gray-800 group-hover:w-[182px] max-[528px]:w-[160px] max-[528px]:group-hover:w-[162px] max-[484px]:w-[140px] max-[484px]:group-hover:w-[142px] max-[418px]:w-[120px] max-[418px]:group-hover:w-[122px]"
                  src="/img/ten-score.png"
                  alt="This is Web-Intro-Image"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col justify-start">
          <p className="text-white font-bold text-4xl max-[792px]:text-center max-[792px]:text-3xl max-[640px]:text-2xl max-[528px]:text-xl max-[405px]:text-lg max-[370px]:text-[16px]">
            뭐부터 시작해야 할 지 모르는 사람들을 위해
            <br />
            "순차적"으로 제공하는 가이드
          </p>
          <Link href="/Diet">
            <div className="flex justify-start max-[792px]:justify-center">
              <div className="group flex flex-row justify-between w-[700px] my-10 mb-32">
                <Image
                  className="rounded-[0.5rem] my-auto mb-0 shadow-xl shadow-gray-600 group-hover:shadow-xl group-hover:shadow-gray-800 group-hover:w-[243px] duration-200 max-[693px]:w-[220px] max-[693px]:group-hover:w-[223px] max-[640px]:w-[200px] max-[640px]:group-hover:w-[203px] max-[588px]:w-[180px] max-[588px]:group-hover:w-[183px] max-[528px]:w-[160px] max-[528px]:group-hover:w-[163px] max-[484px]:w-[140px] max-[484px]:group-hover:w-[143px] max-[418px]:w-[120px] max-[418px]:group-hover:w-[123px]"
                  src="/img/Sidebar.png"
                  alt="This is Sidebar image"
                  width={240}
                  height={240}
                ></Image>
                <Image
                  className="rounded-[0.5rem] mb-10 my-auto duration-200 max-[693px]:w-[80px] max-[640px]:w-[70px] max-[588px]:w-[60px] max-[528px]:w-[50px] max-[484px]:w-[40px] max-[370px]:w-[30px]"
                  src="/img/trend.png"
                  alt="This is Web-Intro-Image"
                  width={90}
                  height={90}
                />
                <Image
                  className="rounded-[0.5rem] my-auto mb-0 shadow-xl shadow-gray-600 group-hover:shadow-xl group-hover:shadow-gray-800 group-hover:w-[243px] duration-200 max-[693px]:w-[220px] max-[693px]:group-hover:w-[223px] max-[640px]:w-[200px] max-[640px]:group-hover:w-[203px] max-[588px]:w-[180px] max-[588px]:group-hover:w-[183px] max-[528px]:w-[160px] max-[528px]:group-hover:w-[163px] max-[484px]:w-[140px] max-[484px]:group-hover:w-[143px] max-[418px]:w-[120px] max-[418px]:group-hover:w-[123px]"
                  src="/img/TOC.png"
                  alt="This is Sidebar image"
                  width={240}
                  height={240}
                ></Image>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col justify-end">
          <p className="text-white font-bold text-4xl text-end max-[792px]:text-center max-[792px]:text-3xl max-[640px]:text-2xl max-[528px]:text-xl max-[441px]:text-lg max-[405px]:text-[16px] max-[370px]:text-[15px]">
            건강 관리에 대한 양질의 자료들이 모인 "자료실"
          </p>
          <div className="flex justify-end max-[792px]:justify-center">
            <div className="flex flex-row justify-end my-10">
              <Link href="/about/Dietary_Control">
                <Image
                  className="rounded-[0.5rem] hover:w-[771px] hover:aspect-[730/411] shadow-xl shadow-gray-600 hover:shadow-xl hover:shadow-gray-800 duration-200"
                  src="/img/About.png"
                  alt="This is Sidebar image"
                  width={765}
                  height={765}
                ></Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Midde_2xl;
