"use client";

import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ProfileEditPage from "@/templates/ProfileEditPage";

function Edit() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [role, setRole] = useState(null);
  const { profileId } = useParams();
  const fetchData = async () => {
    const res = await fetch(`/api/profile/edit/${profileId}`);
    const data = await res.json();
    setData(data.intendedProfile);
  };

  const fetchClient = async () => {
    const res = await fetch("/api/clientss");
    const data = await res.json();
    if (res.status === 200) {
      setRole(data.role);
    } else {
      toast.error(data.error);
    }
  };
  useEffect(() => {
    fetchData();
    fetchClient();
  }, []);

  const session = useSession();
  const email = session?.data?.user?.email;
  if (!session) router.push("/signin");
  if (data && email && role)
    return (
      <>
        <ProfileEditPage
          data={data}
          profileId={profileId}
          email={email}
          role={role}
        />
        <Toaster />
      </>
    );
}

export default Edit;
