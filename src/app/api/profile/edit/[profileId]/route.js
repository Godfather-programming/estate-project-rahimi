import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import Client from "@/models/Client";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import { authOptions } from "@/utils/authOptions";
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

export async function PUT(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا ابتدا حساب کاربری ایجاد کنید!" },
        { status: 401 }
      );
    }

    const { information } = await req.json();

    const {
      _id,
      article,
      explanations,
      address,
      phoneNumber,
      price,
      firm,
      category,
      constructionDate,
    } = information;

    if (
      !_id ||
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

    const intendedProfile = await Profile.findOne({ _id });
    if (!intendedProfile) {
      return NextResponse.json(
        { error: "آگهی مورد نظر یافت نشد!" },
        { status: 404 }
      );
    }

    // if (intendedProfile.userId.toHexString() !== client._id.toHexString())
    if (!intendedProfile.userId.equals(client._id)) {
      return NextResponse.json(
        { error: "شما به این آگهی دسترسی ندارید!" },
        { status: 403 }
      );
    }

    const profile = await Profile.findOneAndUpdate(
      { _id },
      {
        $set: information,
      },
      { new: true }
    );

    return NextResponse.json(
      { message: "اطلاعات با موفقیت ویرایش شد", profile },
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
