const { createClient } = require("@deepgram/sdk");

const transcribeUrl = async () => {
  // The API key we created in step 3
  const deepgramApiKey = "779300794a7dc1952bab9d57cbbf7be7aabcf3d5";

  // Hosted sample file
  const url = "https://storage.googleapis.com/iallo-stg-assets/sample_call_recordings/b6511839-219f-4532-b32c-a20bdbfedaa1.wav";

  // Initializes the Deepgram SDK
  const deepgram = createClient(deepgramApiKey);

  const { result, error } = await deepgram.listen.prerecorded.transcribeUrl(
    { url },
    {  language: "en",
    punctuate: true,
    smart_format: true,
    diarize: true,
    model: "nova-2",
    sample_rate:  8000,
    encoding: "linear16", },
  );



  if (error) throw error;
  if (!error) console.dir(result, {depth: null});

};

transcribeUrl();
