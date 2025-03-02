"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "@/styles/homeAbout.module.scss";

const TextOnlySection = () => {
  let title = "Elevated\n Williamsburg\n Living";

  const words = title.split("\n"); // Split the CMS title into words

  return <section id="about-section" className={``}></section>;
};

export default TextOnlySection;
