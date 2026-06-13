import { PageHeader } from '../components/PageHeader.jsx';
import { Badge } from '../components/ui/Badge.jsx';
import { Card } from '../components/ui/Card.jsx';
import { Illustration } from '../components/Illustration.jsx';

const TRACKS = [
  { label: 'General Assembly', tone: 'sky' },
  { label: 'Specialized', tone: 'brand' },
  { label: 'Crisis', tone: 'ink' },
];

export default function Committees() {
  return (
    <div>
      <PageHeader eyebrow="Committees" title="Coming soon"
        intro="Three tracks, every level — General Assembly, Specialized, and Crisis." />
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '88px 32px 110px' }}>
        <Card style={{ padding: 'var(--space-7)', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <Illustration name="scales" size={120} />
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
            {TRACKS.map((t) => <Badge key={t.label} tone={t.tone}>{t.label}</Badge>)}
          </div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', lineHeight: 1.7, color: 'var(--text-body)', margin: 0 }}>
            More committee information will be released late June to early July. Please check back then, or
            kindly contact Under Secretary General of Delegate Affairs, Alexa Pla, at{' '}
            <a href="mailto:alexav.pla@gmail.com" style={{ color: 'var(--brand)', fontWeight: 600 }}>alexav.pla@gmail.com</a>{' '}
            for further inquiries.
          </p>
        </Card>
      </section>
    </div>
  );
}
