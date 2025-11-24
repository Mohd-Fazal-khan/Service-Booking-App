# MultiServices — Service Booking App

MultiServices is a cross-platform React Native app (Android & iOS) that demonstrates a simple service-booking experience. It includes user authentication, browsing services, booking flow, and booking history screens.

**Repository:** https://github.com/Mohd-Fazal-khan/Service-Booking-App

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Clone the repo](#clone-the-repo)
- [Install dependencies](#install-dependencies)
- [Run (development)](#run-development)
  - [Start Metro](#start-metro)
  - [Android](#android)
  - [iOS](#ios)
- [Scripts](#scripts)
- [Debugging & Hot Reload](#debugging--hot-reload)
- [Testing & Linting](#testing--linting)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Authentication (login screen)
- Browse services with category list and service slider
- Booking flow and confirmation screens
- User profile and bookings history

## Tech Stack

- React Native (0.82.x)
- TypeScript
- React Navigation (native stack & bottom tabs)
- Jest for unit testing
- ESLint + Prettier for code style

## Prerequisites

- Node.js >= 20 (project `engines` requires Node >= 20)
- Yarn or npm
- For Android: Android Studio, Android SDK, device or emulator
- For iOS (macOS only): Xcode, CocoaPods

On Windows (PowerShell) you can run the commands below as-is. For macOS/Linux adjust `brew`/`open` commands as needed.

## Clone the repo

```powershell
git clone https://github.com/Mohd-Fazal-khan/Service-Booking-App.git
cd Service-Booking-App
```

## Install dependencies

Install JS dependencies with npm or Yarn:

```powershell
# Using npm
npm install

# OR using Yarn
yarn install
```

If you plan to run iOS locally (macOS), install CocoaPods dependencies:

```powershell
cd ios
bundle install   # only if you use bundler for CocoaPods
bundle exec pod install
cd ..
```

## Run (development)

### Start Metro

Start the Metro bundler in one terminal:

```powershell
npm start
```

### Android

Make sure an emulator is running or a device is connected, then:

```powershell
npm run android
```

### iOS (macOS only)

With CocoaPods installed and pods synced:

```powershell
npm run ios
```

If you prefer, open the Xcode workspace at `ios/MultiServices.xcworkspace` and run from Xcode.

## Scripts

Key npm scripts defined in `package.json`:

- `npm start` — Start Metro bundler
- `npm run android` — Build & run on Android device/emulator
- `npm run ios` — Build & run on iOS simulator (macOS only)
- `npm run lint` — Run ESLint
- `npm test` — Run Jest tests

## Debugging & Hot Reload

- Fast Refresh is enabled by default; edit components (for example `App.tsx`) to see changes live.
- Android dev menu: `Ctrl + M` (or `adb shell input keyevent 82`), then select Reload or Enable Fast Refresh.
- iOS simulator: press `Cmd + D` or open the simulator menu.

## Testing & Linting

Run unit tests with Jest:

```powershell
npm test
```

Run linting:

```powershell
npm run lint
```

## Project Structure

Top-level folders and key files:

- `App.tsx` — App entry
- `src/` — App source code
  - `components/` — Reusable UI components
  - `screens/` — Screen components grouped by flow
  - `navigation/` — React Navigation stacks and tabs
  - `context/` — Context providers (e.g., auth)
  - `services/` — Utilities and helper services
- `android/`, `ios/` — Native platform projects

This repo follows a simple feature-oriented structure — expand as the codebase grows.


## Contributing

Contributions are welcome. A simple workflow:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/awesome-feature`.
3. Commit your changes and push: `git push origin feat/awesome-feature`.
4. Open a Pull Request describing the change.

Please run tests and lint before opening a PR.

## Issues & Support

- Open GitHub issues for bugs or feature requests.
- For quick help, include logs, OS, Node/npm/yarn versions and screenshots when relevant.

## License

This project does not include a license file by default. If you want to make this project open source, add a `LICENSE` (MIT, Apache-2.0, etc.).

Recommended: add an `MIT` license file if you intend permissive open-source distribution.

---

If you want, I can also:

- add a `LICENSE` file (MIT)
- add more detailed developer setup (Android emulator config, Hermes, ProGuard/release build notes)
- add a CONTRIBUTING.md file and CODE_OF_CONDUCT

Let me know which of those you'd like next.
This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).


### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
