// Footer component for footer section

const Footer = () => {
  return (
    <div className="text-center tracking-wider p-2.5 border-t border-gray-400 shadow-md w-full">
      Created By
      <i class="fa-solid fa-heart text-xs m-1 text-red-500 "></i>
      <a
        className="no-underline"
        href="https://www.linkedin.com/in/yogesh-aithani-064b591a4/"
        target="__blank"
      >
        Yogesh Aithani
      </a>
      <i class="fa-solid fa-copyright m-1 "></i>
      2023{" "}
      <strong>
        Foodie<span className="text-red-800">Fast</span>
      </strong>
    </div>
  );
};

export default Footer;
