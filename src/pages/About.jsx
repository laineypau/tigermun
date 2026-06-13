import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.jsx';
import { SectionHeading } from '../components/ui/SectionHeading.jsx';
import { Button } from '../components/ui/Button.jsx';
import { Illustration } from '../components/Illustration.jsx';

const bodyText = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-md)',
  lineHeight: 1.7,
  color: 'var(--text-body)',
  margin: 0,
};

export default function About() {
  return (
    <div>
      <PageHeader eyebrow="About" title="What is TigerMUN?"
        intro="TigerMUN stands out from other conferences because we're run by high schoolers, for high schoolers." />

      {/* WHAT IS TIGERMUN */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Illustration name="open-hand" size={180} />
          </div>
          <div>
            <SectionHeading eyebrow="Our Mission" title="Made for delegates, by delegates" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 20 }}>
              <p style={bodyText}>
                Our secretariat draws on our own experiences in Model UN to build a conference that welcomes
                delegates at every level — from a first committee session to a toughest crisis arc.
              </p>
              <p style={bodyText}>
                In these two days of committee, delegates will learn all the ins and outs of MUN so it never
                feels too big or too scary. We balance fun with educational value: crisis committees for
                delegates looking for a challenge, and General Assembly committees built for creative
                problem-solving.
              </p>
              <p style={bodyText}>
                TigerMUN takes the fundamental procedures of the United Nations and opens them up to the
                next generation of young leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT MODEL UN */}
      <section style={{ background: 'var(--bg-page-alt)', borderTop: '1px solid var(--border-hair)', borderBottom: '1px solid var(--border-hair)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <SectionHeading eyebrow="Model UN" title="About Model UN" />
              <p style={{ ...bodyText, marginTop: 20 }}>
                Model United Nations (MUN) is an academic simulation of the United Nations where students
                take on the roles of diplomats representing different countries. Delegates research global
                issues, debate solutions, negotiate with other nations, and draft resolutions to address
                real-world challenges. MUN helps students develop public speaking, critical thinking,
                diplomacy, negotiation, and leadership skills while gaining a deeper understanding of
                international relations and current events. Whether you are a first-time delegate or an
                experienced participant, MUN offers a unique opportunity to engage with the world from a
                global perspective.
              </p>
              <Button as="a" href="https://www.un.org/en/mun" target="_blank" rel="noreferrer"
                variant="outline" style={{ marginTop: 24 }}>
                Visit the official Model UN site →
              </Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Illustration name="books-stack" size={180} />
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE SECRETARIAT CTA */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '88px 32px', textAlign: 'center' }}>
        <SectionHeading align="center" eyebrow="The Team" title="Meet the Secretariat"
          intro="Seven student leaders run the show — get to know the people behind TigerMUN." />
        <div style={{ marginTop: 32 }}>
          <Button as={Link} to="/secretariat" size="lg">Meet the Secretariat</Button>
        </div>
      </section>
    </div>
  );
}
