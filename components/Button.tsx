import Link from "next/link";

const Button = (props) => {
  const search = " ";
  const replaceWith = "_";
  const URL_Result = props.title.replaceAll(search, replaceWith);
  return (
    <Link href={`${props.query}/${URL_Result}`}>
      <button className="group w-full bg-white dark:bg-neutral-900 rounded-lg shadow-sm shadow-gray-200 border-gray-200 border mt-4 mr-4 hover:shadow-md hover:shadow-gray-100 hover:border-gray-300 duration-200">
        <div className="py-4 pl-4 pr-2 rounded-lg group-hover:bg-slate-50 duration-200">
          <div className="flex flex-row justify-between">
            {/*ailgn-middle*/}
            <div>
              <p className="text-left font-sans text-gray-600 font-semibold dark:text-white align-middle group-hover:text-gray-700 duration-200">
                {props.description}
              </p>
            </div>
            <img
              className="opacity-30 group-hover:opacity-100"
              src="/img/next.png"
              alt="My Image"
              width={20}
              height={20}
            />
          </div>
        </div>
      </button>
    </Link>
  );
};

export default Button;
