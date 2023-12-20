const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyDfrENcWWH4HWiNtD3bI-R9muBbtlvumys");

export async function getCategories(prompt) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt2 = "Optimize the prompt for an NLP project focusing on behavioral nudges. Define the category and relevant indicators from the fixed set of five categories: Energy saved, Air pollution, Water conserved, and Single-Use Plastic Reduced. The behavioral nudge is to 'use jute bags instead of plastic bags,' falling under the category of Single-Use Plastic Reduction. The available indicators include EV sales, smart meter readings, energy requirement vs energy availability, electrical energy sales, per capita energy consumption, individual's carbon footprint, Benzene, CO, NH3, NO2, NOx, O3, PM10, PM2.5, SO2, water consumption, water availability, groundwater level, rainwater harvesting, plastic waste generation per capita, and reduction in plastic packaging.Provide the following outputs in JSON format:1.⁠ ⁠Category: [Energy saved, Air pollution, Water conserved, Single-Use Plastic Reduced]2.⁠ ⁠Top 5 Relevant Indicators: [Indicator1, Indicator2, Indicator3, Indicator4, Indicator5]3.⁠ ⁠Correlation Statements: {Indicator1: Correlation statement for Indicator1 and Single-Use Plastic Reduction.,Indicator2: Correlation statement for Indicator2 and Single-Use Plastic Reduction.,Indicator3: Correlation statement for Indicator3 and Single-Use Plastic Reduction.,Indicator4: Correlation statement for Indicator4 and Single-Use Plastic Reduction.,Indicator5: Correlation statement for Indicator5 and Single-Use Plastic Reduction."+prompt;
  const result = await model.generateContent(prompt2);
  const response = await result.response;
  const text = response.text();
  return text;
}
