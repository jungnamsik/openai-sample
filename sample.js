const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config(); // npm i dotenv
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
  async function ask(message) {
      const completion = await openai.createCompletion({
        // id: 'cmpl-6s2IZCPo3RfcmgQXeh4bfA93KtzNP',
        model: "text-davinci-003",
        // prompt: "오늘 날짜를 알려주세요?",
        prompt: message,
        max_tokens:1000,
        temperature:0.9,
      });


      console.log(message);
  
      return (completion.data.choices[0].text);
    //   console.log(completion);
  }
  
  module.exports = ask;


//   model="code-davinci-002",
//   prompt="",
//   temperature=0,
//   max_tokens=150,
//   top_p=1.0,
//   frequency_penalty=0.0,
//   presence_penalty=0.0,
//   stop=["#", ";"]
