!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.exampleGenerator = t())
    : (e.exampleGenerator = t());
})(this, () =>
  (() => {
    "use strict";
    var e = {
        d: (t, o) => {
          for (var n in o)
            e.o(o, n) &&
              !e.o(t, n) &&
              Object.defineProperty(t, n, { enumerable: !0, get: o[n] });
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        r: (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        },
      },
      t = {};
    e.r(t), e.d(t, { getExample: () => r });
    const o = async function (e, t) {
        try {
          const o = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + t,
            },
            body: JSON.stringify({
              model: "gpt-3.5-turbo",
              temperature: 0.42,
              messages: e,
            }),
          });
          return (
            o.ok || console.log("response not ok: ", await o.json()),
            await o.json()
          );
        } catch (e) {
          console.log("catched error", e.message);
        }
      },
      n = function () {
        const e = [
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
        let t = [];
        for (; t.length < 3; ) {
          const o = e[Math.floor(Math.random() * e.length)];
          t.includes(o) || t.push(o);
        }
        return t.join(", ");
      },
      a = [
        {
          role: "system",
          content: [
            {
              type: "text",
              text: 'You are an language teacher. Please provide a meaningful complex example (C1 level) for a provided word or phrase with provided meaning. The source word or phrase should be replaced with "***". And add meaning to the end of sentence like "({meaning})"Do not write anything else except the example',
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Please give me another sentence for the word or phrase '''to ramble''' with meaning '''to move aimlessly from place to place''', use the same language.",
            },
          ],
        },
        {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "He spent the afternoon *** through the forest, not really heading anywhere in particular.  (to move aimlessly from place to place)",
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: 'Please give me another sentence for "capital" with a meaning "punishable by death". For the example use these topics: nature, home, science',
            },
          ],
        },
        {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "In ancient societies, stealing sacred objects from the temple was considered a *** crime. (punishable by death)",
            },
          ],
        },
      ];
    async function r(e, t, r) {
      const s = [
          ...a,
          {
            role: "user",
            content: `Please give me another sentence for "${t}" with a meaning "${r}". \n        For the example use these topics ${n()}`,
          },
        ],
        i = await o(s, e);
      return i.choices && i.choices.length > 0
        ? i.choices[0].message.content.trim()
        : "No completion found or error in response data.";
    }
    return t;
  })()
);
