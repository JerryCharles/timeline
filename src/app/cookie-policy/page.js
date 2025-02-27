"use client";

import { useLanguage, LANGUAGES } from '../../contexts/LanguageContext';
import Link from 'next/link';

export default function CookiePolicy() {
  const { language } = useLanguage();
  
  const content = language === LANGUAGES.EN ? (
    <>
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
        <p className="mb-3">
          This Cookie Policy explains how Timeline ("we", "us", and "our") uses cookies and similar technologies 
          to recognize you when you visit our website. It explains what these technologies are and why we use them, 
          as well as your rights to control our use of them.
        </p>
        <p className="mb-3">
          In some cases we may use cookies to collect personal information, or that becomes personal information if we 
          combine it with other information.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. What are cookies?</h2>
        <p className="mb-3">
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
          Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, 
          as well as to provide reporting information.
        </p>
        <p className="mb-3">
          Cookies set by the website owner (in this case, Timeline) are called "first party cookies". Cookies set by 
          parties other than the website owner are called "third party cookies". Third party cookies enable third party 
          features or functionality to be provided on or through the website (e.g. like advertising, interactive content 
          and analytics). The parties that set these third party cookies can recognize your computer both when it visits 
          the website in question and also when it visits certain other websites.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Why do we use cookies?</h2>
        <p className="mb-3">
          We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order 
          for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also 
          enable us to track and target the interests of our users to enhance the experience on our online properties. 
          Third parties serve cookies through our website for advertising, analytics and other purposes.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Types of cookies we use</h2>
        <p className="mb-3">
          The specific types of first and third party cookies served through our website and the purposes they perform are 
          described below:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">
            <strong>Essential website cookies:</strong> These cookies are strictly necessary to provide you with services 
            available through our website and to use some of its features, such as access to secure areas.
          </li>
          <li className="mb-2">
            <strong>Performance and functionality cookies:</strong> These cookies are used to enhance the performance and 
            functionality of our website but are non-essential to their use. However, without these cookies, certain 
            functionality may become unavailable.
          </li>
          <li className="mb-2">
            <strong>Analytics and customization cookies:</strong> These cookies collect information that is used either in 
            aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, 
            or to help us customize our website for you.
          </li>
          <li className="mb-2">
            <strong>Advertising cookies:</strong> These cookies are used to make advertising messages more relevant to you. 
            They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly 
            displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
          </li>
          <li className="mb-2">
            <strong>Social networking cookies:</strong> These cookies are used to enable you to share pages and content that 
            you find interesting on our website through third party social networking and other websites. These cookies may 
            also be used for advertising purposes.
          </li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. How can you control cookies?</h2>
        <p className="mb-3">
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting 
          your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories 
          of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide 
          you with services.
        </p>
        <p className="mb-3">
          You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, 
          you may still use our website though your access to some functionality and areas of our website may be restricted. 
          As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you 
          should visit your browser's help menu for more information.
        </p>
        <p className="mb-3">
          In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find 
          out more information, please visit <a href="http://www.aboutads.info/choices/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices/</a> or 
          <a href="http://www.youronlinechoices.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.com</a>.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. How often will we update this Cookie Policy?</h2>
        <p className="mb-3">
          We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use 
          or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to 
          stay informed about our use of cookies and related technologies.
        </p>
        <p className="mb-3">
          The date at the top of this Cookie Policy indicates when it was last updated.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Where can you get further information?</h2>
        <p className="mb-3">
          If you have any questions about our use of cookies or other technologies, please email us at:
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
      <h1 className="text-3xl font-bold mb-6">Cookie 政策</h1>
      <p className="mb-4">最后更新: {new Date().toLocaleDateString()}</p>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. 引言</h2>
        <p className="mb-3">
          本 Cookie 政策解释了时间线（"我们"）如何使用 cookie 和类似技术在您访问我们的网站时识别您。
          它解释了这些技术是什么以及我们为什么使用它们，以及您控制我们使用它们的权利。
        </p>
        <p className="mb-3">
          在某些情况下，我们可能会使用 cookie 收集个人信息，或者如果我们将其与其他信息结合，它会成为个人信息。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. 什么是 cookie？</h2>
        <p className="mb-3">
          Cookie 是当您访问网站时放置在您的计算机或移动设备上的小型数据文件。
          网站所有者广泛使用 cookie 以使其网站运行，或更有效地运行，以及提供报告信息。
        </p>
        <p className="mb-3">
          由网站所有者（在本例中为时间线）设置的 cookie 称为"第一方 cookie"。由网站所有者以外的各方设置的 cookie 称为"第三方 cookie"。
          第三方 cookie 使第三方功能或功能可以在网站上或通过网站提供（例如，如广告、交互式内容和分析）。
          设置这些第三方 cookie 的各方可以在您访问相关网站以及访问某些其他网站时识别您的计算机。
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