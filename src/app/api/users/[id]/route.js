import { connectToDB } from "@/utils/database";
import User from "@/models/User";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const user = await User.findOne({ _id: params.id });
    return new Response(JSON.stringify(user), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify(err), {
      status: 500,
    });
  }
};
