"use client";

import { PiShareNetwork } from "react-icons/pi";
import styles from "@/elements/SharingButton.module.scss";

function SharingButton() {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      console.log("URL copied!");
    } catch (error) {
      console.error("Failed to copy URL:", error);
    }
  };

  return (
    <div className={styles.sharing} onClick={handleCopy}>
      <span>
        <PiShareNetwork size={18} />
      </span>

      <span>اشتراک گذاری</span>
    </div>
  );
}

export default SharingButton;

// "use client";

// import { useEffect, useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { PiShareNetwork } from "react-icons/pi";
// import styles from "@/elements/SharingButton.module.scss";

// function SharingButton() {
//   const [url, setUrl] = useState("");
//   //   const path = usePathname();  look in useEffect

//   useEffect(() => {
//     // if (path) {
//     //   setUrl(`https://luminous-frangipane-1b2f8b.netlify.app/${path}`);
//     // } ==> also it is true

//     setUrl(window.location.href);
//   }, []);

//   return (
//     <CopyToClipboard text={url}>
//       <div className={styles.sharing}>
//         <span>
//           {" "}
//           <PiShareNetwork size={18} />{" "}
//         </span>
//         <span> اشتراک گذاری </span>
//       </div>
//     </CopyToClipboard>
//   );
// }

// export default SharingButton;
