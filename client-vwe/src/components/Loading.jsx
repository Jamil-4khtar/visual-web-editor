import "../styles/LoadingAnimation.css";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className="flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="w-4 h-4 bg-white rounded-full dot"
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PageLoader;
