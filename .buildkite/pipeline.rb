# frozen_string_literal: true

require 'buildkite_utils'

NAME = :halo

COMMON_TEST_CONFIG = {
  step: :test,
  depends_on: "build:build:#{NAME}:arm64",
  image: BuildkiteUtils.image(NAME, :build, arch: :arm64),
  timeout_in_minutes: 20,
  resources: { requests: { cpu: '2', memory: '4Gi' }, limits: { cpu: '2', memory: '4Gi' } },
  node_selector: { pool: :test, 'kubernetes.io/arch' => 'arm64' },
  env: {
    BUILDKITE_BRANCH: BuildkiteUtils::BRANCH,
  },
}.freeze

# rubocop:disable Style/MutableConstant
STEPS = []
# rubocop:enable Style/MutableConstant

STEPS << BuildkiteUtils.build_step(name: NAME, target: :build, arch: :arm64)

STEPS << BuildkiteUtils.k8s_step(
  name: NAME,
  command: 'yarn test:ci --maxWorkers=3',
  **COMMON_TEST_CONFIG,
)

STEPS << BuildkiteUtils.k8s_step(
  name: :'datadog-metrics',
  command: 'yarn size:report',
  **COMMON_TEST_CONFIG,
)

BuildkiteUtils.dump!(steps: STEPS)
