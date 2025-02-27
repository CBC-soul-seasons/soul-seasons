import { NextApiRequest, NextApiResponse } from "next";
import { addUser } from "@/lib/add";

class Handler {
  async handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
      const mockData = {
        name: "John Doe",
        feelings: 7,
        result: "positive",
        feedBack: "Great experience!",
      };

      try {
        await addUser(mockData);
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(500).json({ error: "Firestore write failed", details: error });
      }
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  }
}

export default new Handler().handle;
