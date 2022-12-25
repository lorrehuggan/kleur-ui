import Footer from "@components/footer";
import Header from "@components/header";
import Head from "next/head";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  description: string;
}

const Layout = ({ children, title, description }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-[calc(100vh-8rem)]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
