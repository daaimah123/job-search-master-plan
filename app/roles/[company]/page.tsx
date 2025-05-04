// This is a Server Component (no "use client" directive)

import { JSX } from 'react';
import DynamicRolePageClient from './client-page';

export function generateStaticParams() {
  // Return all possible values for [company]
  return [
    { company: 'intuit' },
    { company: 'datadog' },
    // Add any other companies that your app will have
    // TO-DO this needs to be addressed programmatically
  ];
}

export default function DynamicRolePage(props: JSX.IntrinsicAttributes) {
    return <DynamicRolePageClient {...props} />;
  }