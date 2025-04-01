import React from 'react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function TermsOfService() {
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white absolute left-1/2 transform -translate-x-1/2">服務條款</h1>
          <div className="w-20"></div> {/* This empty div helps balance the layout */}
        </div>
        
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">1. 接受條款</h2>
            <p className="mb-4">
              通過訪問或使用時間軸服務（「服務」），您同意接受這些服務條款（「條款」）的約束。
              如果您不同意這些條款，請不要使用本服務。
            </p>
            <p>
              我們保留隨時修改這些條款的權利。您在發布更改後繼續使用本服務，即表示您接受這些更改。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">2. 資格</h2>
            <p>
              您必須至少年滿13歲才能使用本服務。通過同意這些條款，您表示並保證您至少年滿13歲。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">3. 服務描述</h2>
            <p className="mb-4">
              時間軸是一個信息服務，允許用戶瀏覽時間軸格式的主題和事件。
              本服務不需要您創建帳戶即可訪問其內容。
            </p>
            <p>
              我們努力提供準確可靠的信息，但我們不能保證服務上呈現的任何內容的準確性、完整性或可靠性。
              這些內容僅供一般信息參考。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">4. 廣告</h2>
            <p className="mb-4">
              本服務顯示廣告。這些廣告明確標記，並由第三方廣告網絡提供。
              通過使用我們的服務，您同意查看這些廣告作為您體驗的一部分。
            </p>
            <p>
              我們對這些廣告的內容不負責任，廣告的存在並不構成時間軸對所宣傳的產品或服務的認可。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">5. Cookie和跟踪</h2>
            <p className="mb-4">
              我們的服務使用Cookie和類似的跟踪技術來增強您的體驗，記住您的語言偏好（英文或繁體中文），
              通過Google Analytics分析站點使用情況，並提供相關廣告。通過使用我們的服務，您同意我們按照隱私政策中描述的方式使用這些技術。
            </p>
            <p>
              您可以通過瀏覽器設置管理您的Cookie偏好，但請注意，禁用某些Cookie可能會影響服務的功能，
              包括您的語言偏好設置。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">6. 禁止的活動</h2>
            <p className="mb-4">
              您同意不會：
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>將本服務用於任何非法目的或違反任何法律。</li>
              <li>嘗試未經授權訪問本服務的任何部分或與本服務相連的任何系統或網絡。</li>
              <li>使用任何機器人、蜘蛛、抓取工具或其他自動化方式出於任何目的訪問本服務。</li>
              <li>干擾或破壞服務或與服務相連的服務器或網絡。</li>
              <li>上傳、發布或以其他方式傳輸任何病毒或其他惡意代碼。</li>
              <li>嘗試修改、反向工程、反編譯或拆解本服務的任何部分。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">7. 知識產權</h2>
            <p>
              本服務及其原創內容、功能和功能由時間軸擁有，並受國際版權、商標、專利、商業秘密和其他知識產權法律的保護。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">8. 責任限制</h2>
            <p>
              在任何情況下，時間軸及其董事、員工、合作夥伴、代理人、供應商或關聯公司均不對任何間接、偶然、特殊、後果性或懲罰性損害負責，
              包括但不限於利潤、數據、使用、商譽或其他無形損失的損失，這些損失是由於您訪問或使用或無法訪問或使用本服務而導致的。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">9. 管轄法律</h2>
            <p>
              這些條款應根據[您的國家]的法律進行解釋和管轄，不考慮其衝突法律規定。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">10. 條款變更</h2>
            <p>
              我們保留自行決定隨時修改或替換這些條款的權利。什麼構成重大變更將由我們自行決定。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">11. 聯繫我們</h2>
            <p>
              如果您對這些條款有任何疑問，請通過 terms@3ja.com 與我們聯繫。
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