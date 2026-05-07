import "./Tag.css";
import {tagStyle, tagKeyMap} from "..//../constant/common"

const Tag = (props) => {
  const { tagName, selectedTags, selected } = props;
  const key = tagKeyMap[tagName];

  return (
    <>
      <button
        type="button"
        className="tag"
        style={selected ? tagStyle[key] : {}}
        onClick={() => {
          selectedTags(tagName);
        }}
      >
        {tagName}
      </button>
    </>
  );
};

export default Tag;
