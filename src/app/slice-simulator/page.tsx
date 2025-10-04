import {
  SliceSimulator,
  getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

import { components } from "../../slices";

export default function SliceSimulatorPage({
  searchParams,
}: {
  searchParams?: { state?: string };
}) {
  const { state } = searchParams ?? {};
  const slices = getSlices(state);

  return (
    <SliceSimulator>
      <SliceZone slices={slices} components={components} />
    </SliceSimulator>
  );
}
