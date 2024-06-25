export const FooterSubscription = () => {
  return (
    <form className="max-w-sm mx-auto">
      <label
        htmlFor="email"
        className="block my-2 text-sm font-medium text-white dark:text-white"
      >
        Subscribe by putting in your email
      </label>
      <input
        type="email"
        id="email"
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="basketballLover@nba.com"
      />
      <button className="bg-red-500 text-white p-2 mt-2"> Subscribe</button>
      <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Subscribe to get limited time discounts! Read our{" "}
        <a href="/terms" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Terms and Conditions
        </a>
        .
      </p>
    </form>
  );
};
