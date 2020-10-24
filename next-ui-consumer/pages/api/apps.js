import Cors from "cors";
import runMiddleware from "../../utils/api/runMiddleware";

const users = [
  { id: 1, name: "app 1" },
  { id: 2, name: "app 2" },
  { id: 3, name: "app 3" },
];
// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

async function handler(req, res) {
  //   Run the middleware
  await runMiddleware(req, res, cors);

  // Rest of the API logic
  res.json(users);
}

export default handler;
