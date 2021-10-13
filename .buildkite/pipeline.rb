require 'buildkite_utils'

NAME = :halo
STEPS = []
STEPS << BuildkiteUtils.build_step(name: NAME, target: :build, arch: :arm64)
STEPS << BuildkiteUtils.k8s_step(
  step: :test,
  name: NAME,
  command: 'yarn test:ci --maxWorkers=2',
  depends_on: "build:build:#{NAME}:arm64",
  image: BuildkiteUtils.image(NAME, :build, arch: :arm64),
  timeout_in_minutes: 20,
  resources: { requests: { cpu: '2', memory: '4Gi' }, limits: { cpu: '2', memory: '4Gi' } },
  node_selector: { pool: :test, 'kubernetes.io/arch' => 'arm64' },
)

BuildkiteUtils.dump!(steps: STEPS)
