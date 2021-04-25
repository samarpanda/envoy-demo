# Envoy Demo

Envoy config files are in `envoy-configs` directory. `packages` directory contains 4 sample APIs.

## [Install Envoy in macOs](https://www.getenvoy.io/install/envoy/macos/)

- `brew tap tetratelabs/getenvoy`
- `brew install envoy`
- `envoy --version`

## Start / Run all applications

- Install all dependencies `yarn install`
- Start all applications `yarn start`

## Envoy quick Commands

- Validate envoy file: `envoy --config-path http.yaml --mode validate`
- Run envoy locally: `envoy --config-path http.yaml`

## Demo

- [localhost:8080](http://localhost:8080) Refresh multiple times to see output responded from any of the 4 applications running on 1111, 2222, 3333 & 4444.
