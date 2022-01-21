export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61ea81548a932bb07ad43190",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-abwaky69",
                  apiId: "fbae7b78-8d0f-440e-84a8-f2ff8a272404",
                },
                {
                  buildHookId: "61ea81548add9fb7d9240697",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-xzicuodn",
                  apiId: "b8e5fcd6-c476-4cad-bd40-84f7180c92a9",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/makechinafreedom/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-xzicuodn.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
