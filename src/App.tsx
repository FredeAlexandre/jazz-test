import { useAccount } from "jazz-react";

function App() {
  const { me, logOut } = useAccount({ resolve: { profile: true, root: true } });

  if (!me) {
    return (
      <main>
        <h1>You're logged in but no me</h1>
        <button onClick={() => logOut()}>Logout</button>
      </main>
    );
  }

  return (
    <main>
      <h1>You're logged in</h1>
      <input value={me.profile.firstName || ""} onChange={(e) => (me.profile.firstName = e.target.value)} />
      <button onClick={() => logOut()}>Logout</button>
    </main>
  );
}

export default App;