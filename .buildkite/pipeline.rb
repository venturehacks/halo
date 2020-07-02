require 'buildkite_utils'

NAME = :halo
STEPS = []
STEPS << BuildkiteUtils.build_step(name: NAME, target: :build)
STEPS << BuildkiteUtils.k8s_step(
  step: :test,
  name: NAME,
  command: 'yarn test',
  depends_on: "build:test:#{NAME}",
  image: BuildkiteUtils.image(NAME, :build),
)

BuildkiteUtils.dump!(steps: STEPS)
