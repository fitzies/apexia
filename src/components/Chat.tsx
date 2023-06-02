import { submit } from "@/util/actions";
import Bubble from "./Bubble";

const dummyChats: ChatBubbleProperties[] = [
  { text: "hello bro", sender: "bot" },
  { text: "hello bro", sender: "user" },
];

const Chat = () => {
  return (
    <div className="w-full h-full p-12 flex flex-col">
      <div className="flex flex-col gap-2">
        {dummyChats.map((bubble, i) => (
          <Bubble properties={bubble} key={i} />
        ))}
      </div>
      <form className="mt-auto flex gap-4" action={submit}>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full outline-none border-neutral"
          name="input"
        />
        <button
          className="btn w-[10%] btn-outline border-neutral"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
