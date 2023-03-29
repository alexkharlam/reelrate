export default async function handler(req, res) {
  const { type, content, page } = req.query;
  const API_KEY = process.env.API_KEY;
  const baseUrl = process.env.BASE_API_URL;

  const requestPage = page ? `page=${page}` : "";
  console.log(requestPage);

  try {
    const requestUrl = `${baseUrl}/${type}/${content}?api_key=${API_KEY}&language=en-US&${requestPage}`;
    const response = await fetch(requestUrl);
    const data = await response.json();
    if (response.ok) res.status(200).json(data);
    if (!response.ok) throw new Error(data.status_message);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
