import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";
import { NextResponse } from "next/server";

const validationSession = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { error: "لطفا ابتدا حساب کاربری ایجاد کنید!" },
      { status: 401 }
    );
  }
};

export { validationSession };
