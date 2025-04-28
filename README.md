# PQMobile

> **Note:** This project is a prototype. The final production version of PQMobile will implement Post-Quantum Cryptography (PQC) for all core encryption and security features. This prototype demonstrates user experience, theming, and offline-first design, but does not yet include PQC-based cryptography.

A modern, secure, and offline-first mobile vault for your private files and credentials. Built with React Native, Expo, and TypeScript.

---

## Features

- **Offline-First:** All encryption and decryption happens on-device. No internet required for core functionality.
- **Cohesive Dark Theme:** Consistent, vibrant UI with blue and green accents for a modern look.
- **Animated Splash & Onboarding:** Smooth onboarding and splash screens with custom icons and transitions.
- **Secure Login & Sign Up:**
  - Email + 6-digit PIN authentication
  - PIN visibility toggle
  - Input validation for security (no sequential/repeating PINs)
  - **Prototype Notice:** Current version uses standard cryptography for demonstration only. Production will use Post-Quantum Cryptography (PQC) for all sensitive data.
- **Navigation:**
  - Animated screen transitions
  - Seamless flow between onboarding, login, sign up, and home
- **React Native Paper & Expo:**
  - Uses Paper for UI components and theming
  - Expo for fast prototyping and cross-platform support

---

## Screenshots

| Sign Up | Login |
|--------|-------|
| ![Sign Up](screenshots/signup.png) | ![Login](screenshots/login.png) |

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo Go](https://expo.dev/client) app on your mobile device (for fast prototyping)

### Installation
```bash
# Clone the repo
 git clone <your-repo-url>
 cd Prototype_PQMobile

# Install dependencies
 npm install
# or
yarn install
```

### Running the App
```bash
# Start the Expo dev server
npm start
# or
yarn start
```

- Scan the QR code in your terminal with the Expo Go app on your device.
- For a production-like JS bundle:
  ```bash
  expo start --no-dev --minify
  ```

### Building for Android/iOS
- **Expo Go:** No native build needed for prototyping.
- **EAS Build (cloud):**
  ```bash
  npm install -g eas-cli
  eas build --platform android
  eas build --platform ios
  ```
- **Local Native Build:**
  - Requires Android Studio/Xcode and SDK setup.
  - Run: `npx expo run:android` or `npx expo run:ios`

---

## Project Structure

```
Prototype_PQMobile/
├── App.tsx              # Main app entry, navigation stack
├── screens/             # All screen components (Login, SignUp, Splash, Home, etc)
├── components/          # Reusable UI components
├── assets/              # Images, icons, fonts
├── types.ts             # Shared TypeScript types
├── package.json         # Dependencies and scripts
└── README.md            # This file
```

---

## Customization & Theming
- Change accent colors in the `theme` object in each screen (see `LoginScreen.tsx`, `SignUpScreen.tsx`).
- Modify gradients in `LinearGradient` for a different background feel.
- UI components use [React Native Paper](https://callstack.github.io/react-native-paper/).

---

## Troubleshooting
- **Dependency Warnings:**
  - If you see a warning about `react-native-svg` version mismatch, run:
    ```bash
    npx expo install --fix
    ```
- **Metro Bundler Issues:**
  - Try clearing the cache: `npm start -- --reset-cache`
- **Native Build Errors:**
  - Ensure Android/iOS SDKs are installed and `ANDROID_HOME` is set.

---

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License
[MIT](LICENSE)
