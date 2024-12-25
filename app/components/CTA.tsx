const CTA = () => {
  return (
    <section className="mt-8 bg-accent hover:bg-primary rounded-lg">
      <div className="flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
        <h3 className="text-3xl font-semibold leading text-center lg:text-left text-purple-500">
          Cash Tokens Telegram Channel - Join the Conversation!
        </h3>
        <button className="px-8 py-3 text-lg font-semibold rounded bg-white text-black"> {/* Added text-black here */}
          <a
            className="no-underline"
            href="https://t.me/CashTokensBitcoinCash"
            target="_blank"
          >
            Jump In!
          </a>
        </button>
      </div>
    </section>
  );
};

export default CTA;
