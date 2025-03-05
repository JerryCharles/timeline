import LanguageLayoutClient from './LanguageLayoutClient';

export default async function LangLayout({ children, params }) {
  const { lang } = await Promise.resolve(params);
  return (
    <LanguageLayoutClient lang={lang}>
      {children}
    </LanguageLayoutClient>
  );
} 