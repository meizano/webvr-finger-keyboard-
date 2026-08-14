/**
 * Configuration File for WebVR 12-Button Finger Keyboard
 * Easily customize layout positions, gaze timers, audio settings, and tracking thresholds.
 */
window.APP_CONFIG = {
  // Screen Display Settings (Floating Screen Output)
  screen: {
    position: { x: 0, y: 2.1, z: -1.6 },  // Eye-level view (Y = 2.1m, Z = -1.6m)
    planeZ: -0.05,                        // Screen backplane position
    buttonZ: 0.08,                         // Action buttons pushed forward to prevent Z-fighting flickering
    color: '#0f172a',
    borderColor: '#38bdf8'
  },

  // 3D QWERTY Keyboard Settings
  qwerty: {
    position: { x: 0, y: 1.5, z: -1.45 }, // Positioned directly in view below screen (Y = 1.5m)
    rotation: { x: -15, y: 0, z: 0 },
    keyWidth: 0.12,
    keyHeight: 0.12,
    keySpacing: 0.14
  },

  // Virtual Floating Hand Rig Settings (Default Positions in View)
  handRig: {
    rightDefaultPosition: { x: 0.75, y: 1.5, z: -1.2 }, // In view on right
    leftDefaultPosition: { x: -0.75, y: 1.5, z: -1.2 },  // In view on left
    defaultRotation: { x: 0, y: 0, z: 0 },
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
