import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

// ponytail: Generated high-contrast favicon with zero asset payload
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: '#0B0D10',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#2DD4BF',
          fontFamily: 'monospace',
          fontWeight: 700,
          borderRadius: 6,
          border: '1px solid #1E232B',
        }}
      >
        AB
      </div>
    ),
    { ...size }
  );
}
