import Navbar from "./Navbar";
import { NextSeo } from "next-seo";

const Layout = (props) => {
  return (
    <div className="site-wrapper">
      <NextSeo
        title={props.title ? `${props.title} ` : ""}
        description={props.description ? `${props.description} ` : ""}
        openGraph={{
          url: "https://www.url.ie/a",
          title: props.title,
          description: props.description,
          images: [
            {
              url: "/static/site-image.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "/static/site-image.png",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            { url: "/static/site-image.png" },
            { url: "/static/site-image.png" },
          ],
          site_name: "Ahmed Khattab",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
