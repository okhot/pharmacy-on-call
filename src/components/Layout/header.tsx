import React from "react";
import styles from "../Layout/styles.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.navbar}>
      <div>Logo</div>
      <div className={styles.navbar_links}>
        <Link href="/">Find a Doctor</Link>{" "}
        <Link href="/">Find a hospital</Link>{" "}
        <Link href="/">Find A Pharmacy</Link>
        <Link href="/">Health a - z</Link>
      </div>
      <div>
        <button>Contact Us</button>
      </div>
    </div>
  );
}
