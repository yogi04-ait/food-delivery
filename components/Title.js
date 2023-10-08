import appLogo from "../app_log.png";

export const Title = () => {
  return (
    <a href="/">
      <img
        className="w-24 hover:scale-105 transition-all duration-200 cursor-pointer"
        src={appLogo}
        alt="Foodie Fast logo"
      />
    </a>
  );
};
