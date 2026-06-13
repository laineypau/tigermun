import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button.jsx';
import { Placard } from '../components/ui/Placard.jsx';
import { SectionHeading } from '../components/ui/SectionHeading.jsx';
import { Card } from '../components/ui/Card.jsx';
import { CommitteeCard } from '../components/CommitteeCard.jsx';
import { Logo } from '../components/Logo.jsx';
import { Illustration } from '../components/Illustration.jsx';
import { COMMITTEES } from '../data/committees.js';

export default function Home() {
  const navigate = useNavigate();
  const committees = COMMITTEES.slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section style={{ position: 'relative', background: 'var(--ink-900)', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '50%', right: -90, transform: 'translateY(-50%)',
          opacity: 0.96, pointerEvents: 'none',
        }}>
          <Logo variant="mark" tone="light" size={520} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--ink-900) 42%, rgba(6,14,26,0.55) 70%, rgba(6,14,26,0.15) 100%)' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '92px 32px 100px', position: 'relative' }}>
          <div style={{ maxWidth: 680 }}>
            <BannerOverline>SAS Model UN Conference</BannerOverline>
            <div style={{
              marginTop: 18, fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'var(--sky-300)', display: 'inline-flex', alignItems: 'center', gap: 12,
            }}>
              <span style={{ width: 28, height: 2, background: 'var(--sky-400)' }} />
              Friday Oct 16 – Saturday Oct 17, 2026
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--white)',
              fontSize: 'clamp(40px, 6vw, 74px)', lineHeight: 1.04, letterSpacing: '-0.015em', margin: '18px 0 0',
            }}>
              Run by high schoolers, <span style={{ color: 'var(--sky-300)' }}>for high schoolers.</span>
            </h1>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', lineHeight: 1.65,
              color: 'var(--ink-200)', margin: '24px 0 0', maxWidth: 540,
            }}>
              Two days of debate, diplomacy, and crisis at the School for Advanced Studies —
              beginner-friendly and built to mark your future.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 34, flexWrap: 'wrap' }}>
              <Button as={Link} to="/registration" size="lg">Register Here</Button>
              <Button as={Link} to="/committees" size="lg" variant="outline"
                style={{ color: 'var(--white)', borderColor: 'var(--ink-300)' }}>
                View Committees
              </Button>
            </div>
            <div style={{ display: 'flex', gap: 14, marginTop: 46, flexWrap: 'wrap' }}>
              <Placard tone="blue" size="sm">General Assembly</Placard>
              <Placard tone="paper" size="sm">Specialized</Placard>
              <Placard tone="ink" size="sm">Crisis</Placard>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 32px' }}>
        <SectionHeading align="center" eyebrow="Why TigerMUN"
          title="Made for students, by students"
          intro="We take the experiences that shaped us in Model UN and pour them into a conference that is equal parts educational and fun." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 52 }}>
          <Feature illus="open-hand" title="Beginner friendly" body="New delegates are more than welcome. We teach the ins and outs of MUN so it never feels too big or scary." />
          <Feature illus="speech" title="Think outside the box" body="From versatile General Assemblies to fast-moving crisis rooms, we invite delegates to let their creative juices flow." />
          <Feature illus="reporters" title="A real community" body="The best part of MUN is the people. Two days of committee, awards, and friendships that outlast the gavel." />
        </div>
      </section>

      {/* SCHEDULE */}
      <section style={{ background: 'var(--bg-page-alt)', borderTop: '1px solid var(--border-hair)', borderBottom: '1px solid var(--border-hair)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '80px 32px' }}>
          <SectionHeading eyebrow="The Weekend" title="Two days of committee" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 40 }}>
            <DayCard n="1" day="Day One" date="Fri · Oct 16" body="Delegates attend opening ceremonies and dive into their introductory committee session." />
            <DayCard n="2" day="Day Two" date="Sat · Oct 17" body="A full day of debate with a lunch break in between, finishing with awards and closing ceremonies." />
          </div>
        </div>
      </section>

      {/* COMMITTEES PREVIEW */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
          <SectionHeading eyebrow="Committees" title="Find your seat at the table"
            intro="Three tracks, every experience level. From your first placard to your hardest crisis." />
          <Button as={Link} to="/committees" variant="ghost">All committees →</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 40 }}>
          {committees.map((c) => <CommitteeCard key={c.code} {...c} onClick={() => navigate('/committees')} />)}
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ position: 'relative', background: 'var(--brand)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: 40, top: '50%', transform: 'translateY(-50%)', opacity: 0.16, pointerEvents: 'none' }}>
          <Illustration name="gavel" size={260} tint="var(--white)" />
        </div>
        <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto', padding: '76px 32px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-3xl)', color: 'var(--white)', letterSpacing: '-0.015em', margin: 0 }}>
            This impact starts now.
          </h2>
          <p style={{ fontSize: 'var(--text-md)', color: 'rgba(255,255,255,0.92)', margin: '16px auto 30px', maxWidth: 520, lineHeight: 1.6 }}>
            Just by choosing TigerMUN, you are marking your future. We can't wait to see you in committee.
          </p>
          <Button as={Link} to="/registration" size="lg" variant="secondary"
            style={{ background: 'var(--ink-900)', borderColor: 'var(--ink-900)' }}>
            Register for TigerMUN
          </Button>
        </div>
      </section>
    </div>
  );
}

function BannerOverline({ children }) {
  return (
    <span style={{
      fontFamily: 'var(--font-banner)', textTransform: 'uppercase', fontSize: 'clamp(26px, 3vw, 40px)',
      letterSpacing: '0.01em', lineHeight: 0.92, color: 'transparent',
      WebkitTextStroke: '1.5px var(--sky-300)', display: 'inline-block',
    }}>
      {children}
    </span>
  );
}

function Feature({ title, body, illus }) {
  return (
    <Card accent hover style={{ display: 'flex', flexDirection: 'column', gap: 14, paddingTop: 'var(--space-7)' }}>
      <div style={{ height: 92, display: 'flex', alignItems: 'center' }}>
        <Illustration name={illus} size={88} />
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)', color: 'var(--ink-900)', margin: 0 }}>{title}</h3>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{body}</p>
    </Card>
  );
}

function DayCard({ n, day, date, body }) {
  return (
    <div style={{
      display: 'flex', gap: 20, padding: 28, background: 'var(--white)',
      border: '1px solid var(--border-hair)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)',
    }}>
      <div style={{
        flexShrink: 0, width: 64, height: 64, borderRadius: 'var(--radius-md)',
        background: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, lineHeight: 1 }}>{n}</span>
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--ink-900)', margin: 0 }}>{day}</h3>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--brand)' }}>{date}</span>
        </div>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{body}</p>
      </div>
    </div>
  );
}
