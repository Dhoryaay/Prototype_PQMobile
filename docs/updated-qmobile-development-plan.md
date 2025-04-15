# Post-Quantum Secure Vault called PQMobile
*The Future-Proof App for Your Private Files*

## Project Overview  
PQMobile is a cross-platform mobile app that encrypts and hides local files using NIST-approved post-quantum cryptography (PQC). Users can securely store, manage, and decrypt files offline, with optional cloud backup via Supabase Storage.  

**Target Audience**: Professionals, privacy advocates, and small businesses needing secure file storage.  
**Unique Value Proposition**: Quantum-safe encryption for local files with seamless cloud integration and intuitive "vault" model.  
**Platforms**: iOS and Android.  

---

## Tech Stack  
- **Framework**: Expo (React Native)  
- **Language**: TypeScript  
- **Navigation**: Expo Router  
- **UI Library**: React Native Paper  
- **PQC Library**: OpenSSL with liboqs (CRYSTALS-Kyber)  
- **Symmetric Encryption**: AES-256-GCM for file content
- **Backend/Auth**: Supabase (authentication, storage, real-time sync)  
- **Key Storage**: React Native Keychain (hardware-backed storage)  
- **Testing**: Jest with React Native Testing Library  
- **Deployment**: Expo Go (development), EAS (production), GitHub Actions (CI/CD)
- **Hosting**: GitHub

---

## Expo Setup  
- **Base Configuration**: Initialize project, configure Metro bundler.  
- **Dependencies**: Install core libraries (Supabase, React Native Paper, Expo FileSystem, React Native Keychain).  
- **PQC Integration**: Eject to bare workflow for OpenSSL/liboqs.  
- **Environment Variables**: Store Supabase credentials securely.  

---

## Authentication Flow  
- **Sign-in/Sign-up**: Email/password or OAuth (Google/GitHub) via Supabase Auth.  
- **Session Management**: Persist auth state with secure storage.  
- **Biometric Lock**: Face ID/Touch ID for app access (core feature, not optional).
- **PIN Fallback**: Secure PIN code as alternative to biometrics.
- **Error Handling**: User-friendly error messages via toast notifications.  

---

## Core Features (MVP)  

### File Encryption & Storage
- **Hybrid PQC Encryption**: 
  1. Select file via file picker or gallery integration
  2. Generate symmetric key (AES-256)
  3. Encrypt file using AES-GCM
  4. Encrypt AES key using CRYSTALS-Kyber (Post-Quantum)
  5. Store: `Encrypted file + Encrypted AES key`
- **Hide Files**: Remove selected files from gallery while storing encrypted versions securely.
- **Local Storage**: Save encrypted files using Expo FileSystem.
- **Metadata Protection**: Encrypt metadata before storing.
- **Chunking**: Process large files in 1MB chunks for efficiency.

### File Management  
- **Vault View**: Display encrypted files with clean, intuitive gallery interface (React Native Paper Cards).
- **In-App Viewing**: Decrypt and view files directly within the app.
- **Gesture Actions**: Swipe to delete/rename files.
- **Offline Access**: Works fully without internet.

### Security  
- **Key Management**: Store PQC and AES keys in hardware-backed storage.
- **Auto-Lock**: Lock app after 5 minutes of inactivity.
- **Data Integrity**: Verify encrypted file integrity during decryption.

### User Experience
- **Clean, Modern UI**: Simple navigation with intuitive vault metaphor.
- **Simple Onboarding**: Quick tutorial explaining the vault concept.
- **File Picker Integration**: Seamless selection from gallery/files.
- **Magic Flow**: Tap file → "Move to Vault" → File vanishes from gallery → Access via biometrics.

---

## Phase 2 Features (Should-Have)

### Cloud Sync (Optional)  
- **Backup/Restore**: Upload PQC-encrypted files to Supabase Storage.  
- **Real-time Sync**: Sync metadata changes across devices.  
- **End-to-End Encryption**: Ensure Supabase only stores encrypted data.  
- **Conflict Resolution**: Implement version control for updates.

### Enhanced Security Options
- **Folder-level Encryption**: Organize and encrypt entire folders.
- **Self-destruct Mode**: Delete data after failed authentication attempts.
- **Decoy Login**: Alternative login that shows different content.

### UI Enhancements
- **Dark Mode**: Theming via React Native Paper.
- **Cloud Sync Toggle**: Allow users to enable/disable cloud sync.
- **Advanced Settings**: Algorithm selection and security preferences.

---

## Premium Features (Could-Have)

### Advanced Security & Sharing
- **Secure File Sharing**: Share encrypted files via QR codes or NFC.
- **Encrypted Key Backup**: Export/backup keys via QR codes or secure cloud storage.
- **Remote Wipe**: Delete vault contents remotely if device is lost.
- **Metadata Stripping**: Remove identifying metadata from photos and videos.

---

## Mobile Considerations  
- **Performance**: Optimize with Web Workers, benchmark on low-end devices.  
- **Permissions**: Request file access gracefully with explanations.  
- **User Feedback**: Use toast notifications and progress indicators.  
- **Battery Efficiency**: Minimize background processing.  

---

## Testing  
- **Unit Tests**: Verify encryption/decryption logic, file chunking.  
- **Integration Tests**: Test UI flows, Supabase sync.  
- **Security Tests**: Ensure key storage security and end-to-end encryption.  
- **Device Testing**: Validate performance on low-end devices (iPhone 8, budget Androids).  

---

## Deployment  
- **Development**: Use Expo Go for rapid testing.  
- **Production**: Build via EAS, submit to app stores.  
- **CI/CD**: Automate testing and builds with GitHub Actions.  
- **Beta Testing**: Release via TestFlight (iOS) and Google Play Beta.  
- **Monitoring**: Use expo-sentry for crash and performance tracking.  

---

## Development Timeline  
- **Week 1-2**: Expo setup, TypeScript config, Supabase integration, basic UI.  
- **Week 3-4**: PQC implementation, hybrid encryption, local storage.  
- **Week 5-6**: File management, vault interface, hide/unhide functionality.  
- **Week 7-8**: Biometric authentication, secure file viewing, error handling.  
- **Week 9-10**: Security features, app settings, onboarding.  
- **Week 11-12**: Testing, optimization, beta testing.  
- **Week 13**: Deployment, post-launch monitoring.  

---

## Success Metrics  
- **Security**: 100% of encrypted files remain undecryptable without keys.  
- **Performance**: Encrypt/decrypt 1GB file in <10s on mid-range devices.  
- **User Adoption**: 500 beta users within 3 months.  
- **Reliability**: 99.9% uptime, no crashes during encryption/decryption.  

---

## Marketing Positioning
- **Core Message**: "Post-Quantum Secure Vault – The Future-Proof App for Your Private Files"
- **Key Selling Points**:
  - Post-quantum security (future-proof against quantum computing threats)
  - Works entirely offline (no cloud dependency for core functionality)
  - Intuitive "vault" model for hiding sensitive content
  - Biometric protection for easy yet secure access

---

## User Benefits
- **Perceived Security**: Hidden files feel more secure to users
- **Error Prevention**: Prevents accidental sharing or deletion of sensitive files
- **Familiar Model**: Users already understand vault-style apps
- **Clean Experience**: No confusing encrypted files visible in galleries

---

## Risks & Mitigations  
- **PQC Integration Complexity** → Test early, document process.  
- **Performance on Low-End Devices** → Use hybrid encryption, optimize with Web Workers.  
- **User Confusion with PQC** → Simplify UI, provide onboarding tutorial.  
- **Supabase Security Concerns** → Ensure end-to-end encryption, encrypt metadata.  
- **UX Complexity** → Focus on "magic" feel, make encryption invisible to users.
