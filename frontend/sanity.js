/*--------- CONNECTION TO SANITY BACKEND FROM THE FRONT END ---------*/
import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "2l25j28y",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

export default client;
