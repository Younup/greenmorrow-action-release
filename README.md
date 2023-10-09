
## introduction

This pipeline will bump the version in package.json, create a new tag version, update the changelog and push the commit with --follow-tags! This package uses the same pipeline for versioning.

## parameters

```sh
   secret_input:
    description: "github secret"
    required: true
  webhook_url:
    description: "webook url"
    required: false
    default: 'none'
  publish_type:
    description: 'publish type, allowed values: library, services, none'
    required: false
    default: 'none'
  gh_pat:
    description: "full accesss auth token"
    required: false
  release_as:
    description: 'bump type, patch, minor, major on current branch'
    required: true
    default: 'patch'
  push_to:
    description: "push to new branch after releasing, allowed values: (same as repos branches)"
    required: false
    default: 'none'
  pre_action:
    description: "pre actions, allowed values: checkout"
    default: 'checkout'
    required: false
  should_build:
    description: "npm run build automatically to generate dist"
    default: 'false'
    required: false
```

## usage example

you can implement this custom action in your service by adding :

```yaml
# GITHUB_TOKEN -> the token automatically generated for the ci job. only allows you to access the current repo, whereas GH_PAT is a custom secret we set that allows a package to fetch a registry from a different repo 🙂 You can generate it from the settings in github
# GH_PAT -> the secret containing the org token we generated that has more permissions
name: ci-release

permissions:
  actions: write
  checks: write
  contents: write
  deployments: write
  id-token: write
  issues: write
  discussions: write
  packages: write
  pages: write
  pull-requests: write
  repository-projects: write
  security-events: write
  statuses: write

on:
  workflow_dispatch:
    inputs:
      release_as:
        description: 'bump version'
        required: true
        default: 'patch'
        type: choice
        options:
        - patch
        - minor
        - major

    push_to:
        description: 'branch to push to'
        required: true
        default: 'develop'
        type: choice
        options:
        - develop

jobs:
    release:
        runs-on: ubuntu-22.04
        steps:
            - name: release package
              uses: Younup/greenmorrow-action-release@v0.0.1
              with:
                  publish_type: '' # library if library
                  webhook_url: "${{ secrets.WEBHOOK_URL }}"
                  secret_input: "${{ secrets.GITHUB_TOKEN }}"
                  gh_pat: "${{ secrets.GH_PAT }}"
                  pre_action: "checkout"
                  should_build: "true"
                  release_as: "${{ input.release_as }}"
                  push_to: 'none' # have more than 1 env : allowed values : develop, staging, production

```

