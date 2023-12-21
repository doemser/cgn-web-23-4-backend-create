import dbConnect from "../../../db/connect";
import Joke from "../../../db/models/Joke";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const jokes = await Joke.find();
    return response.status(200).json(jokes);
  }
  if (request.method === "POST") {
    // send joke with POST fetch/request.
    const jokeData = request.body;
    // use jokeData to create joke in Database
    await Joke.create(jokeData);
    return response.status(201).json({ status: "Yup! Joke created!" });
  }
}
