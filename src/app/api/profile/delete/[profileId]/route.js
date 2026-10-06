import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import Client from "@/models/Client";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import { validationSession } from "@/utils/session";

export async function DELETE(req, context) {
  try {
    validationSession();

    const session = await getServerSession(req);

    await connectDB();

    const client = await Client.findOne({ email: session.user.email });
    if (!client) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد!" },
        { status: 404 }
      );
    }

    const profileId = await context.params.profileId;

    const intendedProfile = await Profile.findOne({ _id: profileId });

    // if (userId !== client._id.toHexString()) 
    // if (!intendedProfile.userId.equals(client._id)) {
    //   return NextResponse.json(
    //     { error: "شما به این آگهی دسترسی ندارید!" },
    //     { status: 403 }
    //   );
    // }

    const deletedItem = await Profile.findOneAndDelete({ _id: profileId });

    return NextResponse.json(
      { message: "آگهی با موفقیت حذف شد", deletedItem },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است!" },
      { status: 500 }
    );
  }
}
