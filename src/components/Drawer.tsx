const Drawer = () => {
  return (
    <div className="w-[18%] h-full bg-base-200 rounded-r-xl flex flex-col items-center py-4 px-6">
      <button className="btn btn-ghost border border-neutral w-full">
        New Agent
      </button>
      <button className="btn btn-ghost mt-auto w-full">Account</button>
    </div>
  );
};

export default Drawer;
