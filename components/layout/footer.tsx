export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>
          Edriene Jay Cabanela
        </p>

        <p>
          Computer Engineer
        </p>

        <p>
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}