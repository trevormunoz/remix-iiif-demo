import {LoaderFunction } from "@remix-run/node";
// @ts-ignore 7016 — missing type information for iiif-processor
import IIIF from "iiif-processor";
import { createReadStream } from "fs";

function streamResolver({id}: {id: string, baseUrl?: string}) {
    let imagePath = "public/images/" + id + ".jpg";
    return createReadStream(imagePath);
}

export const loader:LoaderFunction = async ({request}) => {

  let processor = new IIIF.Processor(request.url, streamResolver, {pathPrefix: "/assets/"});
    try {
        let result = await processor.execute();
        return new Response(result.body, {
            headers: {
              "Content-Type": result.contentType
            }
        })
      } catch (err) {
        console.error(err);
      }
}