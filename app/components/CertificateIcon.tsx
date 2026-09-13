type CertificateIssuer = "google" | "cs50" | "microsoft" | "security-plus";

export default function CertificateIcon({ issuer }: { issuer: CertificateIssuer }) {
  if (issuer === "google") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <path fill="#4285F4" d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.2h6.7c3.9-3.6 6-8.8 6-15.1Z" />
        <path fill="#34A853" d="M24 44c5.5 0 10.2-1.8 13.6-4.9l-6.7-5.2c-1.8 1.2-4.1 1.9-6.9 1.9-5.3 0-9.8-3.6-11.4-8.4H5.7v5.3A20.6 20.6 0 0 0 24 44Z" />
        <path fill="#FBBC05" d="M12.6 27.4a12.3 12.3 0 0 1 0-7.8v-5.3H5.7a20 20 0 0 0 0 18.4l6.9-5.3Z" />
        <path fill="#EA4335" d="M24 12.2c3 0 5.6 1 7.7 3l5.8-5.8A19.5 19.5 0 0 0 24 4 20.6 20.6 0 0 0 5.7 15.3l6.9 5.3c1.6-4.8 6.1-8.4 11.4-8.4Z" />
      </svg>
    );
  }

  if (issuer === "microsoft") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <path fill="#F25022" d="M3 3h20v20H3z" />
        <path fill="#7FBA00" d="M25 3h20v20H25z" />
        <path fill="#00A4EF" d="M3 25h20v20H3z" />
        <path fill="#FFB900" d="M25 25h20v20H25z" />
      </svg>
    );
  }

  if (issuer === "cs50") {
    return (
      <svg viewBox="0 0 52 60" aria-hidden="true" focusable="false">
        <path d="M5 4h42v24c0 13-10 23-21 29C15 51 5 41 5 28V4Z" fill="#A51C30" stroke="#F0C9CF" strokeWidth="1.8" />
        <path d="m20 12-5 4 5 4m12-8 5 4-5 4" fill="none" stroke="#F0C9CF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <text x="26" y="37" textAnchor="middle" fill="#fff" fontSize="13" fontFamily="Arial, sans-serif" fontWeight="700">CS50</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 58 66" aria-hidden="true" focusable="false">
      <path d="m29 3 24 9v20c0 14-12 24-24 31C17 56 5 46 5 32V12L29 3Z" fill="#BD3445" stroke="#F6C9CE" strokeWidth="1.8" />
      <path d="m29 13 12 5v11c0 7-5 12-12 16-7-4-12-9-12-16V18l12-5Z" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="1.4" />
      <text x="29" y="36" textAnchor="middle" fill="#fff" fontSize="19" fontFamily="Arial, sans-serif" fontWeight="700">S+</text>
    </svg>
  );
}
