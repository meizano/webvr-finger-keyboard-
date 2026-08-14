/**
 * Configuration File for WebVR 12-Button Finger Keyboard
 * Easily customize layout positions, gaze timers, audio settings, and tracking thresholds.
 */
window.APP_CONFIG = {
  // Screen Display Settings (Floating Screen Output)
  screen: {
    position: { x: 0, y: 1.9, z: -1.6 },  // Comfortable eye-level view
    planeZ: -0.05,                        // Screen backplane position
    buttonZ: 0.08,                         // Action buttons position
    color: '#0f172a',
    borderColor: '#38bdf8'
  },

  // 3D QWERTY Keyboard Settings
  qwerty: {
    position: { x: 0, y: 1.3, z: -1.45 }, // Positioned right below the screen in view
    rotation: { x: -15, y: 0, z: 0 },
    keyWidth: 0.12,
    keyHeight: 0.12,
    keySpacing: 0.14
  },

  // Virtual Floating Hand Rig Settings (Zero Rotations)
  handRig: {
    rightDefaultPosition: { x: 0.75, y: 1.3, z: -1.2 }, // In view on right
    leftDefaultPosition: { x: -0.75, y: 1.3, z: -1.2 },  // In view on left
    defaultRotation: { x: 0, y: 0, z: 0 },              // Zero rotation
    sphereRadius: 0.022
  },

  // Gaze Reticle Dwell Timer Settings
  gaze: {
    timeoutMs: 3000 // 3 Seconds Dwell Timer
  },

  // Hand Tracking & Touch Proximity Settings
  tracking: {
    touchThreshold: 0.045, // 4.5 cm distance between thumb tip and finger segment
    touchCooldownMs: 600   // Debounce cooldown
  },

  // Audio Synthesizer Feedback Settings
  audio: {
    frequencyHz: 587.33, // D5 Note Tone
    durationSec: 0.12,
    volume: 0.15
  }
};
