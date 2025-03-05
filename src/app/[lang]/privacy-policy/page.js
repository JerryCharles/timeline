import { PrivacyPolicyClient } from './client-page';

export default async function PrivacyPolicy({ params }) {
  const resolvedParams = await Promise.resolve(params);
  return <PrivacyPolicyClient params={resolvedParams} />;
} 