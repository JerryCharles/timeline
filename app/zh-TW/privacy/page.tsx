import React from 'react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-8 relative">
          <Link href="/zh-TW" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            返回
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white absolute left-1/2 transform -translate-x-1/2">隱私政策</h1>
          <div className="w-20"></div> {/* This empty div helps balance the layout */}
        </div>
        
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">引言</h2>
            <p className="mb-4">
              時間軸（「我們」或「我們的」）致力於保護您的隱私。本隱私政策說明我們在您使用我們的服務時如何收集、使用、披露和保護您的信息。
            </p>
            <p>
              請仔細閱讀本隱私政策。通過訪問或使用我們的服務，您確認您已閱讀、理解並同意受本隱私政策中概述的所有條款的約束。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">我們收集的信息</h2>
            <p className="mb-4">
              我們收集您在使用我們的服務時的以下類型的信息：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>使用數據：關於您如何與我們的網站互動的信息，包括訪問的頁面、花費的時間和採取的操作。</li>
              <li>設備信息：關於您的設備的信息，包括瀏覽器類型、IP地址和操作系統。</li>
              <li>語言偏好：您查看我們網站的首選語言設置。</li>
            </ul>
            <p>
              請注意，我們的服務不需要用戶帳戶，因此我們不收集個人帳戶信息，如姓名、電子郵件地址或密碼。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Cookie 和類似技術</h2>
            <p className="mb-4">
              我們使用 Cookie 和類似技術來增強您在我們平台上的體驗。Cookie 是存儲在您設備上的小數據文件，幫助我們改進我們的服務和您的體驗，記住您的偏好，並提供個性化內容。
            </p>
            <p className="mb-4">
              我們使用以下類型的 Cookie：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>必要 Cookie：</strong>這些 Cookie 對於網站正常運行是必需的，無法在我們的系統中關閉。</li>
              <li><strong>偏好 Cookie：</strong>這些 Cookie 使網站能夠記住您的語言偏好（英文或繁體中文）和主題選擇。</li>
              <li><strong>分析 Cookie：</strong>這些 Cookie 允許我們通過 Google Analytics 計算訪問量和流量來源，以便我們測量和改進網站的性能。</li>
              <li><strong>廣告 Cookie：</strong>這些 Cookie 用於在我們的網站上向您顯示相關廣告，並可能與廣告合作夥伴共享。</li>
            </ul>
            <p>
              您可以通過瀏覽器設置控制 Cookie。但是，如果您禁用 Cookie，我們服務的某些功能可能無法正常運行，例如您的語言偏好設置。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Google Analytics</h2>
            <p className="mb-4">
              我們使用 Google Analytics，這是由 Google, Inc. 提供的網絡分析服務。Google Analytics 使用 cookie 來幫助我們分析用戶如何使用我們的網站。
              有關您使用網站的信息（包括您的 IP 地址）將被傳輸並存儲在 Google 的服務器上。
            </p>
            <p>
              Google 將使用這些信息來評估您對網站的使用情況，編制網站活動報告，並提供與網站活動和互聯網使用相關的其他服務。
              Google 也可能會將這些信息轉移給第三方，如果法律要求這樣做，或者這些第三方代表 Google 處理信息。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">廣告</h2>
            <p className="mb-4">
              我們的網站顯示來自第三方廣告網絡的廣告。這些廣告商可能使用 cookie 和類似技術來收集有關您隨時間在不同網站上的瀏覽活動的信息。
              這些信息可能用於向您提供基於興趣的廣告。
            </p>
            <p>
              我們不控制這些第三方的跟踪技術或它們的使用方式。如果您對廣告有任何疑問，應直接聯繫負責的廣告商。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">我們如何使用您的信息</h2>
            <p className="mb-4">
              我們使用收集的信息來：
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>提供、維護和改進我們的服務</li>
              <li>記住您的語言偏好（英文或繁體中文）</li>
              <li>分析網站流量和使用模式</li>
              <li>顯示相關廣告</li>
              <li>個性化您在我們平台上的體驗</li>
              <li>監控和分析與我們服務相關的趨勢、使用情況和活動</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">數據安全</h2>
            <p>
              我們實施適當的技術和組織措施來保護您個人信息的安全。但是，請注意，通過互聯網傳輸或電子存儲的方法都不是100%安全的。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">本隱私政策的變更</h2>
            <p>
              我們可能會不時更新我們的隱私政策。我們將通過在此頁面上發布新的隱私政策並更新「最後更新」日期來通知您任何變更。建議您定期查看本隱私政策以了解任何變更。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">聯繫我們</h2>
            <p>
              如果您對本隱私政策有任何疑問，請通過 privacy@3ja.com 與我們聯繫。
            </p>
          </section>

          <div className="text-sm text-gray-500 dark:text-gray-400 pt-6 border-t border-gray-200 dark:border-gray-700">
            最後更新：{new Date().toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </div>
    </>
  );
} 