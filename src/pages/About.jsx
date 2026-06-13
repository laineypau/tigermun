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
      <PageHeader eyebrow="About" title="What is TigerMUN?" />

      {/* WHAT IS TIGERMUN */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Illustration name="open-hand" size={180} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={bodyText}>
              TigerMUN stands out from other conference as we are run by highschoolers, for highschoolers.
              We take the experiences which shaped us in Model United Nations and incorparate them into
              this conference. We are beginner friendly, so new delegates are more than welcome! In these
              three days of committee, delegates will learn all the ins and outs of MUN so it does not feel
              so big and scary.
            </p>
            <p style={bodyText}>
              Overall, we are striving for this conference to be both fun and educational. Through our
              unique crisis committees for more experienced delegates and versatile General Assembly
              Committees, we invite delegates to think outside the box and let their creative juices flow!
              TigerMUN takes the fundamental procedures of the United Nations and expands this organization
              to the younger minds we are sure will make a big impact in the future. This impact starts now;
              just by choosing Tiger MUN you are marking your future.
            </p>
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
                Check out the official Model United Nations website
              </Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Illustration name="books-stack" size={180} />
            </div>
          </div>
        </div>
      </section>

      {/* SECRETARIAT */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '88px 32px', textAlign: 'center' }}>
        <Button as={Link} to="/secretariat" size="lg">The Secretariat</Button>
      </section>
    </div>
  );
}
