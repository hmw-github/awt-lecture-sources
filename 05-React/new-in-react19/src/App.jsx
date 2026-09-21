// ReactNewFeaturesDemo.jsx
// A small demo touching the headline React 19.x features:
//   - ref as a normal prop (no forwardRef)
//   - Actions + useActionState + useOptimistic (async forms w/o manual state)
//   - use() for reading a promise/context during render
//   - Native document metadata (<title>, <meta>)
//   - <Activity> to hide/preserve subtree state (React 19.2+)

import { use, useState, useOptimistic, useActionState, Activity } from "react";

// --- 1. ref as a plain prop (React 19) ---------------------------------
// No forwardRef needed anymore.
function TextInput({ label, ref }) {
  return (
    <label style={{ display: "block", marginBottom: 8 }}>
      {label}
      <input ref={ref} style={{ marginLeft: 8 }} />
    </label>
  );
}

// --- 2. use() to read a promise during render (React 19) ---------------
// Suspends the component until the promise resolves.
function UserGreeting({ userPromise }) {
  const user = use(userPromise); // reads the resolved value directly
  return <p>Welcome back, {user.name}!</p>;
}

// --- 3. Actions: async transitions + useActionState + useOptimistic ----
// No manual isSubmitting/error state — React tracks pending/error for you.
async function saveNameAction(prevState, formData) {
  const name = formData.get("name");
  await new Promise((r) => setTimeout(r, 800)); // pretend network call
  if (!name) return { error: "Name can't be empty" };
  return { error: null, name };
}

function NameForm() {
  const [state, formAction, isPending] = useActionState(saveNameAction, {
    error: null,
    name: "Anna",
  });
  const [optimisticName, setOptimisticName] = useOptimistic(state.name);

  return (
    <form
      action={(formData) => {
        setOptimisticName(formData.get("name")); // instant UI update
        formAction(formData); // real update runs in the background
      }}
    >
      <input name="name" defaultValue={optimisticName} />
      <button type="submit" disabled={isPending}>
        {isPending ? "Saving…" : "Save"}
      </button>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      <p>Current name: {optimisticName}</p>
    </form>
  );
}

// --- 4. <Activity> keeps a hidden subtree's state alive (React 19.2) ---
function Tabs() {
  const [tab, setTab] = useState("a");
  return (
    <div>
      <button onClick={() => setTab("a")}>Tab A</button>
      <button onClick={() => setTab("b")}>Tab B</button>

      <Activity mode={tab === "a" ? "visible" : "hidden"}>
        <NameForm /> {/* keeps its draft state even when hidden */}
      </Activity>
      <Activity mode={tab === "b" ? "visible" : "hidden"}>
        <p>Tab B content</p>
      </Activity>
    </div>
  );
}

// --- 5. Putting it together, with native document metadata (React 19) --
const userPromise = Promise.resolve({ name: "Rajesh" });

export default function App() {
  const inputRef = useState(null)[0]; // just for the TextInput demo

  return (
    <>
      {/* Rendered anywhere in the tree, React hoists these to <head> */}
      <title>React 19 Feature Demo</title>
      <meta name="description" content="Small demo of React 19.x features" />

      <h1>React 19.x feature tour</h1>
      <TextInput label="Focus me:" ref={inputRef} />
      <UserGreeting userPromise={userPromise} />
      <Tabs />
    </>
  );
}
