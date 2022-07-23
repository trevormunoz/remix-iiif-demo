import { LoaderFunction, redirect } from "@remix-run/node"

export const loader:LoaderFunction = async ({request, params}) => {
    if (!params.filename) {
        const redirectLocation = new URL("info.json", request.url).toString();
        return redirect(redirectLocation);
    }
}