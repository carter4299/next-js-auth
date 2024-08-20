import { headers } from "next/headers";

export default async function APIFromServer() {
  try {
    const res = await fetch("http://localhost:3000/api/get-user", {
      method: "GET",
      headers: headers(),
    });

    // Check if the response is OK (status 200-299)
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    // Try to parse the response as JSON
    const resp = await res.json();

    return (
      <div>
        <div>
          API Route From <span className="font-bold underline">Server</span>
        </div>
        <div>Name: {resp?.name}</div>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch the data:", error);

    return (
      <div>
        <div>
          API Route From <span className="font-bold underline">Server</span>
        </div>
        <div>Error: Could not load user data</div>
      </div>
    );
  }
}
