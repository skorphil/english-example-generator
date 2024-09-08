async function getGPTresponse(messages, authToken) {
  try {
    const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authToken,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        temperature: 0.42,
        messages: messages,
      }),
    });

    if (!response.ok) {
      console.log("response not ok: ", await response.json());
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.log("catched error", e.message);
  }
}

export default getGPTresponse;
