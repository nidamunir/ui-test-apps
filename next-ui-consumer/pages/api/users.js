import Cors from "cors";
import runMiddleware from "../../utils/api/runMiddleware";

const users = [
  { id: 1, name: "user 1" },
  { id: 2, name: "user 2" },
  { id: 3, name: "user 3*" },
];
// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD", "POST"],
});

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);
  const {
    body: { id, name },
    method,
  } = req;
  switch (method) {
    case "GET":
      res.status(200).json(users);
      break;
    case "POST":
      res.status(200).json([...users, { id, name }]);
      break;
    default:
    // res.setHeader("Allow", ["GET", "POST"]);
    // res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default handler;
