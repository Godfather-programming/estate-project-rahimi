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

