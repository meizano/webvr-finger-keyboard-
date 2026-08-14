/**
 * Configuration File for WebVR 12-Button Finger Keyboard
 * Easily customize layout positions, gaze timers, audio settings, and tracking thresholds.
 */
window.APP_CONFIG = {
  // Screen Display Settings (Floating Screen Output)
  screen: {
    position: { x: 0, y: 2.1, z: -1.6 },  // Raised higher for eye-level comfort
    planeZ: -0.05,                        // Screen backplane position
    buttonZ: 0.08,                         // Action buttons pushed forward to prevent Z-fighting flickering
    color: '#0f172a',
    borderColor: '#38bdf8'
  },

  // 3D QWERTY Keyboard Settings
  qwerty: {
    position: { x: 0, y: 1.45, z: -1.45 },
    rotation: { x: -15, y: 0, z: 0 },
    keyWidth: 0.12,
    keyHeight: 0.12,
    keySpacing: 0.14
  },

  // Virtual Floating Hand Rig Settings (Default Position & Orientation)
  handRig: {
    // Default position when hand is not tracked
    defaultPosition: { x: -0.05, y: 1.25, z: -0.8 },
    // Sideways orientation: Palm open facing user, Thumb at top, Pinky at bottom
    defaultRotation: { x: 10, y: -25, z: 50 },
    sphereRadius: 0.022
  },

  // Gaze Reticle Dwell Timer Settings
  gaze: {
    timeoutMs: 3000 // 3 Seconds Dwell Timer
  },

  // Hand Tracking & Touch Proximity Settings
  tracking: {
    touchThreshold: 0.045, // 4.5 cm distance between thumb tip and finger segment
    touchCooldownMs: 600,  // Debounce cooldown
    androidDelegates: ["GPU", "CPU"] // Delegate fallback order for Android WebGL compatibility
  },

  // Audio Synthesizer Feedback Settings
  audio: {
    frequencyHz: 587.33, // D5 Note Tone
    durationSec: 0.12,
    volume: 0.15
  }
};
