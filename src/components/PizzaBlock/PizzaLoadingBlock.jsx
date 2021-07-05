import ContentLoader from "react-content-loader";

function PizzaLoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="142" cy="114" r="115" />
      <rect x="0" y="283" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="246" rx="6" ry="6" width="280" height="26" />
      <rect x="0" y="380" rx="6" ry="6" width="86" height="45" />
      <rect x="148" y="380" rx="20" ry="20" width="125" height="49" />
    </ContentLoader>
  );
}

export default PizzaLoadingBlock;
