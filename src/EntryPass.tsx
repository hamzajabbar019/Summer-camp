import React, { useRef, useEffect, useState } from "react";
import { Download, RotateCcw } from "lucide-react";
import { motion } from "motion/react";
import jsPDF from "jspdf";

interface EntryPassProps {
  childName: string;
  age: string;
  parentName: string;
  phone: string;
  area: string;
  onRegisterAnother: () => void;
}

function generatePassId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let id = "SC26-";
  for (let i = 0; i < 6; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawPass(canvas: HTMLCanvasElement, data: EntryPassProps & { passId: string }, logoImg: HTMLImageElement | undefined) {
  const ctx = canvas.getContext("2d")!;
  const W = 900;
  const H = 520;
  canvas.width = W;
  canvas.height = H;
  ctx.clearRect(0, 0, W, H);

  // --- Card background with gradient ---
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, "#0284c7");   // sky-600
  grad.addColorStop(0.5, "#0369a1"); // sky-700
  grad.addColorStop(1, "#075985");   // sky-800
  drawRoundedRect(ctx, 0, 0, W, H, 32);
  ctx.fillStyle = grad;
  ctx.fill();

  // --- Decorative circles ---
  ctx.globalAlpha = 0.07;
  ctx.fillStyle = "#fff";
  ctx.beginPath(); ctx.arc(W - 80, 80, 160, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(120, H - 60, 120, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(W / 2, -40, 100, 0, Math.PI * 2); ctx.fill();
  ctx.globalAlpha = 1;

  // --- Dotted tear line ---
  ctx.setLineDash([8, 8]);
  ctx.strokeStyle = "rgba(255,255,255,0.25)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(W - 200, 30);
  ctx.lineTo(W - 200, H - 30);
  ctx.stroke();
  ctx.setLineDash([]);

  // --- Left section (main info) ---
  // Title
  if (logoImg) {
    // Draw white rounded background for logo
    drawRoundedRect(ctx, 50, 40, 60, 60, 12);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    // Draw the logo image
    ctx.save();
    ctx.beginPath();
    drawRoundedRect(ctx, 52, 42, 56, 56, 10);
    ctx.clip();
    ctx.drawImage(logoImg, 52, 42, 56, 56);
    ctx.restore();

    ctx.fillStyle = "#fbbf24"; // yellow-400
    ctx.font = "bold 14px 'Fredoka', sans-serif";
    ctx.letterSpacing = "6px";
    ctx.fillText("BAZM-E-SATHI · SHAH FAISAL", 125, 55);
    ctx.letterSpacing = "0px";

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 52px 'Fredoka', sans-serif";
    ctx.fillText("SUMMER CAMP", 125, 110);
  } else {
    ctx.fillStyle = "#fbbf24"; // yellow-400
    ctx.font = "bold 14px 'Fredoka', sans-serif";
    ctx.letterSpacing = "6px";
    ctx.fillText("BAZM-E-SATHI · SHAH FAISAL", 50, 55);
    ctx.letterSpacing = "0px";

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 52px 'Fredoka', sans-serif";
    ctx.fillText("SUMMER CAMP", 50, 110);
  }

  ctx.fillStyle = "#fbbf24";
  ctx.font = "800 28px 'Fredoka', sans-serif";
  ctx.fillText("2K26", 490, 110);

  // --- Accent bar ---
  const barGrad = ctx.createLinearGradient(50, 0, 350, 0);
  barGrad.addColorStop(0, "#f97316"); // orange
  barGrad.addColorStop(1, "#fbbf24"); // yellow
  drawRoundedRect(ctx, 50, 130, 300, 6, 3);
  ctx.fillStyle = barGrad;
  ctx.fill();

  // --- ENTRY PASS label ---
  ctx.fillStyle = "rgba(255,255,255,0.15)";
  ctx.font = "800 80px 'Fredoka', sans-serif";
  ctx.fillText("ENTRY PASS", 40, 480);

  // --- Camper details ---
  const labelStyle = () => {
    ctx.fillStyle = "#7dd3fc"; // sky-300
    ctx.font = "600 11px 'Fredoka', sans-serif";
  };
  const valueStyle = () => {
    ctx.fillStyle = "#ffffff";
    ctx.font = "700 22px 'Fredoka', sans-serif";
  };

  // Row 1
  labelStyle(); ctx.fillText("CAMPER NAME", 50, 175);
  valueStyle(); ctx.fillText(data.childName.toUpperCase(), 50, 202);

  // Row 2 — two cols
  labelStyle(); ctx.fillText("AGE", 50, 240);
  valueStyle(); ctx.fillText(data.age + " Years", 50, 267);

  labelStyle(); ctx.fillText("GUARDIAN", 220, 240);
  valueStyle(); ctx.fillText(data.parentName.toUpperCase(), 220, 267);

  // Row 3 — two cols
  labelStyle(); ctx.fillText("PHONE", 50, 305);
  valueStyle(); ctx.fillText(data.phone, 50, 332);

  labelStyle(); ctx.fillText("AREA", 320, 305);
  valueStyle(); ctx.fillText(data.area.toUpperCase(), 320, 332);

  // Row 4 — schedule
  labelStyle(); ctx.fillText("DAY 1 · JUNE 20, 2026", 50, 372);
  ctx.fillStyle = "#e0f2fe";
  ctx.font = "600 15px 'Fredoka', sans-serif";
  ctx.fillText("Rose Garden & Fahad Lawn  ·  8 AM – 3 PM", 50, 394);

  labelStyle(); ctx.fillText("DAY 2 · JUNE 21, 2026", 50, 425);
  ctx.fillStyle = "#e0f2fe";
  ctx.font = "600 15px 'Fredoka', sans-serif";
  ctx.fillText("Farm House  ·  8 AM – 4 PM", 50, 447);

  // --- Right stub (Pass ID) ---
  const stubX = W - 180;

  // Rotated "ENTRY PASS" on the stub
  ctx.save();
  ctx.translate(stubX + 90, H / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = "rgba(255,255,255,0.08)";
  ctx.font = "800 48px 'Fredoka', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("ENTRY", 0, -10);
  ctx.restore();

  // Pass ID
  ctx.textAlign = "center";
  ctx.fillStyle = "#fbbf24";
  ctx.font = "bold 11px 'Fredoka', sans-serif";
  ctx.letterSpacing = "4px";
  ctx.fillText("PASS ID", stubX + 90, 60);
  ctx.letterSpacing = "0px";

  ctx.fillStyle = "#ffffff";
  ctx.font = "800 18px 'Fredoka', sans-serif";
  ctx.fillText(data.passId, stubX + 90, 88);

  // Emoji badge
  ctx.font = "60px serif";
  ctx.fillText("🏕️", stubX + 90, 200);

  // Camp year
  ctx.fillStyle = "#fff";
  ctx.font = "800 36px 'Fredoka', sans-serif";
  ctx.fillText("2K26", stubX + 90, 300);

  ctx.fillStyle = "#7dd3fc";
  ctx.font = "600 12px 'Fredoka', sans-serif";
  ctx.letterSpacing = "3px";
  ctx.fillText("SUMMER", stubX + 90, 325);
  ctx.letterSpacing = "0px";

  // Barcode-like decoration
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  for (let i = 0; i < 20; i++) {
    const bw = i % 3 === 0 ? 4 : 2;
    ctx.fillRect(stubX + 30 + i * 7, H - 80, bw, 35);
  }

  ctx.textAlign = "start";
}

const EntryPass: React.FC<EntryPassProps> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [passId] = useState(generatePassId);
  const [logo, setLogo] = useState<HTMLImageElement | null | undefined>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = "https://live.staticflickr.com/7156/6674386563_04f4f4a9ae_b.jpg";
    img.onload = () => setLogo(img);
    img.onerror = () => setLogo(undefined); // If it fails, we still render without it
  }, []);

  useEffect(() => {
    if (canvasRef.current && logo !== null) {
      // Load Fredoka font before drawing
      document.fonts.ready.then(() => {
        drawPass(canvasRef.current!, { ...props, passId }, logo);
      });
    }
  }, [props, passId, logo]);

  const handleDownload = () => {
    if (!canvasRef.current) return;

    try {
      const canvas = canvasRef.current;
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

      // Manually trigger download to ensure proper filename
      const filename = `SummerCamp_Pass_${props.childName ? props.childName.replace(/\s+/g, "_") : "Camper"}.pdf`;
      const blob = pdf.output("blob");
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 100);

    } catch (e) {
      console.error("Failed to generate PDF:", e);
      alert("Failed to generate PDF. If you are using a browser that blocks canvas data extraction, please try another browser.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white p-8 md:p-12 rounded-[3rem] text-center shadow-2xl border-4 border-sky-100"
    >
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-4xl">🎉</span>
      </div>
      <h3 className="text-3xl font-playful font-black text-sky-900 mb-2 uppercase">
        Registration Successful!
      </h3>
      <p className="text-sky-600 font-bold text-lg mb-8">
        Your entry pass has been generated. Download it below!
      </p>

      {/* Pass preview */}
      <div className="overflow-x-auto pb-4 mb-8">
        <canvas
          ref={canvasRef}
          className="mx-auto rounded-2xl shadow-xl"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownload}
          className="inline-flex items-center justify-center gap-3 bg-orange-500 text-white px-10 py-5 rounded-2xl text-xl font-playful font-black uppercase tracking-widest shadow-[0_8px_0_rgb(194,65,12)] hover:bg-orange-400 active:translate-y-1 active:shadow-none transition-all"
        >
          <Download className="w-6 h-6" />
          Download Pass
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={props.onRegisterAnother}
          className="inline-flex items-center justify-center gap-3 bg-sky-100 text-sky-700 px-10 py-5 rounded-2xl text-lg font-playful font-black uppercase tracking-widest hover:bg-sky-200 transition-all"
        >
          <RotateCcw className="w-5 h-5" />
          Register Another
        </motion.button>
      </div>
    </motion.div>
  );
};

export default EntryPass;
