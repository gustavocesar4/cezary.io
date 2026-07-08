import type { MDXRemoteProps } from "next-mdx-remote/rsc";

export const mdxComponents: NonNullable<MDXRemoteProps["components"]> = {
  h2: (props) => (
    <h2
      className="text-text mt-10 text-2xl font-semibold tracking-tight first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="text-text mt-8 text-xl font-semibold" {...props} />
  ),
  p: (props) => (
    <p className="text-text-muted mt-4 leading-relaxed" {...props} />
  ),
  ul: (props) => (
    <ul className="text-text-muted mt-4 list-disc space-y-2 pl-5" {...props} />
  ),
  ol: (props) => (
    <ol
      className="text-text-muted mt-4 list-decimal space-y-2 pl-5"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-text hover:text-text-muted underline underline-offset-4 transition-colors duration-150 ease-out"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-border-hover text-text-muted mt-6 border-l-2 pl-4 italic"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-bg-card text-text rounded-sm px-1.5 py-0.5 font-mono text-[0.85em]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="border-border bg-bg-card mt-4 overflow-x-auto rounded-md border p-4 font-mono text-sm"
      {...props}
    />
  ),
};
