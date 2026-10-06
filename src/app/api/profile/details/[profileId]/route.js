import { NextResponse } from "next/server";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import { validationSession } from "@/utils/session";

export async function GET(req, context) {
  try {
    const id = context.params.profileId;

    validationSession();

    await connectDB();
    const intendedProfile = await Profile.findOne({ _id: id });

    return NextResponse.json(
      {
        message: "اطلاعات پروفایل با موفقیت دریافت شد",
        intendedProfile: intendedProfile,
      },
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
