const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyDfrENcWWH4HWiNtD3bI-R9muBbtlvumys");

export async function getCategories(prompt) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt2 = "as part of an NLP project, I need to define relevant measurable indicators to monitor the success of a behavioural nudge, for example, use jute bags instead of plastic bags. This nudge comes under the category Single-Use Plastic Reduction. Relevant indicators for the same example would be plastic waste generation per capita, and reduction in plastic packaging.We, however, have a fixed set of categories and relevant indicators. The nudges must belong to one of 5 categories; Energy saved,Air pollution, water conserved, and Single Use Plastic Reduced. Relevant indicators are smart meter readings, energy requirementvs energy availability, electrical energy sales, Per capita energy consumption, Benzene, CO, NH3, NO2, NOx, O3, PM10, PM2.5, SO2, water consumption, water availability, ground water level, plastic waste generation per capita, and reduction in plastic packaging. Define the category and relevant indicators using these constraints and your domain expertise,Clearly, in my output I only want you to give: one of the 5 categories Energy saved, Air pollution, water conserved, and Single-Use Plastic Reduced.  in second  output I want you to print an array format data of top 3 relevenat indictors from pool of indicatorsin third output I want you to give the relevant correlation bewteen these subindicators and the nudges in single  very short sentence. for eahc indicator in array as a string value.here is my input nudge text: Encourage the use of energy-efficient appliances"

  const result = await model.generateContent(prompt2);
  const response = await result.response;
  const text = response.text();
  return text;
}
