import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";

export default async function Layout({ children }) {
    const session = await getServerSession();
    return (
      <html lang="en">
        <body>
        <SessionProvider session={session}>
            {children}
          </SessionProvider>
        </body>
      </html>
    );
  }
  