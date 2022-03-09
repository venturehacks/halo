/* eslint-disable no-console */
import { v1 } from '@datadog/datadog-api-client';
import { Series } from '@datadog/datadog-api-client/dist/packages/datadog-api-client-v1/models/Series';
import fs from 'fs';
import slugify from 'slugify';

interface SizeLimitEntry {
  name: string;
  passed: boolean;
  size: number;
}

const { BUILDKITE_BRANCH, DD_API_KEY } = process.env;

if (DD_API_KEY == null) {
  console.error(`DD_API_KEY is required but not set.`);
  process.exit();
}

if (BUILDKITE_BRANCH == null) {
  console.error(`BUILDKITE_BRANCH is required but not set.`);
  process.exit();
}

const bundleSizeData = fs.readFileSync(
  './packages/halo/datadog-size-limit.json',
  {
    encoding: 'utf-8',
  },
);
const bundleSize: SizeLimitEntry[] = JSON.parse(bundleSizeData);
const now = Math.floor(Date.now() / 1000);

const series: Series[] = bundleSize.map(({ name, passed, size }) => ({
  host: 'buildkite.halo',
  metric: `build.metric.bundle.size`,
  type: 'count',
  points: [[now, size]],
  tags: [
    `branch:${BUILDKITE_BRANCH}`,
    `category:${slugify(name).toLowerCase()}`,
    `passed:${passed}`,
  ],
}));

console.log(series);

const configuration = v1.createConfiguration();
const apiInstance = new v1.MetricsApi(configuration);

const params: v1.MetricsApiSubmitMetricsRequest = {
  body: {
    series,
  },
};

apiInstance
  .submitMetrics(params)
  .then((data: any) => {
    console.log('✅  Pushed metrics to datadog.');
    console.log(JSON.stringify(data));
  })
  .catch((error: any) => console.error(error));
