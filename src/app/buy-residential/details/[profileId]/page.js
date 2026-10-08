import ProfileDetailsPage from "@/templates/ProfileDetailsPage";
import { headers } from "next/headers";

async function Details(props) {
  const { profileId } = await props.params;

  const requestHeaders = await headers();

  const res = await fetch(
    `https://estate-project-rahimi.vercel.app/api/profile/details/${profileId}`,
    {
      method: "GET",
      headers: {
        cookie: requestHeaders.get("cookie") ?? "",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    console.error("Profile API error:", res.status);
    return <h3>مشکلی پیش آمده است! لطفاً بعداً امتحان کنید.</h3>;
  }

  const data = await res.json();

  if (!data.intendedProfile) {
    return <h3>مشکلی پیش آمده است! لطفاً بعداً امتحان کنید.</h3>;
  }

  return <ProfileDetailsPage intendedProfile={data.intendedProfile} />;
}

export default Details;

export const generateMetadata = async (props) => {
  const { profileId } = await props.params;

  const requestHeaders = await headers();

  const resSeo = await fetch(
    `https://estate-project-rahimi.vercel.app/api/admin/${profileId}`,
    {
      method: "GET",
      headers: {
        cookie: requestHeaders.get("cookie") ?? "",
      },
      cache: "no-store",
    }
  );

  if (!resSeo.ok) {
    return {
      title: "جزئیات آگهی",
      description: "مشاهده جزئیات آگهی",
    };
  }

  const { SEO } = await resSeo.json();

  return {
    title: SEO?.title ?? "جزئیات آگهی",
    description: SEO?.description ?? "مشاهده جزئیات آگهی",
    other: {
      phoneCall: SEO?.phoneCall ?? "",
    },
  };
};





// import ProfileDetailsPage from "@/templates/ProfileDetailsPage";
// import connectDB from "@/utils/connectDB";
// import { headers } from "next/headers";

// async function Details(props) {
//   const { profileId } = await props.params;

//   const res = await fetch(
//     `https://estate-project-rahimi.vercel.app/api/profile/details/${profileId}`,
//     { method: "GET", headers: headers() }
//   );
//   const data = await res.json();

//   if (!data.intendedProfile) {
//     return <h3> مشکی پیش آمده است! لطفا بعدا امتحان کنید. </h3>;
//   }

//   return <ProfileDetailsPage intendedProfile={data.intendedProfile} />;
// }

// export default Details;

// export const generateMetadata = async (props) => {
//   const { profileId } = await props.params;

//   await connectDB();

//   const resSeo = await fetch(
//     `https://estate-project-rahimi.vercel.app/api/admin/${profileId}`,
//     {
//       method: "GET",
//       headers: headers(),
//     }
//   );
//   const { SEO } = await resSeo.json();

//   return {
//     title: SEO.title,
//     description: SEO.description,
//     other: { phoneCall: SEO.phoneCall },
//   };
// };
