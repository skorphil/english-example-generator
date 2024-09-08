import getGPTresponse from "./utils/getGPTresponse.js";
import getRandomTopics from "./utils/getRandomTopics.js";

const initialMessages = [
  {
    role: "system",
    content: [
      {
        type: "text",
        text: 'You are an language teacher. Please provide a meaningful complex example (C1 level) for a provided word or phrase with provided meaning. The source word or phrase should be replaced with "<span id="hidden"></span>". Do not write anything else except the example',
      },
    ],
  },
  {
    role: "user",
    content: [
      {
        type: "text",
        text: "Please give me another sentence for the word or phrase 'to ramble' with meaning 'to move aimlessly from place to place', use the same language.",
      },
    ],
  },
  {
    role: "assistant",
    content: [
      {
        type: "text",
        text: 'He spent the afternoon <span id="hidden"></span> through the forest, not really heading anywhere in particular.',
      },
    ],
  },
];

async function getExample(authToken, word, meaning) {
  const messages = [
    ...initialMessages,
    {
      role: "user",
      content: `Please give me another sentence for "${word}" with a meaning "${meaning}". 
      For the example use these topics ${getRandomTopics()}`,
    },
  ];

  const responseData = await getGPTresponse(messages, authToken);
  if (responseData.choices && responseData.choices.length > 0) {
    const example = responseData.choices[0].message.content.trim();
    return example;
  } else {
    return "No completion found or error in response data.";
  }
}

export { getExample };
