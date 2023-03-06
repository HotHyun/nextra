import { useState } from "react";

interface propsType {
  src: string;
}

const Doc_Image = (props: propsType) => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && <div className="h-[530px]"></div>}
      <div className="w-full mt-5 mb-10">
        <img
          className="object-contain rounded-[1.5rem] shadow-lg shadow-gray-400 dark:shadow-gray-600"
          src={props.src}
          alt="This is Doc_Image"
          onLoad={() => setLoading(false)}
        ></img>
      </div>
    </div>
  );
};

export default Doc_Image;
