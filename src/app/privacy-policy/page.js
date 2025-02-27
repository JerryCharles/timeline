"use client";

import { useLanguage, LANGUAGES } from '../../contexts/LanguageContext';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  
  const content = language === LANGUAGES.EN ? (
    <>
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
        <p className="mb-3">
          Welcome to Timeline. We respect your privacy and are committed to protecting your personal data. 
          This privacy policy will inform you about how we look after your personal data when you visit our website 
          and tell you about your privacy rights and how the law protects you.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Data We Collect</h2>
        <p className="mb-3">
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2"><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
          <li className="mb-2"><strong>Contact Data</strong> includes email address.</li>
          <li className="mb-2"><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
          <li className="mb-2"><strong>Usage Data</strong> includes information about how you use our website and services.</li>
          <li className="mb-2"><strong>Preference Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. How We Use Your Data</h2>
        <p className="mb-3">
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">To provide and maintain our service, including to monitor the usage of our service.</li>
          <li className="mb-2">To manage your account and registration as a user of the service.</li>
          <li className="mb-2">To contact you by email regarding updates or informative communications related to the functionalities, products or contracted services.</li>
          <li className="mb-2">To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Data Retention</h2>
        <p className="mb-3">
          We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, 
          including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
        <p className="mb-3">
          Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">Request access to your personal data.</li>
          <li className="mb-2">Request correction of your personal data.</li>
          <li className="mb-2">Request erasure of your personal data.</li>
          <li className="mb-2">Object to processing of your personal data.</li>
          <li className="mb-2">Request restriction of processing your personal data.</li>
          <li className="mb-2">Request transfer of your personal data.</li>
          <li className="mb-2">Right to withdraw consent.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Cookies</h2>
        <p className="mb-3">
          We use cookies and similar tracking technologies to track the activity on our service and store certain information. 
          For more information about the cookies we use, please see our <Link href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link>.
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
          If you have any questions about this Privacy Policy, you can contact us at:
        </p>
        <p className="mb-3">
          <a href="mailto:privacy@timeline-example.com" className="text-blue-600 hover:underline">privacy@timeline-example.com</a>
        </p>
      </section>
      
      <div className="mt-8 pt-4 border-t border-gray-200">
        <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>
    </>
  ) : (
    <>
      <h1 className="text-3xl font-bold mb-6">隐私政策</h1>
      <p className="mb-4">最后更新: {new Date().toLocaleDateString()}</p>
      
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
          我们可能收集、使用、存储和传输有关您的不同类型的个人数据，我们将其分组如下：
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2"><strong>身份数据</strong> 包括名字、姓氏、用户名或类似标识符。</li>
          <li className="mb-2"><strong>联系数据</strong> 包括电子邮件地址。</li>
          <li className="mb-2"><strong>技术数据</strong> 包括互联网协议（IP）地址、您的登录数据、浏览器类型和版本、时区设置和位置、浏览器插件类型和版本、操作系统和平台，以及您用于访问本网站的设备上的其他技术。</li>
          <li className="mb-2"><strong>使用数据</strong> 包括有关您如何使用我们的网站和服务的信息。</li>
          <li className="mb-2"><strong>偏好数据</strong> 包括您接收我们和第三方营销信息的偏好以及您的通信偏好。</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. 我们如何使用您的数据</h2>
        <p className="mb-3">
          我们只会在法律允许的情况下使用您的个人数据。最常见的情况下，我们将在以下情况下使用您的个人数据：
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">提供和维护我们的服务，包括监控我们服务的使用情况。</li>
          <li className="mb-2">管理您作为服务用户的账户和注册。</li>
          <li className="mb-2">通过电子邮件联系您，告知与功能、产品或已签约服务相关的更新或信息通讯。</li>
          <li className="mb-2">向您提供有关我们提供的其他商品、服务和活动的新闻、特别优惠和一般信息，这些信息与您已经购买或询问的信息类似，除非您选择不接收此类信息。</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. 数据保留</h2>
        <p className="mb-3">
          我们只会在合理必要的时间内保留您的个人数据，以实现我们收集它的目的，
          包括满足任何法律、监管、税务、会计或报告要求的目的。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. 您的权利</h2>
        <p className="mb-3">
          在某些情况下，您根据数据保护法对您的个人数据拥有权利，包括：
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">请求访问您的个人数据。</li>
          <li className="mb-2">请求更正您的个人数据。</li>
          <li className="mb-2">请求删除您的个人数据。</li>
          <li className="mb-2">反对处理您的个人数据。</li>
          <li className="mb-2">请求限制处理您的个人数据。</li>
          <li className="mb-2">请求转移您的个人数据。</li>
          <li className="mb-2">撤回同意的权利。</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Cookie</h2>
        <p className="mb-3">
          我们使用Cookie和类似的跟踪技术来跟踪我们服务上的活动并存储某些信息。
          有关我们使用的Cookie的更多信息，请参阅我们的 <Link href="/cookie-policy" className="text-blue-600 hover:underline">Cookie政策</Link>。
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
        <Link href="/" className="text-blue-600 hover:underline">← 返回首页</Link>
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