const CTA = () => {
  return (
    <section className="mt-4 bg-accent hover:bg-primary rounded-lg">
      <div className="flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
        <h3 className="text-3xl font-semibold leadi text-center lg:text-left text-white">
          Need help with BCH/CashTokens development?
        </h3>
        <button className="px-8 py-3 text-lg font-semibold rounded bg-white">
          <a className="no-underline" href="mailto:george@panmoni.com">
            Get a free consultation
          </a>
        </button>
      </div>
    </section>
  );
};

export default CTA;
