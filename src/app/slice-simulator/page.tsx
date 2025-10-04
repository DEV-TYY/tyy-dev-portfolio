import {
  SliceSimulator,
  getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

import { components } from "../../slices";

// Define the type explicitly to bypass the wrong one in SliceSimulatorParams
type PageProps = {
  // Make compatible with Next's PageProps which may annotate searchParams as
  // a Promise-like. Use unknown instead of any to avoid ESLint rules.
  searchParams?: Promise<unknown> | undefined;
};

export default function SliceSimulatorPage(props: PageProps) {
  // Cast at runtime to the expected shape so we can read `state` without
  // awaiting `props.searchParams` and causing a static-generation bailout.
  const searchParams = (props.searchParams as unknown as { state?: string }) ?? {};
  const state = searchParams.state;

  // Convert the state string to slices (if provided)
  const slices = getSlices(state);

  return (
    <SliceSimulator>
      <SliceZone slices={slices} components={components} />
    </SliceSimulator>
  );
}
