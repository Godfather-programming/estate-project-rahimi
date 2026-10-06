import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import { authOptions } from "@/utils/authOptions";

export async function GET() {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا ابتدا حساب کاربری ایجاد کنید" },
        { status: 404 }
      );
    }

    const { email } = session.user;

    const intendedProfiles = await Profile.find({ email });

    return NextResponse.json(
      { message: "اطلاعات کاربر با موفقیت دریافت شد", intendedProfiles },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است!" },
      { status: 500 }
    );
  }
}
