import ProfileDetailsPage from "@/templates/ProfileDetailsPage";
import connectDB from "@/utils/connectDB";
import { headers } from "next/headers";

async function Details(props) {
  const { profileId } = await props.params;

  const res = await fetch(
    `https://luminous-frangipane-1b2f8b.netlify.app/api/profile/details/${profileId}`,
    { method: "GET", headers: headers() }
  );
  const data = await res.json();

  if (!data.intendedProfile) {
    return <h3> مشکی پیش آمده است! لطفا بعدا امتحان کنید. </h3>;
  }

  return <ProfileDetailsPage intendedProfile={data.intendedProfile} />;
}

export default Details;

export const generateMetadata = async (props) => {
  const { profileId } = await props.params;

  await connectDB();

  const resSeo = await fetch(
    `https://luminous-frangipane-1b2f8b.netlify.app/api/admin/${profileId}`,
    {
      method: "GET",
      headers: headers(),
    }
  );
  const { SEO } = await resSeo.json();

  return {
    title: SEO.title,
    description: SEO.description,
    other: { phoneCall: SEO.phoneCall },
  };
};
