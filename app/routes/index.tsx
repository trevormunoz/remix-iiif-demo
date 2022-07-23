import OSDViewer from "~/components/OSD.client";
import { ClientOnly, json } from "remix-utils";
import { LoaderFunction} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

const testUrl = "http://localhost:3000/assets/lomax/";

export const loader:LoaderFunction = async () => {
  const infoResponse = await fetch(testUrl)
  const info = await infoResponse.json()
  return json(info);
}


export default function Index() {
  const infoResponse = useLoaderData();
  return (
    <main>
      <h1>node-iiif remix demo</h1>
      <img src={`${testUrl}full/,250/0/default.webp`} />
      <ClientOnly>
        {() => <OSDViewer uri={testUrl} source={infoResponse} />}
      </ClientOnly>
    </main>
  );
}
