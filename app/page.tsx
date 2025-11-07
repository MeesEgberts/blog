import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`
        I'm Mees Egberts, an entrepreneur and software engineer from the
        Netherlands. I’ve spent the past years building digital products and
        SaaS platforms, driven by a fascination with how thoughtful design and
        solid engineering can create systems that scale — both technically and
        for the people who use them.
        `}
      </p>
      <p className="mb-4">
        {`
        Over time, I’ve worked across different domains, from startups to client
        projects, always aiming to bridge clean architecture with practical
        business needs.
        `}
      </p>
      <p className="mb-4">
        {`
        I'm always eager to learn, explore new ideas, and refine my approach to
        building products. On this website, I share insights, lessons, and
        reflections from my journey as a developer and entrepreneur.
        `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
