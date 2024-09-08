function getRandomTopics() {
  const topics = [
    "news",
    "politics",
    "science",
    "home",
    "work",
    "shop",
    "friends",
    "bank",
    "sports",
    "travel",
    "education",
    "health",
    "technology",
    "entertainment",
    "nature",
    "art",
    "cooking",
    "tv show",
    "AGI",
  ];
  let selectedTopics = [];

  while (selectedTopics.length < 3) {
    const randomIndex = Math.floor(Math.random() * topics.length);
    const topic = topics[randomIndex];
    if (!selectedTopics.includes(topic)) {
      selectedTopics.push(topic);
    }
  }

  return selectedTopics.join(", ");
}

export default getRandomTopics;
