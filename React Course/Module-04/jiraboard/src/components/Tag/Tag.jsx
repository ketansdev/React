import "./Tag.css";

const Tag = (props) => {
  const { tagName, selectedTags } = props;
  console.log(tagName, selectedTags)
  return (
    <>
      <button
        type="button"
        className="tag"
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
