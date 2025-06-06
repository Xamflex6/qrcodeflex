'use client';

import React, { useState, useRef } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [qrValue, setQrValue] = useState<string>('');
  const [showQR, setShowQR] = useState<boolean>(false);
  const qrRef = useRef<HTMLDivElement>(null);  // Simple URL validation
  const isValidUrl = (string: string): boolean => {
    try {
      new URL(string);
      return true;
    } catch {
      return false;
    }
  };

  const handleGenerate = () => {
    if (url && isValidUrl(url)) {
      setQrValue(url);
      setShowQR(true);
    }
  };

  const handleDownload = () => {
    if (!qrRef.current) return;

    const svg = qrRef.current.querySelector('svg');
    if (!svg) return;    // Create canvas to convert SVG to PNG
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    // Serialize SVG
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      canvas.width = 512;
      canvas.height = 512;
        if (ctx) {
        // White background
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw SVG image
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // Download
        canvas.toBlob((blob) => {
          if (blob) {
            const downloadUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = 'qrcode.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(downloadUrl);
          }
        }, 'image/png');
      }
      
      URL.revokeObjectURL(url);
    };

    img.src = url;
  };

  const isButtonDisabled = !url || !isValidUrl(url);  return (
    <div className="w-full max-w-md mx-auto p-6 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl">
      <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        QR Code Generator
      </h2>
      
      <div className="space-y-4">
        {/* Input URL */}        <div>
          <label htmlFor="url-input" className="block text-sm font-medium text-slate-300 mb-2">
            Enter your URL
          </label>
          <input
            id="url-input"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-slate-400 transition-all duration-200"
          />
          {url && !isValidUrl(url) && (
            <p className="mt-1 text-sm text-red-400">
              Please enter a valid URL
            </p>
          )}
        </div>

        {/* Generate Button */}        <button
          onClick={handleGenerate}
          disabled={isButtonDisabled}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
            isButtonDisabled
              ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
          }`}
        >
          Generate QR Code
        </button>{/* QR Code with animation */}
        {showQR && qrValue && (
          <div className="mt-6 space-y-4">            <div 
              ref={qrRef}
              className={`flex justify-center p-4 bg-white rounded-lg border border-slate-600 shadow-lg transition-all duration-500 transform ${
                showQR ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <QRCode
                size={200}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={qrValue}
                viewBox="0 0 256 256"
              />
            </div>              {/* Download Button */}
            <button
              onClick={handleDownload}
              className="w-full py-2 px-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Download PNG
            </button>            {/* Displayed URL */}
            <div className="text-center">
              <p className="text-sm text-slate-400 break-all">
                {qrValue}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
