"use client";

import { useLanguage, LANGUAGES } from '../../../contexts/LanguageContext';
import Link from 'next/link';

export function CookiePolicyClient({ params }) {
  const { language } = useLanguage();
  const currentLang = params?.lang || language;
  
  const content = currentLang === LANGUAGES.EN ? (
    <>
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
        <p className="mb-3">
          This Cookie Policy explains how Timeline ("we", "us", and "our") uses cookies and similar technologies 
          to store your preferences when you visit our website. It explains what these technologies are and why we use them, 
          as well as your rights to control our use of them.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. What are cookies?</h2>
        <p className="mb-3">
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
          Cookies are widely used by website owners to make their websites work more efficiently and provide a better user experience.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. How we use cookies</h2>
        <p className="mb-3">
          We use only first-party cookies for essential functionality. We do not use any third-party cookies, tracking cookies, or advertising cookies.
          The cookies we use are strictly necessary to:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">Remember your language preference (English or Chinese)</li>
          <li className="mb-2">Remember your timeline view layout preference (left-aligned or centered)</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Types of cookies we use</h2>
        <p className="mb-3">
          We use only essential functional cookies:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">
            <strong>Language preference cookie:</strong> Stores your preferred language setting (English or Chinese)
          </li>
          <li className="mb-2">
            <strong>Timeline layout cookie:</strong> Stores your preferred timeline view layout (left-aligned or centered)
          </li>
        </ul>
        <p className="mb-3">
          We do not use any:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">Analytics cookies</li>
          <li className="mb-2">Advertising cookies</li>
          <li className="mb-2">Third-party cookies</li>
          <li className="mb-2">Tracking cookies</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. How to control cookies</h2>
        <p className="mb-3">
          You can control the use of cookies at the browser level. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our website, and some features may not work as intended.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Updates to this policy</h2>
        <p className="mb-3">
          We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. The date at the top of this Cookie Policy indicates when it was last updated.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Contact us</h2>
        <p className="mb-3">
          If you have any questions about our use of cookies, please email us at privacy@timeline-example.com
        </p>
      </section>
      
      <div className="mt-8 pt-4 border-t border-gray-200">
        <Link href={`/${currentLang}`} className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>
    </>
  ) : (
    <>
      <h1 className="text-3xl font-bold mb-6">Cookie 政策</h1>
      <p className="mb-4">最后更新: {new Date().toLocaleDateString()}</p>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. 引言</h2>
        <p className="mb-3">
          本 Cookie 政策解释了时间线（"我们"）如何使用 cookie 和类似技术在您访问我们的网站时存储您的偏好。
          它解释了这些技术是什么以及我们为什么使用它们，以及您控制我们使用它们的权利。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. 什么是 cookie？</h2>
        <p className="mb-3">
          Cookie 是当您访问网站时放置在您的计算机或移动设备上的小型数据文件。
          网站所有者广泛使用 cookie 以使其网站运行，或更有效地运行，以及提供报告信息。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. 我们为什么使用 cookie？</h2>
        <p className="mb-3">
          我们出于多种原因使用第一方和第三方 cookie。某些 cookie 出于技术原因是必需的，以便我们的网站运行，
          我们将其称为"必要"或"绝对必要"的 cookie。其他 cookie 还使我们能够跟踪和定位用户的兴趣，以增强我们在线属性的体验。
          第三方通过我们的网站提供 cookie，用于广告、分析和其他目的。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. 我们使用的 cookie 类型</h2>
        <p className="mb-3">
          通过我们的网站提供的特定类型的第一方和第三方 cookie 以及它们执行的目的如下所述：
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">
            <strong>必要的网站 cookie：</strong>这些 cookie 对于通过我们的网站向您提供服务以及使用其某些功能（如访问安全区域）是绝对必要的。
          </li>
          <li className="mb-2">
            <strong>性能和功能 cookie：</strong>这些 cookie 用于增强我们网站的性能和功能，但对其使用不是必不可少的。
            但是，如果没有这些 cookie，某些功能可能会变得不可用。
          </li>
          <li className="mb-2">
            <strong>分析和定制 cookie：</strong>这些 cookie 收集的信息以汇总形式用于帮助我们了解我们的网站如何被使用或我们的营销活动的效果如何，
            或者帮助我们为您定制我们的网站。
          </li>
          <li className="mb-2">
            <strong>广告 cookie：</strong>这些 cookie 用于使广告信息与您更相关。它们执行的功能包括防止同一广告不断重复出现，
            确保广告正确显示给广告商，在某些情况下，选择基于您的兴趣的广告。
          </li>
          <li className="mb-2">
            <strong>社交网络 cookie：</strong>这些 cookie 用于使您能够通过第三方社交网络和其他网站分享您在我们网站上发现的有趣的页面和内容。
            这些 cookie 也可能用于广告目的。
          </li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. 如何控制 cookie？</h2>
        <p className="mb-3">
          您有权决定是接受还是拒绝 cookie。您可以通过在 Cookie 同意管理器中设置您的偏好来行使您的 cookie 权利。
          Cookie 同意管理器允许您选择接受或拒绝哪些类别的 cookie。必要的 cookie 不能被拒绝，因为它们对于向您提供服务是绝对必要的。
        </p>
        <p className="mb-3">
          您还可以设置或修改您的网络浏览器控件以接受或拒绝 cookie。如果您选择拒绝 cookie，您仍然可以使用我们的网站，
          尽管您对我们网站的某些功能和区域的访问可能会受到限制。由于您可以通过网络浏览器控件拒绝 cookie 的方式因浏览器而异，
          您应该访问浏览器的帮助菜单以获取更多信息。
        </p>
        <p className="mb-3">
          此外，大多数广告网络为您提供了退出定向广告的方式。如果您想了解更多信息，请访问 
          <a href="http://www.aboutads.info/choices/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices/</a> 或 
          <a href="http://www.youronlinechoices.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.com</a>。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. 我们多久会更新这个 Cookie 政策？</h2>
        <p className="mb-3">
          我们可能会不时更新此 Cookie 政策，例如，反映我们使用的 cookie 的变化或出于其他操作、法律或监管原因。
          因此，请定期重新访问此 Cookie 政策，以了解我们使用 cookie 和相关技术的情况。
        </p>
        <p className="mb-3">
          本 Cookie 政策顶部的日期表示其最后更新时间。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. 在哪里可以获取更多信息？</h2>
        <p className="mb-3">
          如果您对我们使用 cookie 或其他技术有任何疑问，请发送电子邮件至：
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