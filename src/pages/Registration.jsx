import { Button } from '../components/ui/Button.jsx';
import { PageHeader } from '../components/PageHeader.jsx';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdkWH3_hMniLrJ71IzOGdAlOlM8brKK07UNu1gcEjdDH7lVUw/viewform';

export default function Registration() {
  return (
    <div>
      <PageHeader eyebrow="Registration" title="Claim your placard"
        intro="Registration takes just a couple of minutes through our interest form. New delegates are more than welcome — we'll handle the rest." />
      <section style={{ maxWidth: 1040, margin: '0 auto', padding: '56px 32px 96px', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, alignItems: 'start' }}>
        <div style={{
          background: 'var(--white)', border: '1px solid var(--border-hair)',
          borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', padding: 32, textAlign: 'center',
        }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-xl)', color: 'var(--ink-900)', margin: '0 0 12px' }}>
            TigerMUN I Interest Form
          </h2>
          <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', lineHeight: 1.6, margin: '0 0 24px' }}>
            Fill out the official interest form to register for TigerMUN — it's the first step to claiming
            your seat at the table.
          </p>
          <Button as="a" href={FORM_URL} target="_blank" rel="noreferrer" size="lg" full>
            Open the Interest Form
          </Button>
        </div>
        {/* aside */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ background: 'var(--ink-800)', borderRadius: 'var(--radius-lg)', padding: 26, color: 'var(--white)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--sky-300)', marginBottom: 14 }}>At a glance</div>
            <Detail k="Dates" v="Oct 16–17, 2026" />
            <Detail k="Where" v="SAS · Miami, FL" />
            <Detail k="Tracks" v="GA · Specialized · Crisis" />
            <Detail k="Level" v="Beginner → Advanced" />
          </div>
          <div style={{ background: 'var(--bg-page-alt)', border: '1px solid var(--border-hair)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'var(--text-md)', color: 'var(--ink-800)', lineHeight: 1.5, margin: 0 }}>
              "Just by choosing TigerMUN, you are marking your future."
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}

function Detail({ k, v }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 0', borderBottom: '1px solid var(--ink-700)' }}>
      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-200)' }}>{k}</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.04em', color: 'var(--cream)', textAlign: 'right' }}>{v}</span>
    </div>
  );
}
