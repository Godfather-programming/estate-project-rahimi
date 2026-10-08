import BuyResidentialPage from "@/templates/BuyResidentialPage";

async function BuyResidential(props) {
  // read the points and troubles of this kind of fetch in your OneNote/Next/part 364
  const res = await fetch(
    "https://estate-project-rahimi.vercel.app/api/profile",
    {
      cache: "no-store",
    }
  );

  
  const data = await res.json();

  if (data.error) return <h3> مشکلی پیش آمده است! </h3>;

  const searchParams = await props.searchParams;

  let finalData = data.profiles.filter((item) => item.published === true);
  if (searchParams.category) {
    const newData = data.profiles.filter(
      (item) =>
        item.category === searchParams.category && item.published === true
    );
    finalData = newData;
  }
  return <BuyResidentialPage finalData={finalData} />;
}

export default BuyResidential;
