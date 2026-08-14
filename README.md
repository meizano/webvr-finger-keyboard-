# ⌨️ WebVR 12-Button Finger Segment Keyboard (Mixed Reality & Gaze 3s)

Aplikasi WebVR & Mixed Reality (MR) interaktif untuk pengetikan teks menggunakan **12 tombol yang dipetakan pada segmen jari tangan kanan** (tanpa ibu jari), mulai dari tombol **A** pada ujung jari telunjuk hingga **L** pada pangkal jari kelingking.

Didesain fleksibel untuk dapat dijalankan pada **Google Cardboard (Android/iOS)**, **Native WebXR Headset (Meta Quest 3/Pro)**, maupun diuji langsung di **PC Desktop/Laptop** menggunakan webcam dan *Gaze Control*.

---

## 🌟 Fitur Utama (Key Features)

1. **12-Button Finger Segment Mapping (A–L)**:
   * **Jari Telunjuk**: A (Ujung/Tip), B (Tengah/Mid), C (Pangkal/Base)
   * **Jari Tengah**: D (Ujung), E (Tengah), F (Pangkal)
   * **Jari Manis**: G (Ujung), H (Tengah), I (Pangkal)
   * **Jari Kelingking**: J (Ujung), K (Tengah), L (Pangkal)
   * **Ujung Ibu Jari (*Thumb Tip*)**: Bertindak sebagai pengetuk (*actuator*) sentuhan 3D.

2. **Floating Right Hand Fallback (Tangan Virtual Melayang)**:
   * Secara default (sebelum tangan terdeteksi kamera), model tangan virtual 3D beserta 12 tombol segmen jari ditampilkan mengapung tepat di depan muka dengan orientasi menyamping (ibu jari di atas, kelingking di bawah).
   * Begitu tangan asli terdeteksi oleh kamera/sensor, tombol segmen jari berpindah menempel pada koordinat 3D sendi jari tangan asli secara real-time.

3. **AR.js Style Webcam Passthrough (Mixed Reality)**:
   * Kamera webcam PC atau HP di-stream *full-screen* secara transparan di belakang scene 3D A-Frame, memberikan pengalaman *Mixed Reality Passthrough* bawaan browser.
   * Dilengkapi tombol UI `MR Passthrough: ON / OFF` dan `Camera: Rear / Front`.

4. **Gaze Control (3-Second Dwell Timer)**:
   * Kursor tatapan (*fuse reticle ring*) di pusat pandangan mata dengan waktu penahanan **3 detik (3000 ms)**.
   * Menatap tombol mana pun selama 3 detik memicu pengetikan otomatis dengan animasi lingkaran kursor yang mengecil mulus.

5. **Layar Melayang 3D & Keyboard QWERTY Synchronized**:
   * Layar teks melayang berada tepat di level pandangan mata (`y = 2.1m`) dengan tombol aksi `SPACE`, `BACK`, dan `CLEAR`.
   * Keyboard QWERTY 3D diletakkan di bawah layar. Menekan tombol segmen jari (A–L) akan membuat huruf terkait pada keyboard QWERTY ikut **berkilau terang (glowing cyan)**.

6. **Audio Feedback & PC Keyboard Fallback**:
   * Synthesizer nada bip lembut via Web Audio API saat huruf terketik.
   * Penguji di PC dapat menggunakan mouse, Gaze 3s, webcam hand tracking, atau keyboard fisik PC (`A`–`Z`, `Space`, `Backspace`).

---

## 🖐️ Pemetaan Tombol Segmen Jari (Finger Key Map)

| Jari | Segmen Jari | Tombol | Landmark MediaPipe / WebXR Joint |
| :--- | :--- | :---: | :--- |
| **Jari Telunjuk** | Ujung (Distal) | **A** | Landmark 8 (`index_finger_tip`) |
| | Tengah (Intermediate) | **B** | Landmark 7 (`index_finger_pip`) |
| | Pangkal (Proximal) | **C** | Landmark 6 (`index_finger_mcp`) |
| **Jari Tengah** | Ujung (Distal) | **D** | Landmark 12 (`middle_finger_tip`) |
| | Tengah (Intermediate) | **E** | Landmark 11 (`middle_finger_pip`) |
| | Pangkal (Proximal) | **F** | Landmark 10 (`middle_finger_mcp`) |
| **Jari Manis** | Ujung (Distal) | **G** | Landmark 16 (`ring_finger_tip`) |
| | Tengah (Intermediate) | **H** | Landmark 15 (`ring_finger_pip`) |
| | Pangkal (Proximal) | **I** | Landmark 14 (`ring_finger_mcp`) |
| **Jari Kelingking** | Ujung (Distal) | **J** | Landmark 20 (`pinky_finger_tip`) |
| | Tengah (Intermediate) | **K** | Landmark 19 (`pinky_finger_pip`) |
| | Pangkal (Proximal) | **L** | Landmark 18 (`pinky_finger_mcp`) |

---

## 🚀 Persiapan & Instalasi (Preparation & Installation)

### Prasyarat (Prerequisites)
* **Node.js** (v18 atau lebih baru)
* **NPM** (v9 atau lebih baru)
* Peramban Web modern yang mendukung WebGL dan WebRTC Camera (Google Chrome, Microsoft Edge, Mozilla Firefox, atau Safari).

### 1. Kloning & Install Dependensi
```bash
git clone https://github.com/meizano/webvr-finger-keyboard-.git
cd webvr-finger-keyboard-
npm install
```

### 2. Jalankan Mode Pengembang (Local Dev Server)
```bash
npm run dev
```
Akses aplikasi melalui peramban di `http://localhost:5173`.

### 3. Kompilasi Produksi (Build for Production)
```bash
npm run build
```
Hasil kompilasi static site akan otomatis disimpan di folder `docs/` yang siap di-deploy ke **GitHub Pages**.

---

## 📖 Panduan Penggunaan (Usage Guide)

### Pengujian di PC Desktop / Laptop:
1. Buka `cardboard.html` pada browser PC Anda.
2. Izinkan akses webcam (*Allow Camera*).
3. **Metode Pengetikan di PC**:
   * **Hand Tracking**: Tunjukkan tangan kanan Anda ke arah webcam PC.
   * **Gaze Control**: Arahkan titik tengah kursor layar ke tombol mana saja selama 3 detik.
   * **Mouse Click**: Klik langsung pada tombol 3D.
   * **Keyboard Fisik**: Tekan tombol `A` sampai `L` pada keyboard laptop Anda.

### Penggunaan di Google Cardboard (Smartphone Android/iOS):
1. Buka tautan publik GitHub Pages di browser smartphone.
2. Pilih **Google Cardboard & PC Mode**.
3. Masukkan smartphone ke dalam Google Cardboard viewer.
4. Gunakan **Gaze Control (3 Detik)** atau tunjukkan tangan kanan ke kamera belakang HP.

### Penggunaan di Meta Quest / WebXR Headset:
1. Buka Meta Quest Browser.
2. Pilih **Native WebXR Mode**.
3. Klik tombol **Enter VR / Enter AR**.
4. Manfaatkan *Native WebXR Passthrough* dan *Hand Tracking API*.

---

## ⚙️ File Konfigurasi Centralized (`js/config.js`)

Semua konfigurasi posisi dan parameter interaksi disimpan di `js/config.js` sehingga mudah disesuaikan:

```javascript
window.APP_CONFIG = {
  screen: {
    position: { x: 0, y: 2.1, z: -1.6 }, // Ketinggian layar sejajar mata
    planeZ: -0.05,
    buttonZ: 0.08                        // Mencegah Z-fighting flickering
  },
  handRig: {
    defaultPosition: { x: -0.05, y: 1.25, z: -0.8 },
    defaultRotation: { x: 10, y: -25, z: 50 }          // Orientasi menyamping
  },
  gaze: {
    timeoutMs: 3000                      // Waktu penahanan Gaze (3 detik)
  },
  tracking: {
    touchThreshold: 0.045,               // Threshold sentuhan 4.5 cm
    androidDelegates: ["GPU", "CPU"]     // Fallback delegate Android
  }
};
```

---

## 📚 Library & Ucapan Terima Kasih (Libraries & Credits)

Penulis menyampaikan ucapan terima kasih kepada pengembang pustaka open-source berikut yang digunakan dalam proyek ini:

1. **A-Frame**: Framework WebVR/WebXR berbasis HTML.
   * Repository: [aframevr/aframe](https://github.com/aframevr/aframe)
   * Website: [aframe.io](https://aframe.io/)
2. **Google MediaPipe Tasks Vision**: Solusi pendeteksian landmark tangan 3D berbasis Machine Learning.
   * Repository: [google-ai-edge/mediapipe](https://github.com/google-ai-edge/mediapipe)
   * Documentation: [mediapipe.dev](https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker)
3. **AR.js**: Konsep Augmented Reality & Webcam Passthrough di Web.
   * Repository: [AR-js-org/AR.js](https://github.com/AR-js-org/AR.js)
4. **Three.js**: Pustaka Grafis 3D JavaScript di balik A-Frame.
   * Repository: [mrdoob/three.js](https://github.com/mrdoob/three.js)
5. **Vite**: Alat kompilasi dan bundling aplikasi frontend modern.
   * Repository: [vitejs/vite](https://github.com/vitejs/vite)

---

## 📄 Lisensi (License)

Proyek ini dilisensikan di bawah **Lisensi MIT** - lihat berkas di bawah untuk rincian selengkapnya:

```text
MIT License

Copyright (c) 2026 Meizano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
