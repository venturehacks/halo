import { v1 } from '@datadog/datadog-api-client';
// tslint:disable-next-line: no-submodule-imports
import { Series } from '@datadog/datadog-api-client/dist/packages/datadog-api-client-v1/models/Series';
import fs from 'fs';
import slugify from 'slugify';

interface SizeLimitEntry {
  name: string;
  passed: boolean;
  size: number;
}

const BUILDKITE_BRANCH = process.env.BUILDKITE_BRANCH || 'master';
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

// tslint:disable-next-line: no-console
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
    // tslint:disable-next-line: no-console
    console.log('✅  Pushed metrics to datadog.');
    // tslint:disable-next-line: no-console
    console.log(JSON.stringify(data));
  })
  // tslint:disable-next-line: no-console
  .catch((error: any) => console.error(error));
