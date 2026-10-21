import { ImageResponse } from 'next/og';

export const alt = 'Adam Benbouazza — Full-Stack Developer & AI Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// ponytail: Native high-performance OpenGraph card generated at build time
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0B0D10',
          padding: '80px',
          fontFamily: 'sans-serif',
          border: '1px solid #1E232B',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              backgroundColor: '#12151A',
              border: '1px solid #1E232B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2DD4BF',
              fontSize: '20px',
              fontFamily: 'monospace',
              fontWeight: 700,
            }}
          >
            AB
          </div>
          <span style={{ color: '#9AA3AE', fontSize: '18px', fontFamily: 'monospace' }}>
            adambenbouazza.dev // Full-Stack & AI
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: '60px',
              fontWeight: 700,
              color: '#E8EAED',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Adam Benbouazza
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#2DD4BF',
              fontWeight: 600,
            }}
          >
            AI Engineer & Full-Stack Developer
          </div>
          <div
            style={{
              fontSize: '20px',
              color: '#9AA3AE',
              maxWidth: '900px',
              lineHeight: 1.5,
            }}
          >
            Built an industrial KPI platform with anomaly detection and an LLM assistant at LEONI.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #1E232B',
            paddingTop: '32px',
          }}
        >
          <span style={{ color: '#E8EAED', fontSize: '18px', fontFamily: 'monospace' }}>
            Based in Morocco · Open to relocate in Europe
          </span>
          <div
            style={{
              display: 'flex',
              gap: '12px',
            }}
          >
            <span
              style={{
                backgroundColor: '#12151A',
                border: '1px solid #1E232B',
                color: '#2DD4BF',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '14px',
                fontFamily: 'monospace',
              }}
            >
              FastAPI
            </span>
            <span
              style={{
                backgroundColor: '#12151A',
                border: '1px solid #1E232B',
                color: '#2DD4BF',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '14px',
                fontFamily: 'monospace',
              }}
            >
              React / Next.js
            </span>
            <span
              style={{
                backgroundColor: '#12151A',
                border: '1px solid #1E232B',
                color: '#2DD4BF',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '14px',
                fontFamily: 'monospace',
              }}
            >
              XGBoost / SHAP
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
