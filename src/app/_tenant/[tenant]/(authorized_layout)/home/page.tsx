import { getTenantData } from '@share/utils/getTenantData';
import Link from 'next/link';

export default async function Home({ params }: { params: { tenant: string } }) {
  return (
    <div>
      Home apge <Link href="/">go root</Link>
    </div>
  );
}
