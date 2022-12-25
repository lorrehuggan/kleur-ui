const Headline = () => {
  return (
    <section className="container-lg pt-10">
      <h1 className="text-center text-5xl font-bold tracking-tighter">
        Build Your Own Tailwind<br></br>Color Palletes
      </h1>
      <p className="mt-8 text-center text-lg text-neutral-500">
        {`
          Just enter a hex code and I'll design a color family for your Tailwind
        CSS theme.
      `}
      </p>
    </section>
  );
};

export default Headline;
