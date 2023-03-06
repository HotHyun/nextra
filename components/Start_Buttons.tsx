import Button from "../components/Start_Button";

const Start_Buttons = (props) => {
  return (
    <div className="flex">
      <div className="mr-4 w-1/3">
        <Button
          title={props.title_1}
          description={props.description_1}
          query={props.query_1}
        ></Button>
      </div>
      <div className="ml-4 mr-4 w-1/3">
        <Button
          title={props.title_2}
          description={props.description_2}
          query={props.query_2}
        ></Button>
      </div>
      <div className="ml-4 w-1/3">
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
