const Groq = require('groq-sdk');

const groq = new Groq();
async function main(prompt) {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
    model: 'llama3-8b-8192',
    temperature: 1,
    max_tokens: 1024,
    top_p: 1,
    stream: false,
    stop: null,
  });

  return chatCompletion.choices[0]?.message?.content || '';
}

// Expose the function to be used by Python
if (require.main === module) {
  (async () => {
    const prompt = process.argv[2];
    const result = await main(prompt);
    console.log(result);
  })();
}

module.exports = main;
