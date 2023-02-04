import { useRouter } from "next/router";
import React from "react";



export default function Loader() {

  const router = useRouter();
  const [loader, setLoader] = React.useState({
    inHTML: true,
    isActive: true,
  });

  React.useEffect(() => {
    setLoader({
      isActive: true,
      inHTML: true,
    });

    setTimeout(() => {
      setLoader({
        isActive: false,
        inHTML: true,
      });
    }, 1000);

    setTimeout(() => {
      setLoader({
        isActive: false,
        inHTML: false,
      });
    }, 1500);
  }, [router.asPath]);

  return (
    loader.inHTML && (
      <div className={`custom-loader ${loader.isActive && "active"}`}>
        <img src={"/assets/images/preloader.gif"} alt="Loader" />
      </div>
    )
  );
}
