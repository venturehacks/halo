require 'buildkite_utils'

NAME = :halo
STEPS = []
STEPS << BuildkiteUtils.build_step(name: NAME, target: :build)
STEPS << BuildkiteUtils.k8s_step(
  step: :test,
  name: NAME,
  command: 'yarn test',
  depends_on: "build:build:#{NAME}",
  image: BuildkiteUtils.image(NAME, :build),
  timeout_in_minutes: 20,
  resources: { requests: { cpu: '2', memory: '4Gi' }, limits: { cpu: '2', memory: '4Gi' } },
)

BuildkiteUtils.dump!(steps: STEPS)
