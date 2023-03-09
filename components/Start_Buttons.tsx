import Button from "../components/Start_Button";

interface propsType {
  title_1: string;
  description_1: string;
  query_1: string;
  title_2: string;
  description_2: string;
  query_2: string;
  title_3: string;
  description_3: string;
  query_3: string;
}

const Start_Buttons = (props: propsType) => {
  return (
    <div className="md:flex">
      <div className="md:mr-4 md:w-1/3 w-full">
        <Button
          title={props.title_1}
          description={props.description_1}
          query={props.query_1}
        ></Button>
      </div>
      <div className="md:ml-4 md:mr-4 md:w-1/3 w-full">
        <Button
          title={props.title_2}
          description={props.description_2}
          query={props.query_2}
        ></Button>
      </div>
      <div className="md:ml-4 md:w-1/3 w-full">
        <Button
          title={props.title_3}
          description={props.description_3}
          query={props.query_3}
        ></Button>
      </div>
    </div>
  );
};

export default Start_Buttons;
