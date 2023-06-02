const Bubble = ({ properties }: { properties: ChatBubbleProperties }) => {
  if (properties.sender === "user") {
    return (
      <div className="chat chat-end">
        <div className="chat-bubble">{properties.text}</div>
      </div>
    );
  } else if (properties.sender === "bot") {
    return (
      <div className="chat chat-start">
        <div className="chat-bubble">{properties.text}</div>
      </div>
    );
  } else {
    return <>Null</>;
  }
};

export default Bubble;
