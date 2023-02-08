import { Component, createSignal } from 'solid-js';

export const Timeline: Component = () => {
  const [count, setCount] = createSignal(0);
  return (
    <button
      class="rounded border border-solid border-blue-500 p-2 active:bg-blue-400"
      onClick={() => setCount((prev) => prev + 1)}
    >
      {count()}
    </button>
  );
};
