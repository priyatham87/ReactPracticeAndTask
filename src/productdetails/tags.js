export const Tags = (prop) => {
  const { tag } = prop;
  return (
    <>
      {tag.map((each) => {
        return (
          <>
            <h3>{each}</h3>
          </>
        );
      })}
    </>
  );
};
