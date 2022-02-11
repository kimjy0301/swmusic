export const Bar = ({ animationDuration, progress }: any) => {
  return (
    <div
      className="bg-blue-400 h-2 w-full left-0 top-16 z-50 fixed"
      style={{
        marginLeft: `${(-1 + progress) * 100}%`,
        transition: `margin-left ${animationDuration}ms linear`,
      }}
    ></div>
  );
};
