"use client";

import { useLanguage, LANGUAGES } from '../../../contexts/LanguageContext';
import Link from 'next/link';

export function TermsOfServiceClient({ params }) {
  const { language } = useLanguage();
  const currentLang = params?.lang || language;
  
  const content = currentLang === LANGUAGES.EN ? (
    <>
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
        <p className="mb-3">
          Welcome to Timeline. These Terms of Service ("Terms") govern your use of our website. 
          By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, 
          you may not access the service.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Service Description</h2>
        <p className="mb-3">
          Our service provides a platform for viewing and exploring timelines of events. The service includes:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">Viewing timeline events in either left-aligned or centered layout</li>
          <li className="mb-2">Accessing content in English or Chinese language</li>
          <li className="mb-2">Viewing event details and related information</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. User Responsibilities</h2>
        <p className="mb-3">
          When using our service, you agree to:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">Use the service in accordance with these Terms and applicable laws and regulations</li>
          <li className="mb-2">Not attempt to gain unauthorized access to any portion of the service</li>
          <li className="mb-2">Not interfere with or disrupt the service or servers</li>
          <li className="mb-2">Not use the service for any unlawful purpose</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Intellectual Property</h2>
        <p className="mb-3">
          The service and its original content, features, and functionality are owned by Timeline and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Privacy and Cookies</h2>
        <p className="mb-3">
          Our service uses cookies only to store your language and timeline view preferences. For more information about how we handle your privacy and use cookies, please refer to our <Link href={`/${currentLang}/privacy-policy`} className="text-blue-600 hover:underline">Privacy Policy</Link> and <Link href={`/${currentLang}/cookie-policy`} className="text-blue-600 hover:underline">Cookie Policy</Link>.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Links to Other Websites</h2>
        <p className="mb-3">
          Our service may contain links to third-party websites that are not owned or controlled by Timeline. Timeline has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Termination</h2>
        <p className="mb-3">
          We may terminate or suspend your access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">8. Disclaimer</h2>
        <p className="mb-3">
          The service is provided on an "AS IS" and "AS AVAILABLE" basis. Timeline makes no warranties, whether express or implied, as to the operation of the service or any information, content, materials, or products included on or otherwise made available to you through the service.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">9. Limitation of Liability</h2>
        <p className="mb-3">
          In no event shall Timeline be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">10. Changes to Terms</h2>
        <p className="mb-3">
          We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">11. Contact Us</h2>
        <p className="mb-3">
          If you have any questions about these Terms, please contact us at terms@timeline-example.com
        </p>
      </section>
      
      <div className="mt-8 pt-4 border-t border-gray-200">
        <Link href={`/${currentLang}`} className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>
    </>
  ) : (
    <>
      <h1 className="text-3xl font-bold mb-6">服务条款</h1>
      <p className="mb-4">最后更新: {new Date().toLocaleDateString()}</p>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. 引言</h2>
        <p className="mb-3">
          欢迎使用时间线。这些服务条款（"条款"）规范您对我们网站和服务的使用。
          通过访问或使用我们的服务，您同意受这些条款的约束。如果您不同意这些条款的任何部分，
          您可能无法使用该服务。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. 服务描述</h2>
        <p className="mb-3">
          我们的服务提供了一个平台，用于查看和探索事件时间线。服务包括：
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">查看时间线事件，无论是左对齐还是居中布局</li>
          <li className="mb-2">访问英文或中文内容</li>
          <li className="mb-2">查看事件详情及相关信息</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. 用户责任</h2>
        <p className="mb-3">
          使用我们的服务时，您同意：
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li className="mb-2">按照这些条款和适用法律和法规使用服务</li>
          <li className="mb-2">不要尝试获取对服务的任何部分的未经授权访问</li>
          <li className="mb-2">不要干扰或中断服务或服务器</li>
          <li className="mb-2">不要将服务用于任何非法目的</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. 知识产权</h2>
        <p className="mb-3">
          服务及其原创内容、功能和功能是并将保持为时间线及其许可方的专有财产。
          该服务受美国和外国国家的版权、商标和其他法律保护。
        </p>
        <p className="mb-3">
          未经时间线事先书面同意，我们的商标和商业外观不得与任何产品或服务一起使用。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. 隐私和Cookies</h2>
        <p className="mb-3">
          我们的服务仅使用cookies来存储您的语言和时间线视图偏好。有关我们如何处理您的隐私和使用cookies的更多信息，请参阅我们的<Link href={`/${currentLang}/privacy-policy`} className="text-blue-600 hover:underline">隐私政策</Link>和<Link href={`/${currentLang}/cookie-policy`} className="text-blue-600 hover:underline">Cookie政策</Link>。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. 其他网站的链接</h2>
        <p className="mb-3">
          我们的服务可能包含指向第三方网站的链接，这些网站不是由时间线拥有或控制的。时间线不对这些第三方网站的内容、隐私政策或实践负责。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. 终止</h2>
        <p className="mb-3">
          我们可能会立即终止或暂停您对我们服务的访问，而无需事先通知或承担任何责任，原因如下：
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">8. 免责声明</h2>
        <p className="mb-3">
          服务按"原样"和"可用"基础提供。时间线不提供任何种类的保证，无论是明示的还是暗示的，
          包括但不限于适销性、特定用途适用性、非侵权或性能过程的暗示保证。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">9. 责任限制</h2>
        <p className="mb-3">
          在任何情况下，时间线不对任何间接、偶然、特殊、后果性或惩罚性损害负责，
          包括但不限于利润损失、数据、使用、商誉或其他无形损失，由于您访问或使用或无法访问或使用服务。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">10. 条款变更</h2>
        <p className="mb-3">
          我们保留自行决定随时修改或替换这些条款的权利。如果修订是重大的，我们将尝试在任何新条款生效前至少提供30天的通知。
          什么构成重大变更将由我们自行决定。
        </p>
        <p className="mb-3">
          在这些修订生效后继续访问或使用我们的服务，即表示您同意受修订条款的约束。
          如果您不同意新条款，请停止使用该服务。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">11. 联系我们</h2>
        <p className="mb-3">
          如果您对这些条款有任何疑问，请联系我们：terms@timeline-example.com
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