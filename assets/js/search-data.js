// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-proud-to-share-that-i-have-completed-my-master-of-engineering-science-at-the-university-of-queensland-uq",
          title: '🎓 Proud to share that I have completed my Master of Engineering Science...',
          description: "",
          section: "News",},{id: "news-honored-to-receive-the-dean-s-commendation-for-academic-excellence-award",
          title: '🥇 Honored to receive the Dean’s Commendation for Academic Excellence Award.',
          description: "",
          section: "News",},{id: "news-excited-to-announce-that-i-have-been-awarded-a-full-phd-scholarship-from-uq",
          title: '🎉 Excited to announce that I have been awarded a full PhD scholarship...',
          description: "",
          section: "News",},{id: "news-thrilled-to-begin-my-phd-journey",
          title: '🧑‍💻 Thrilled to begin my PhD journey!',
          description: "",
          section: "News",},{id: "news-our-paper-beyond-genegpt-a-multi-agent-architecture-with-open-source-llms-for-enhanced-genomic-question-answering-has-been-accepted-at-sigir-ap-2025",
          title: '📑 Our paper “Beyond GeneGPT: A Multi-Agent Architecture with Open-Source LLMs for Enhanced...',
          description: "",
          section: "News",},{id: "news-our-paper-where-relevance-emerges-a-layer-wise-study-of-internal-attention-for-zero-shot-re-ranking-has-been-accepted-at-sigir-2026",
          title: '🔥 Our paper “Where Relevance Emerges: A Layer-Wise Study of Internal Attention for...',
          description: "",
          section: "News",},{id: "news-our-new-paper-search-inspect-fetch-exploiting-structure-aware-boolean-retrieval-for-deep-search-agents-introduces-sieve-a-structure-aware-search-inspect-fetch-strategy-that-improves-answer-accuracy-while-reducing-context-usage",
          title: '📑 Our new paper “Search, Inspect, Fetch: Exploiting Structure-Aware Boolean Retrieval for Deep-Search...',
          description: "",
          section: "News",},{id: "news-excited-to-share-that-our-team-placed-second-in-the-retrieval-model-optimization-based-on-agent-interaction-trajectories-track-at-ccir-cup-2026-the-code-and-technical-report-are-now-available",
          title: '🥈 Excited to share that our team placed second in the Retrieval Model...',
          description: "",
          section: "News",},{id: "news-our-paper-iter-interaction-aware-retrieval-for-agentic-search-has-been-accepted-at-wsdm-2027-findings",
          title: '🔥 Our paper “ITER: Interaction-Aware Retrieval for Agentic Search” has been accepted at...',
          description: "",
          section: "News",},{id: "projects-iter",
          title: 'ITER',
          description: "Interaction-aware retrieval for agentic search",
          section: "Projects",handler: () => {
              window.location.href = "/projects/iter/";
            },},{id: "projects-openbiollm",
          title: 'OpenBioLLM',
          description: "An Open-Source Multi-Agent Framework for Genomic Question Answering",
          section: "Projects",handler: () => {
              window.location.href = "/projects/openbiollm/";
            },},{id: "projects-skimsearch-agent",
          title: 'SkimSearch​Agent',
          description: "A research library for deep-search agents",
          section: "Projects",handler: () => {
              window.location.href = "/projects/skimsearchagent/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
