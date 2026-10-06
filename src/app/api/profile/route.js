import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { Types } from "mongoose";
import Client from "@/models/Client";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import { validationSession } from "@/utils/session";

export async function POST(req) {
  try {
    const session = await getServerSession(req);
    validationSession();

    await connectDB();

    const data = await req.json();

    const {
      article,
      explanations,
      address,
      phoneNumber,
      price,
      firm,
      category,
      constructionDate,
    } = data;

    if (
      !article ||
      !explanations ||
      !address ||
      !phoneNumber ||
      !price ||
      !firm ||
      !category ||
      !constructionDate
    ) {
      return NextResponse.json(
        { error: "لطفا اطلاعات را به طور کامل وارد کنید!" },
        { status: 400 }
      );
    }

    const client = await Client.findOne({ email: session.user.email });
    if (!client) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد!" },
        { status: 404 }
      );
    }

    const recordedProfile = await Profile.create({
      ...data,
      userId: new Types.ObjectId(client._id),
    });

    return NextResponse.json(
      { message: "آگهی با موفقیت ثبت شد!" },
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

export async function GET() {
  try {
    await connectDB();

    // const profiles = await Profile.find().select("-userId");
    const profiles = await Profile.find();

    return NextResponse.json(
      {
        message: "اطلاعات با موفقیت دریافت شد",
        profiles,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است!" },
      {
        status: 500,
      }
    );
  }
}
