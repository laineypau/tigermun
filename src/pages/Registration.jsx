import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button.jsx';
import { Input } from '../components/ui/Input.jsx';
import { PageHeader } from '../components/PageHeader.jsx';

const TRACKS = ['General Assembly', 'Specialized', 'Crisis'];

export default function Registration() {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', school: '', track: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const valid = form.name && form.email.includes('@') && form.school && form.track;

  if (done) {
    return (
      <div>
        <PageHeader eyebrow="Registration" title="You're on the list" />
        <section style={{ maxWidth: 620, margin: '0 auto', padding: '64px 32px 110px', textAlign: 'center' }}>
          <div style={{
            width: 72, height: 72, borderRadius: '999px', background: 'var(--success-50)',
            margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--success-500)', fontSize: 36,
          }}>✓</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-2xl)', color: 'var(--ink-900)', margin: '0 0 12px' }}>
            See you in committee, {form.name.split(' ')[0]}.
          </h2>
          <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-body)', lineHeight: 1.6, margin: '0 0 28px' }}>
            We've reserved your spot for the <strong>{form.track}</strong> track. A confirmation and committee
            placement will be sent to <strong>{form.email}</strong>. This impact starts now.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button as={Link} to="/committees">Explore committees</Button>
            <Button variant="outline" onClick={() => { setDone(false); setForm({ name: '', email: '', school: '', track: '' }); }}>Register another</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <PageHeader eyebrow="Registration" title="Claim your placard"
        intro="Registration takes two minutes. New delegates are more than welcome — we'll handle the rest." />
      <section style={{ maxWidth: 1040, margin: '0 auto', padding: '56px 32px 96px', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, alignItems: 'start' }}>
        {/* form */}
        <div style={{
          background: 'var(--white)', border: '1px solid var(--border-hair)',
          borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', padding: 32,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Input label="Full name" placeholder="Jane Diplomat" value={form.name} onChange={set('name')} required />
            <Input label="Email" type="email" placeholder="jane@school.edu" value={form.email} onChange={set('email')} required />
            <Input label="School" placeholder="School for Advanced Studies" value={form.school} onChange={set('school')} required />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              <label style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--ink-800)' }}>
                Preferred track<span style={{ color: 'var(--brand)', marginLeft: 3 }}>*</span>
              </label>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {TRACKS.map((t) => {
                  const on = form.track === t;
                  return (
                    <button key={t} onClick={() => setForm((f) => ({ ...f, track: t }))} style={{
                      flex: '1 1 30%', padding: '12px 10px', cursor: 'pointer',
                      borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-sans)',
                      fontSize: 'var(--text-sm)', fontWeight: 600,
                      border: `1.5px solid ${on ? 'var(--brand)' : 'var(--border-soft)'}`,
                      background: on ? 'var(--brand-subtle)' : 'var(--white)',
                      color: on ? 'var(--brand)' : 'var(--ink-700)',
                    }}>{t}</button>
                  );
                })}
              </div>
            </div>
            <Button size="lg" full disabled={!valid} onClick={() => valid && setDone(true)} style={{ marginTop: 8 }}>
              Complete registration
            </Button>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-faint)', textAlign: 'center', margin: 0 }}>
              Demo form — no data is submitted.
            </p>
          </div>
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
