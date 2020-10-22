import { lazy, Suspense } from "react";
import { dependencies } from "../package.json";
import Head from "next/head";
import RemoteAppBar from "./RemoteAppBar";

export default function Home() {
  return (
    <div>
      <Head>
        <script src="http://localhost:8080/remoteEntry.js" />
      </Head>
      index
      <RemoteAppBar />
    </div>
  );
}
