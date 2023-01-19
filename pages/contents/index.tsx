import DataGrid from "@/components/contents/DataGrid";
import DataGridTitle from "@/components/contents/DataGridTitle";
import Filter from "@/components/contents/Filter";
import ChannelContentLayout from "@/layouts/ChannelContent";
import { usePortfolioList } from "@/models/portfolio";
import { Portfolio } from "@/types/portfolio.interface";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const { list } = usePortfolioList();
  const [portfolioList, setPortfolioList] = useState<Portfolio[]>();

  useEffect(() => {
    setPortfolioList(list);
  }, [list]);

  return (
    <div>
      <Head>
        <title>BSSM SH</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChannelContentLayout
        title={<DataGridTitle />}
        filter={<Filter />}
        datagrid={
          <DataGrid
            portfolioList={portfolioList}
            setPortfolioList={setPortfolioList}
          />
        }
      />
    </div>
  );
}
