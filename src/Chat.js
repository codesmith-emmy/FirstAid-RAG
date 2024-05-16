"use client";

import React, { useEffect, useState } from "react";

const customer_Id = process.env.REACT_APP_CUSTOMER_ID;
const api_Key = process.env.REACT_APP_VECTARA_API_TOKEN;

export default function Chat() {
  const [chatWidget, setChatWidget] = useState(null);

  useEffect(() => {
    const importAndCreateWidget = async () => {
      const { ReactChatbot } = await import("@vectara/react-chatbot");
      setChatWidget(
        <ReactChatbot
        customerId={customer_Id}
        corpusIds={["3"]}
          apiKey={api_Key}
          title="First Aid Assistant"
          placeholder='Try "How can I help a choking victim?"'
          inputSize="large"
          emptyStateDisplay={"No Chats Loaded Yet"}
          enableStreaming={false}
          isInitiallyOpen={false}
        />
      );
    };

    importAndCreateWidget();
  }, []);

  return <div>{chatWidget}</div>;
}