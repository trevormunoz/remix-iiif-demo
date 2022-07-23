import { useEffect, useState } from "react"
import OpenSeaDragon from "openseadragon";

// Adapted from https://github.com/samvera-labs/clover-iiif/blob/main/src/components/ImageViewer/OSD.tsx
export default function OSDViewer({uri, source}: {uri: string, source: unknown}) {
    let parsedUrl = new URL(uri);
    const [osdUri, setOSDUri] = useState("");
    const config = {
        id: "seadragon",
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
    }

    useEffect(() => {
        if (uri !== osdUri) setOSDUri(uri);
      }, []);

    useEffect(() => {
        let tiles = [];
        tiles.push(JSON.parse(source as string));
        OpenSeaDragon(config).addTiledImage({
            tileSource: uri //`${parsedUrl.protocol}//${parsedUrl.host}${parsedUrl.pathname}`
         })
        
    }, [osdUri])

    return (
        <div id="seadragon" style={{"height": 800}}></div>
    )
}