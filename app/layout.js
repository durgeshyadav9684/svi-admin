import LayoutClient from '@/components/LayoutClient';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
