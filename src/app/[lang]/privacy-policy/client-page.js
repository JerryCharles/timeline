"use client";

import { useLanguage, LANGUAGES } from '../../../contexts/LanguageContext';
import Link from 'next/link';

export function PrivacyPolicyClient({ params }) {
  const { language } = useLanguage();
  const currentLang = params?.lang || language;
  
  const content = currentLang === LANGUAGES.EN ? (
    <>
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
        <p className="mb-3">
          Welcome to Timeline. We respect your privacy and are committed to protecting it. This privacy policy explains how we handle any information when you visit our website.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
        <p className="mb-3">
          We collect very minimal information. We do not collect any personal data. The only information we store are your preferences:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">Language preference (English or Chinese)</li>
          <li className="mb-2">Timeline view layout preference (left-aligned or centered)</li>
        </ul>
        <p className="mb-3">
          These preferences are stored locally in your browser using cookies and local storage. This information is not transmitted to our servers and remains on your device.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
        <p className="mb-3">
          The stored preferences are used solely to enhance your browsing experience by:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">Displaying the website in your preferred language</li>
          <li className="mb-2">Maintaining your preferred timeline view layout</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Data Sharing and Third Parties</h2>
        <p className="mb-3">
          We do not share any information with third parties. We do not use any third-party analytics, tracking, or advertising services.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
        <p className="mb-3">
          You can control your preferences at any time:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">Change language using the language switcher</li>
          <li className="mb-2">Change timeline view using the layout toggle</li>
          <li className="mb-2">Clear your browser cookies and local storage to reset all preferences</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Cookies</h2>
        <p className="mb-3">
          We use cookies only to store your preferences. For more information about the cookies we use, please see our <Link href={`/${currentLang}/cookie-policy`} className="text-blue-600 hover:underline">Cookie Policy</Link>.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Changes to This Privacy Policy</h2>
        <p className="mb-3">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
          and updating the "Last Updated" date at the top of this Privacy Policy.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">8. Contact Us</h2>
        <p className="mb-3">
          If you have any questions about this Privacy Policy, you can contact us at privacy@timeline-example.com
        </p>
      </section>
      
      <div className="mt-8 pt-4 border-t border-gray-200">
        <Link href={`/${currentLang}`} className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>
    </>
  ) : (
    <>
      <h1 className="text-3xl font-bold mb-6">隐私政策</h1>
      <p className="mb-4">最后更新1: {new Date().toLocaleDateString()}</p>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. 引言</h2>
        <p className="mb-3">
          欢迎访问时间线。我们尊重您的隐私并致力于保护您的个人数据。
          本隐私政策将告知您我们如何在您访问我们的网站时保护您的个人数据，
          并告诉您关于您的隐私权以及法律如何保护您。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. 我们收集的数据</h2>
        <p className="mb-3">
          我们收集非常少量的信息。我们不收集任何个人数据。我们存储的唯一信息是您的偏好：
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">语言偏好（英语或中文）</li>
          <li className="mb-2">时间线视图布局偏好（左对齐或居中）</li>
        </ul>
        <p className="mb-3">
          这些偏好存储在您的浏览器中，使用cookies和本地存储。此信息不会传输到我们的服务器，并保留在您的设备上。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. 我们如何使用您的信息</h2>
        <p className="mb-3">
          存储的偏好仅用于增强您的浏览体验，通过：
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">在您首选的语言中显示网站</li>
          <li className="mb-2">保持您首选的时间线视图布局</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. 数据共享和第三方</h2>
        <p className="mb-3">
          我们不会与第三方共享任何信息。我们不使用任何第三方分析、跟踪或广告服务。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. 您的权利</h2>
        <p className="mb-3">
          您可以随时控制您的偏好：
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">使用语言切换器更改语言</li>
          <li className="mb-2">使用布局切换更改时间线视图</li>
          <li className="mb-2">清除浏览器cookies和本地存储以重置所有偏好</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Cookie</h2>
        <p className="mb-3">
          我们仅使用cookies来存储您的偏好。有关我们使用的Cookie的更多信息，请参阅我们的 <Link href={`/${currentLang}/cookie-policy`} className="text-blue-600 hover:underline">Cookie政策</Link>。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. 本隐私政策的变更</h2>
        <p className="mb-3">
          我们可能会不时更新我们的隐私政策。我们将通过在此页面上发布新的隐私政策并更新本隐私政策顶部的"最后更新"日期来通知您任何变更。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">8. 联系我们</h2>
        <p className="mb-3">
          如果您对本隐私政策有任何疑问，可以通过以下方式联系我们：
        </p>
        <p className="mb-3">
          <a href="mailto:privacy@timeline-example.com" className="text-blue-600 hover:underline">privacy@timeline-example.com</a>
        </p>
      </section>
      
      <div className="mt-8 pt-4 border-t border-gray-200">
        <Link href={`/${currentLang}`} className="text-blue-600 hover:underline">← 返回首页</Link>
      </div>
    </>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 md:p-8">
        <div className="prose prose-blue max-w-none dark:prose-invert">
          {content}
        </div>
      </div>
    </div>
  );
} 