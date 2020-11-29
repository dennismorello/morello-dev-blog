// Components
import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl md:text-7xl">
        More Stories
      </h2>
      <div className="grid grid-cols-1 mb-32 gap-y-20 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 md:gap-y-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.publicationDate}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
