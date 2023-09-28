import appLogo from "../app_log.png";

export const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={appLogo} alt="Foodie Fast logo" />
    </a>
  );
};
