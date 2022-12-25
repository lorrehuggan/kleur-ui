import Elements from "@components/elements";
import Headline from "@components/headline";
import Palette from "@components/palette";
import Search from "@components/search";
import Layout from "@layout/main";
import { useColor } from "@utils/globalState/color";
import { vendor } from "@utils/vendor";
import { useEffect } from "react";

export default function Home() {
  const { setColor } = useColor((state) => state);

  useEffect(() => {
    setColor(vendor.getRandomColor());
  }, [setColor]);

  return (
    <>
      <Layout title="Kleur" description="">
        <Headline />
        <Search />
        <Palette />
        <Elements />
      </Layout>
    </>
  );
}
