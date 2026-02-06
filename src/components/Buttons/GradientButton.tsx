'use client';
const GradientButton = ({
  text,
  targetId,
}: {
  text: string;
  targetId: string;
}) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <button
      className="gradientBorderMask relative mt-6 rounded-full px-4 py-3 text-sm font-semibold text-white shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 md:px-6 md:text-base"
      aria-label={text}
      onClick={handleClick}
    >
      {text}
      <span className="absolute left-0 h-[25px] w-full bg-gradient-to-r from-indigo-500 to-pink-500 blur-2xl hover:opacity-80"></span>
    </button>
  );
};

export default GradientButton;
