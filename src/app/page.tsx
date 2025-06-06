import QRCodeGenerator from '@/components/QRCodeGenerator';

export default function Home() {
  return (    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 px-4">
      <div className="container mx-auto">        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            QR Code Flex
          </h1>
          <p className="text-lg text-slate-300">
            Easily generate QR codes from your links
          </p>
        </div>
        
        <div className="flex justify-center">
          <QRCodeGenerator />
        </div>
      </div>
    </main>
  );
}