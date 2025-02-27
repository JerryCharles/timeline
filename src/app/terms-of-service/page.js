"use client";

import { useLanguage, LANGUAGES } from '../../contexts/LanguageContext';
import Link from 'next/link';

export default function TermsOfService() {
  const { language } = useLanguage();
  
  const content = language === LANGUAGES.EN ? (
    <>
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
        <p className="mb-3">
          Welcome to Timeline. These Terms of Service ("Terms") govern your use of our website and services. 
          By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, 
          you may not access the service.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Use of Service</h2>
        <p className="mb-3">
          Our service allows you to create, view, and share timelines of events. You are responsible for your use of the service 
          and any content you provide, including compliance with applicable laws, rules, and regulations.
        </p>
        <p className="mb-3">
          You may not use our service for any illegal or unauthorized purpose nor may you, in the use of the service, 
          violate any laws in your jurisdiction (including but not limited to copyright laws).
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. User Accounts</h2>
        <p className="mb-3">
          When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
          Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service.
        </p>
        <p className="mb-3">
          You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Intellectual Property</h2>
        <p className="mb-3">
          The service and its original content, features, and functionality are and will remain the exclusive property of Timeline and its licensors. 
          The service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
        </p>
        <p className="mb-3">
          Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Timeline.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. User Content</h2>
        <p className="mb-3">
          Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, 
          or other material ("Content"). You are responsible for the Content that you post on or through the service, including its legality, 
          reliability, and appropriateness.
        </p>
        <p className="mb-3">
          By posting Content on or through the service, you represent and warrant that: (i) the Content is yours (you own it) or you have 
          the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your Content on or 
          through the service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Limitation of Liability</h2>
        <p className="mb-3">
          In no event shall Timeline, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, 
          incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other 
          intangible losses, resulting from (i) your access to or use of or inability to access or use the service; (ii) any conduct or content 
          of any third party on the service; (iii) any content obtained from the service; and (iv) unauthorized access, use or alteration of your 
          transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not 
          we have been informed of the possibility of such damage.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Disclaimer</h2>
        <p className="mb-3">
          Your use of the service is at your sole risk. The service is provided on an "AS IS" and "AS AVAILABLE" basis. The service is provided 
          without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, 
          fitness for a particular purpose, non-infringement or course of performance.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">8. Governing Law</h2>
        <p className="mb-3">
          These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
        </p>
        <p className="mb-3">
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these 
          Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">9. Changes to Terms</h2>
        <p className="mb-3">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to 
          provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
        <p className="mb-3">
          By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms. 
          If you do not agree to the new terms, please stop using the service.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
        <p className="mb-3">
          If you have any questions about these Terms, please contact us at:
        </p>
        <p className="mb-3">
          <a href="mailto:terms@timeline-example.com" className="text-blue-600 hover:underline">terms@timeline-example.com</a>
        </p>
      </section>
      
      <div className="mt-8 pt-4 border-t border-gray-200">
        <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
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
        <h2 className="text-xl font-semibold mb-3">2. 服务使用</h2>
        <p className="mb-3">
          我们的服务允许您创建、查看和分享事件时间线。您对服务的使用以及您提供的任何内容负责，
          包括遵守适用的法律、规则和法规。
        </p>
        <p className="mb-3">
          您不得将我们的服务用于任何非法或未经授权的目的，也不得在使用服务时违反您所在司法管辖区的任何法律（包括但不限于版权法）。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. 用户账户</h2>
        <p className="mb-3">
          当您在我们这里创建账户时，您必须提供始终准确、完整和最新的信息。
          未能这样做构成违反条款，可能导致您在我们服务上的账户立即终止。
        </p>
        <p className="mb-3">
          您负责保护您用于访问服务的密码，以及在您的密码下进行的任何活动或操作。
        </p>
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
        <h2 className="text-xl font-semibold mb-3">5. 用户内容</h2>
        <p className="mb-3">
          我们的服务允许您发布、链接、存储、共享和以其他方式提供某些信息、文本、图形、视频或其他材料（"内容"）。
          您对您在服务上或通过服务发布的内容负责，包括其合法性、可靠性和适当性。
        </p>
        <p className="mb-3">
          通过在服务上或通过服务发布内容，您表示并保证：(i) 内容是您的（您拥有它）或您有权使用它并授予我们这些条款中提供的权利和许可，
          以及 (ii) 您在服务上或通过服务发布的内容不侵犯任何人的隐私权、宣传权、版权、合同权或任何其他权利。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. 责任限制</h2>
        <p className="mb-3">
          在任何情况下，时间线及其董事、员工、合作伙伴、代理商、供应商或附属机构均不对任何间接、偶然、特殊、后果性或惩罚性损害负责，
          包括但不限于利润损失、数据、使用、商誉或其他无形损失，由于 (i) 您访问或使用或无法访问或使用服务；(ii) 服务上任何第三方的任何行为或内容；
          (iii) 从服务获得的任何内容；以及 (iv) 未经授权访问、使用或更改您的传输或内容，无论是基于保证、合同、侵权（包括疏忽）或任何其他法律理论，
          无论我们是否已被告知此类损害的可能性。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. 免责声明</h2>
        <p className="mb-3">
          您使用服务的风险由您自行承担。服务按"原样"和"可用"基础提供。服务不提供任何种类的保证，无论是明示的还是暗示的，
          包括但不限于适销性、特定用途适用性、非侵权或性能过程的暗示保证。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">8. 适用法律</h2>
        <p className="mb-3">
          这些条款应受美国法律管辖并按其解释，不考虑其冲突法规定。
        </p>
        <p className="mb-3">
          我们未能执行这些条款的任何权利或规定不会被视为放弃这些权利。如果这些条款的任何规定被法院认定为无效或不可执行，
          这些条款的其余规定将继续有效。
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">9. 条款变更</h2>
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
        <h2 className="text-xl font-semibold mb-3">10. 联系我们</h2>
        <p className="mb-3">
          如果您对这些条款有任何疑问，请联系我们：
        </p>
        <p className="mb-3">
          <a href="mailto:terms@timeline-example.com" className="text-blue-600 hover:underline">terms@timeline-example.com</a>
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