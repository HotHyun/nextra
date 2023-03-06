import Link from "next/link";

const footer = () => {
  return (
    <div className="flex-1">
      <div className="flex justify-between">
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
          <p className="font-extrabold text-gray-500 mb-4">Contents</p>
          <div className="mb-4">
            <Link
              href="/Diet"
              className="font-medium text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
            >
              <p className="text-end">Diet</p>
            </Link>
          </div>
          <Link
            href="/about/Dietary_Control"
            className="font-medium text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
          >
            <p className="text-end">자료실</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default footer;
