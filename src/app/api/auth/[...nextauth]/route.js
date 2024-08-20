import NextAuth from 'next-auth';
//export const { GET, POST } = handlers;
import GitHubProvide from 'next-auth/providers/github';

export const authOptions = {
    providers: [
        GitHubProvide({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
    ],
};

export const handler = NextAuth(authOptions);
export{ handler as GET, handler as POST };