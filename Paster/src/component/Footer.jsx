const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 mt-25">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-8 text-center">

        {/* Warning notice */}
        <div className="flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-left">
          <svg
            className="mt-0.5 h-5 w-5 shrink-0 text-amber-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 9v4M12 17h.01" />
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          </svg>
          <p className="text-sm text-amber-200/90">
            <span className="font-semibold text-amber-300">Privacy notice:</span>{" "}
            Pastes are saved in your browser's localStorage in plain text. Please
            don't store passwords, API keys, or other sensitive information here.
          </p>
        </div>

        {/* Brand + copyright */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-2 font-bold tracking-tight text-slate-100">
            <svg
              className="h-5 w-5 text-purple-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" />
              <path d="M3 8l9 5 9-5" />
              <path d="M12 13v8" />
            </svg>
            Paste<span className="text-purple-400">Box</span>
          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-slate-300">AnandKumarAgrahari</span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;