import Cors from "cors";
import runMiddleware from "../../../utils/api/runMiddleware";
// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

const users = [
  { id: 1, name: "user 1" },
  { id: 2, name: "user 2" },
  { id: 3, name: "user 3" },
];

export default async function userHandler(req, res) {
  //   Run the middleware
  await runMiddleware(req, res, cors);
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      res.status(200).json({ id, name: `User ${id}` });
      break;
    default:
    // res.setHeader("Allow", ["GET", "POST"]);
    // res.status(405).end(`Method ${method} Not Allowed`);
  }
}
