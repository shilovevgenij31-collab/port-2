import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-bg)] px-4 py-24 text-center">
      <p className="section-label">404</p>
      <h1 className="display-title mt-3.5 text-[32px] sm:text-[40px]">Страница не найдена</h1>
      <p className="lead-copy mx-auto mt-4.5 max-w-[32rem] text-[15px]">
        Похоже, нужная страница уже недоступна или была перемещена.
      </p>
      <Link href="/" className="btn btn-primary mt-7 inline-flex">
        Вернуться на главную
      </Link>
    </main>
  );
}
