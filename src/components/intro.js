export default function Intro() {
  return (
    <section className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12">
      <h1 className="text-6xl font-bold leading-tight tracking-tighter md:text-8xl md:pr-8">
        Blog.
      </h1>
      <h2 className="mt-5 text-lg text-center md:text-left md:pl-8">
        A statically generated blog example using{" "}
        <a
          href="https://nextjs.org/"
          className="underline transition-colors duration-200 hover:text-blue-600"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://www.datocms.com"
          className="underline transition-colors duration-200 hover:text-blue-600"
        >
          DatoCMS
        </a>
        .
      </h2>
    </section>
  );
}