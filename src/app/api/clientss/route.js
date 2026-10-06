import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import Client from "@/models/Client";
import { authOptions } from "@/utils/authOptions";
import { validationSession } from "@/src/utils/session";

export async function GET() {
  try {
    validationSession()
    const session = await getServerSession(authOptions);
    const client = await Client.findOne({ email: session.user.email });

    return NextResponse.json(
      { message: "اطلاعات کاربر با موفقیت دریافت شد", role: client.role },
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
