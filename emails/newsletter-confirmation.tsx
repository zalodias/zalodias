import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from '@react-email/components';

export default function NewsletterConfirmation() {
  return (
    <Html lang="en">
      <Head />
      <Preview>You're subscribed — thanks for joining!</Preview>
      <Body style={body}>
        <Container style={container}>
          <Heading style={heading}>You're in.</Heading>
          <Text style={paragraph}>Thanks for subscribing!</Text>
          <Text style={paragraph}>
            I'll reach out whenever I have something worth sharing — projects
            I'm working on, things I've learned, or ideas I find interesting.
          </Text>
          <Text style={paragraph}>
            Expect updates to be infrequent but meaningful. No noise.
          </Text>
          <Hr style={divider} />
          <Text style={footer}>
            If you didn't subscribe, you can safely ignore this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const body: React.CSSProperties = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container: React.CSSProperties = {
  maxWidth: '560px',
  margin: '48px auto',
  padding: '0 24px',
};

const heading: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: '600',
  letterSpacing: '-0.02em',
  margin: '0 0 24px',
};

const paragraph: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: '26px',
  fontWeight: '400',
  color: 'hsl(35, 4%, 8%)',
  margin: '0 0 16px',
};

const divider: React.CSSProperties = {
  borderColor: 'hsl(35, 4%, 88%)',
  margin: '32px 0 24px',
};

const footer: React.CSSProperties = {
  fontSize: '12px',
  lineHeight: '16px',
  color: 'hsl(35, 4%, 48%)',
  margin: '0',
};
