require 'buildkite_utils'

STEPS = []
STEPS << BuildkiteUtils.k8s_step(
  step: :test,
  name: :halo,
  image: 'node:10',
  timeout_in_minutes: 20,
  command: <<-EOF
    yarn install
    yarn test
    yarn run build
  EOF
)

BuildkiteUtils.dump!(steps: STEPS)
