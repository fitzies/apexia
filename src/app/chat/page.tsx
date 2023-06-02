import Chat from "@/components/Chat";
import Drawer from "@/components/Drawer";

const Page = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-end">
      <Drawer />
      <Chat />
    </div>
  );
};

export default Page;
