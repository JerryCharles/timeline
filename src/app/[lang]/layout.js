import LanguageLayoutClient from './LanguageLayoutClient';

export default async function LangLayout({ children, params }) {
  const { lang } = params;
  return (
    <LanguageLayoutClient lang={lang}>
      {children}
    </LanguageLayoutClient>
  );
} 