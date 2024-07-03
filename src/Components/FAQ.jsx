// Components
import ListItem from "./ListItem";

const FAQ = (props) => {
  return (
    <div className="p-10">
      <ul>
        {props.questions.map((question, index) => {
          return (
            <ListItem
              onClick={props.toggle}
              singleQuestion={question}
              index={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FAQ;
