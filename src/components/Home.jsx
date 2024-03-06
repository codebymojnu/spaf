import { useEffect, useState } from "react";
import newsData from "../newsData/newsData.json";
import DonateForm from "./DonateForm";
import HeroSection from "./HeroSection";
import NewsTicker from "./NewsTricker";

export default function Home() {
  const [loadNews, setLoadNews] = useState([]);

  useEffect(() => {
    setLoadNews(newsData);
  }, []);
  return (
    <>
      <NewsTicker newsData={loadNews} />
      <DonateForm />
      <HeroSection />
    </>
  );
}
