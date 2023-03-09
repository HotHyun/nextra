import Link from "next/link";

const footer = () => {
  return (
    <div className="flex-1">
      <div className="md:flex md:justify-between">
        <div>
          <p className="font-medium text-gray-500 mb-4">(주) 가지랩</p>
          <p className="font-medium text-gray-500 mb-4">
            서울 서초구 74길 14 더에셋빌딩 18층
          </p>
          <p className="font-medium text-gray-500 mb-4">
            사업자 등록번호: 436-86-02119 | 대표: 김영인
          </p>
          <p className="font-medium text-gray-500 mb-4">
            Gazi Inc. All rights reserved
          </p>
          <Link
            href="mailto:business@gazilab.co"
            className="font-medium text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
          >
            고객문의: cx@gazilab.co
          </Link>
        </div>
        <div>
          <p className="font-extrabold text-gray-500 md:mb-4 mt-8 mb-2">
            Contents
          </p>
          <div className="md:mb-4 mb-2 md:text-end">
            <Link
              href="/Diet"
              className="font-medium text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 md:text-end text-start"
            >
              Diet
            </Link>
          </div>
          <div className="md:text-end">
            <Link
              href="/about/Dietary_Control"
              className="font-medium text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 md:text-end text-start"
            >
              자료실
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
