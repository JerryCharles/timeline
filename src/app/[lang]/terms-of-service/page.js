import { TermsOfServiceClient } from './client-page';

export default async function TermsOfService({ params }) {
  const resolvedParams = await Promise.resolve(params);
  return <TermsOfServiceClient params={resolvedParams} />;
} 