import QRCodeGenerator from '../components/QRCodeGenerator';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            QR Code Flex
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Générateur de QR codes simple et élégant
          </p>
        </div>

        {/* QR Code Generator */}
        <div className="flex justify-center">
          <QRCodeGenerator />
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Rapide
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Générez vos QR codes instantanément
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Responsive
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Fonctionne parfaitement sur tous les appareils
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💾</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Téléchargeable
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Sauvegardez vos QR codes en PNG
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
