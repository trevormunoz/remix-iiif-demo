import { json, LoaderFunction } from "@remix-run/node";
import imageServiceJson from "~/templates/info.json";

export const loader:LoaderFunction = async ({request}) => {
    const imageService = JSON.parse(JSON.stringify(imageServiceJson));
// Magic numbers: in reality these would be looked up in the database and supplied via dimensions function
    const imageHeight = 3161;
    const imageWidth = 2401;

    const currentUrl = request.url;
    const id = currentUrl.replace(/\/info\.json/, "");
    const jsonResponse = {id, height: imageHeight, width: imageWidth, ...imageService}
    return json(jsonResponse);
}