export const Review = (prop) => {
  const { rev } = prop;
  return (
    <>
      {rev.map((each) => {
        return (
          <>
            <h3>Review:{each.reviewer}</h3>
            <h3>Rating:{each.rating}</h3>
          </>
        );
      })}
    </>
  );
};
