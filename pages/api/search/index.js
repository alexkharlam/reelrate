export default async function handler(req, res) {
  const { type, query, page } = req.query;
  const API_KEY = process.env.API_KEY;
  const baseUrl = process.env.BASE_API_URL;

  try {
    const requestUrl = `${baseUrl}/search/${type}?api_key=${API_KEY}&language=en-US&page=${page}&query=${query}&include_adult=false`;
    const response = await fetch(requestUrl);
    const data = await response.json();
    if (response.ok) res.status(200).json(data);
    if (!response.ok) throw new Error(data.status_message);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
