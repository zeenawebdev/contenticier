export default [ {
    name: 'Podcast Name Generator',
    desc: 'Generate creative and catchy names for your podcast.',
    category: 'Podcast',
    icon: '/podcast.svg',
    image:'https://img.freepik.com/free-photo/retro-microphone-isolated-color-background_1387-912.jpg?t=st=1724880728~exp=1724884328~hmac=31a94b5b93836c530ad8686b8805ece14257a7092a12804f3d0e4d7bd73ac6bf&w=900',
    aiPrompt: 'Generate podcast name ideas based on the provided theme and target audience.',
    slug: 'podcast-name-generator',
    form: [
      {
        label: 'Enter your podcast theme',
        field: 'input',
        name: 'theme',
        required: true
      },
      {
        label: 'Enter your target audience',
        field: 'textarea',
        name: 'audience'
      }
    ]
  },
  {
    name: 'Email Template Generator',
    desc: 'Create email templates based on the purpose and tone.',
    category: 'Emails',
    icon: '/email.svg',
    aiPrompt: 'Generate email templates based on the given purpose and tone.',
    slug: 'email-template-generator',
    form: [
      {
        label: 'Enter the purpose',
        field: 'input',
        name: 'purpose',
        required: true
      },
      {
        label: 'Enter the tone',
        field: 'input',
        name: 'tone'
      }
    ]
  },
  {
    name: 'YouTube Video Title Generator',
    desc: 'Discover SEO-optimized titles for your next YouTube video.',
    category: 'YouTube Tools',
    icon: '/youtube.svg',
    aiPrompt: 'Generate 5 high-ranking, SEO-optimized video title ideas based on topic keywords and description.',
    slug: 'youtube-seo-title',
    form: [
      {
        label: 'Enter your video topic keywords',
        field: 'input',
        name: 'niche',
        required: true
      },
      {
        label: 'Enter your video description outline',
        field: 'textarea',
        name: 'outline'
      }
    ]
  },
  {
    name: 'Blog Content Generator',
    desc: 'Generate a complete blog article in seconds with AI assistance.',
    category: 'Blog',
    pro:true,
    image:'https://img.freepik.com/free-photo/closeup-shot-woman-working-studying-from-home-with-red-coffee-cup-nearby_181624-19822.jpg?t=st=1724880861~exp=1724884461~hmac=67e8181c564b7c9f16a31741cd5b0d6530834431ca0f0756b7ac65b1ae3e7014&w=900',
    icon: '/blog.svg',
    aiPrompt: 'Generate blog content based on the provided topic and outline.',
    slug: 'blog-content-generation',
    form: [
      {
        label: 'Enter your blog topic',
        field: 'input',
        name: 'topic',
        required: true
      },
      {
        label: 'Enter your blog outline',
        field: 'textarea',
        name: 'outline'
      }
    ]
  },
  {
    name: 'Recipe Writer',
    desc: 'Generate recipes based on ingredients and cuisine type.',
    category: 'Food',
    image:'https://img.freepik.com/free-photo/female-chef-with-glove-chopping-salad_23-2148763182.jpg?t=st=1724880953~exp=1724884553~hmac=37e6282251fe12dfd6d95dcbeb9233a8498b89054d842243caac4aeb39ce0207&w=900',
    icon: '/reciepe.svg',
    aiPrompt: 'Create a recipe based on the provided ingredients and cuisine type.',
    slug: 'recipe-writer',
    form: [
      {
        label: 'Enter your ingredients',
        field: 'textarea',
        name: 'ingredients',
        required: true
      },
      {
        label: 'Enter the cuisine type',
        field: 'input',
        name: 'cuisine',
        required: true
      }
    ]
  },
  {
    name: 'Blog Title Generator',
    desc: 'Create compelling blog titles tailored to your niche and outline.',
    category: 'Blog',
    icon: '/blog.svg',
    aiPrompt: 'Generate 5 blog title ideas in bullet points based on the provided niche and outline.',
    slug: 'generate-blog-title',
    form: [
      {
        label: 'Enter your blog niche',
        field: 'input',
        name: 'niche',
        required: true
      },
      {
        label: 'Enter your blog outline',
        field: 'textarea',
        name: 'outline'
      }
    ]
  },
  {
    name: "Essay Writer",
    desc: "Generate high-quality essays based on provided topics and requirements",
    image:'https://img.freepik.com/free-photo/hardworking-focused-woman-trendy-glasses-concentrating-writing-essay-sitting-cozy-cafe-near-laptop-working-making-notes-carefully_197531-21320.jpg?t=st=1724881006~exp=1724884606~hmac=02ba25c5481bc624812decbfff50f40ca8ccc46767326d6939b2dbeecbeae8ba&w=900',
    category: "Content Creation",
    icon: "/essay.svg",
    aiPrompt: "write a detailed and coherent essay based on the provided topic, word count, and style preferences.",
    slug: "essay-writer",
    form: [
      {
        label: "Enter your essay topic",
        field: "input",
        name: "topic",
        required: true
      },
      {
        label: "Enter the desired word count",
        field: "input",
        name: "wordCount",
        type: "number",
        required: true
      },
      {
        label: "Additional notes or requirements",
        field: "textarea",
        name: "notes"
      }
    ]
  }
  
  ,{
    name: 'Icon Generator',
    desc: 'Create custom icons for your projects',
    pro:true,
    category: 'Design Tools',
    icon: '/icon-generator.svg',
    aiPrompt: 'write custom svg icons based on the provided style, shape, and color preferences.',
    slug: 'icon-generator',
    form: [
      {
        label: 'Enter your icon style',
        field: 'input',
        name: 'style',
        required: true
      },
      {
        label: 'Enter your icon shape',
        field: 'input',
        name: 'shape',
        required: true
      },
      {
        label: 'Enter your icon color',
        field: 'input',
        name: 'color'
      }
    ]
  },
  {
    name: 'Blog Topic Ideas',
    desc: 'Get creative with AI-generated blog post titles and ideas.',
    category: 'Blog',
    icon: '/blog.svg',
    aiPrompt: 'Provide 5 blog topic ideas in bullet points based on the given niche.',
    slug: 'generate-blog-idea',
    form: [
      {
        label: 'Enter your niche',
        field: 'input',
        name: 'niche',
        required: true
      }
    ]
  },
  {
    name: 'YouTube Video Description Generator',
    desc: 'Craft a professional YouTube video description with AI.',
    category: 'YouTube Tools',
    icon: '/youtube.svg',
    aiPrompt: 'Generate a YouTube video description based on the provided topic, title, and outline.',
    slug: 'youtube-video-description',
    form: [
      {
        label: 'Enter your video title',
        field: 'input',
        name: 'niche',
        required: true
      },
      {
        label: 'Enter your video outline',
        field: 'textarea',
        name: 'outline'
      }
    ]
  },
  {
    name: 'Job Proposal Letter Generator',
    desc: 'Draft a professional job proposal letter with AI assistance.',
    category: 'Others',
    image:'https://img.freepik.com/free-photo/business-situation-job-interview-concept-job-seeker-present-resume-managers_1421-78.jpg?t=st=1724881206~exp=1724884806~hmac=ec0e3798160c5e107233f345a84936bf778a1304601c004ee9f4b1ca0f15aa68&w=900',
    icon: '/job.svg',
    aiPrompt: 'Write a job proposal letter based on the provided job title and description.',
    slug: 'job-proposal-letter-generator',
    form: [
      {
        label: 'Enter the job description',
        field: 'input',
        name: 'niche',
        required: true
      },
      {
        label: 'Enter the job title',
        field: 'textarea',
        name: 'outline'
      }
    ]
  },
  {
    name: 'Code Generator',
    desc: 'Generate code snippets tailored to your requirements with AI.',
    category: 'Code',
    image:'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010129.jpg?t=st=1724880846~exp=1724884446~hmac=6a72398d9e439596855c1f43ad791e98e25cd6507d9c2e12594d4a4e605e4558&w=900',
    icon: '/code.svg',
    aiPrompt: 'Generate code based on the provided description.',
    slug: 'code-generator',
    form: [
      {
        label: 'Enter code description',
        field: 'input',
        name: 'niche',
        required: true
      }
    ]
  },
  {
    name: 'Book Idea Generator',
    desc: 'Get unique book ideas based on genre and themes.',
    category: 'Books',
    icon: '/book.svg',
    aiPrompt: 'Generate book ideas based on the provided genre and themes.',
    slug: 'book-idea-generator' ,
    form: [
      {
        label: 'Enter the genre',
        field: 'input',
        name: 'genre',
        required: true
      },
      {
        label: 'Enter themes or elements',
        field: 'textarea',
        name: 'themes'
      }
    ]
  },
  {
    name: 'Fantasy Story Generator',
    desc: 'Create fantasy stories based on characters and settings.',
    category: 'Stories',
    pro:true,
    image:"https://img.freepik.com/free-photo/majestic-mosque-islamic-new-year-celebration-with-fantasy-architecture_23-2151457495.jpg?t=st=1724881334~exp=1724884934~hmac=656145ffd3b9520ba3c95e87d6d94f140273f4de9e41bd0889efbf09eb1a4f92&w=900",
    icon: '/fantasy.svg',
    aiPrompt: 'Generate a fantasy story based on the given characters and settings.',
    slug: 'fantasy-generator',
    form: [
      {
        label: 'Enter characters',
        field: 'textarea',
        name: 'characters',
        required: true
      },
      {
        label: 'Enter settings',
        field: 'textarea',
        name: 'settings'
      }
    ]
  },
  {
    name: 'Poetry Generator',
    desc: 'Compose poems based on themes and styles.',
    category: 'Poetry',
    icon: '/poetry.svg',
    aiPrompt: 'Generate poetry based on provided themes and styles.',
    slug: 'poetry-generator',
    form: [
      {
        label: 'Enter themes',
        field: 'input',
        name: 'themes',
        required: true
      },
      {
        label: 'Enter style',
        field: 'input',
        name: 'style'
      }
    ]
  },
  {
    name: 'Social Media Caption Generator',
    desc: 'Generate engaging captions for social media posts.',
    category: 'Social Media',
    icon: '/social-media.svg',
    aiPrompt: 'Create captions for social media posts based on the provided topic and style.',
    slug: 'social-media-caption-generator',
    form: [
      {
        label: 'Enter the topic',
        field: 'input',
        name: 'topic',
        required: true
      },
      {
        label: 'Enter the style',
        field: 'input',
        name: 'style'
      }
    ]
  },
  {
    name: 'Email Subject Line Generator',
    desc: 'Craft compelling email subject lines for better open rates.',
    category: 'Email',
    icon: '/email.svg',
    aiPrompt: 'Generate effective email subject lines based on the provided content and purpose.',
    slug: 'email-subject-line-generator',
    form: [
      {
        label: 'Enter your email content',
        field: 'textarea',
        name: 'content',
        required: true
      }
    ]
  },
      {
        name: 'LinkedIn Profile Headline Generator',
        desc: 'Craft a professional and eye-catching LinkedIn headline.',
        category: 'Professional Tools',
        icon: '/linkedin.svg',
        aiPrompt: 'Generate a LinkedIn profile headline based on the provided job title and career goals.',
        slug: 'linkedin-headline-generator',
        form: [
          {
            label: 'Enter your job title',
            field: 'input',
            name: 'jobTitle',
            required: true
          },
          {
            label: 'Enter your career goals',
            field: 'textarea',
            name: 'careerGoals'
          }
        ]
      },
      {
        name: 'Twitter Bio Generator',
        desc: 'Create a concise and engaging Twitter bio.',
        category: 'Social Media',
        icon: '/twitter.svg',
        aiPrompt: 'Generate a Twitter bio based on the provided interests and personality traits.',
        slug: 'twitter-bio-generator',
        form: [
          {
            label: 'Enter your interests',
            field: 'input',
            name: 'interests',
            required: true
          },
          {
            label: 'Enter your personality traits',
            field: 'textarea',
            name: 'traits'
          }
        ]
      },
      {
        name: 'Resume Bullet Point Generator',
        desc: 'Create impactful resume to highlight your achievements.',
        category: 'Professional Tools',
        icon: '/resume.svg',
        aiPrompt: 'Generate 5 resume bullet points based on the provided job role and accomplishments.',
        slug: 'resume-bullet-point-generator',
        form: [
          {
            label: 'Enter your job role',
            field: 'input',
            name: 'role',
            required: true
          },
          {
            label: 'Enter your accomplishments',
            field: 'textarea',
            name: 'accomplishments'
          }
        ]
      },{
          name: 'SEO Meta Description Generator',
          desc: 'Create SEO-friendly meta descriptions for your web pages.',
          category: 'SEO Tools',
          icon: '/seo.svg',
          pro:true,
          aiPrompt: 'Generate SEO meta descriptions based on the provided page content and target keywords.',
          slug: 'seo-meta-description-generator',
          form: [
            {
              label: 'Enter your page content',
              field: 'textarea',
              name: 'content',
              required: true
            },
            {
              label: 'Enter your target keywords',
              field: 'input',
              name: 'keywords'
            }
          ]
        },
        {
          name: 'Event Name Generator',
          desc: 'Generate unique and catchy names for your events.',
          category: 'Events',
          icon: '/event.svg',
          aiPrompt: 'Generate event name ideas based on the provided theme and audience.',
          slug: 'event-name-generator',
          form: [
            {
              label: 'Enter your event theme',
              field: 'input',
              name: 'theme',
              required: true
            },
            {
              label: 'Enter your target audience',
              field: 'textarea',
              name: 'audience'
            }
          ]
        },
        {
          name: 'Tagline Generator',
          desc: 'Create memorable and impactful taglines for your brand.',
          category: 'Branding',
          icon: '/tagline.svg',
          aiPrompt: 'Generate 5 tagline ideas based on the provided brand name and mission.',
          slug: 'tagline-generator',
          form: [
            {
              label: 'Enter your brand name',
              field: 'input',
              name: 'brandName',
              required: true
            },
            {
              label: 'Enter your brand mission',
              field: 'textarea',
              name: 'mission'
            }
          ]
        },
        {
          name: 'Slogan Generator',
          image:"https://img.freepik.com/free-photo/startup-business-teamwork-meeting-concept_1421-194.jpg?t=st=1724881505~exp=1724885105~hmac=8f37c074e6fc60a0f9fb4d9c90ef064b081d9bdf1435ac13e701aee4d14979a2&w=900",
          desc: 'Generate catchy and memorable slogans for your business.',
          category: 'Marketing',
          icon: '/slogan.svg',
          aiPrompt: 'Generate 5 slogan ideas based on the provided product and target audience.',
          slug: 'slogan-generator',
          form: [
            {
              label: 'Enter your product or service',
              field: 'input',
              name: 'product',
              required: true
            },
            {
              label: 'Enter your target audience',
              field: 'textarea',
              name: 'audience'
            }
          ]
        },
        {
          name: 'Landing Page Copy Generator',
          desc: 'Craft compelling copy for your landing pages.',
          category: 'Marketing',
          icon: '/landing-page.svg',
          aiPrompt: 'Generate landing page copy based on the provided product and target audience.',
          slug: 'landing-page-copy-generator',
          form: [
            {
              label: 'Enter your product or service',
              field: 'input',
              name: 'product',
              required: true
            },
            {
              label: 'Enter your target audience',
              field: 'textarea',
              name: 'audience'
            }
          ]
        },
        {
          name: 'Press Release Generator',
          desc: 'Generate professional press releases for your announcements.',
          category: 'Public Relations',
          icon: '/press-release.svg',
          pro:true,
          aiPrompt: 'Write a press release based on the provided event or announcement details.',
          slug: 'press-release-generator',
          form: [
            {
              label: 'Enter the event or announcement details',
              field: 'textarea',
              name: 'details',
              required: true
            }
          ]
        },
        {
          name: 'FAQ Generator',
          desc: 'Create a list of frequently asked questions.',
          category: 'Support',
          icon: '/faq.svg',
          aiPrompt: 'Generate a list of FAQs based on the provided product or service details.',
          slug: 'faq-generator',
          form: [
            {
              label: 'Enter your product or service details',
              field: 'textarea',
              name: 'details',
              required: true
            }
          ]
        },
        {
          name: 'Product Description Generator',
          desc: 'Generate compelling product descriptions for your e-commerce site.',
          category: 'E-commerce',
          icon: '/product.svg',
          aiPrompt: 'Write a product description based on the provided features and target audience.',
          slug: 'product-description-generator',
          form: [
            {
              label: 'Enter product features',
              field: 'textarea',
              name: 'features',
              required: true
            },
            {
              label: 'Enter your target audience',
              field: 'input',
              name: 'audience'
            }
          ]
        },
        {
          name: 'Survey Question Generator',
          desc: 'Create engaging survey questions for your audience.',
          category: 'Research',
          icon: '/survey.svg',
          aiPrompt: 'Generate survey questions based on topic and audience demographics.',
          slug: 'survey-question-generator',
          form: [
            {
              label: 'Enter your survey topic',
              field: 'input',
              name: 'topic',
              required: true
            },
            {
              label: 'Enter your audience demographics',
              field: 'textarea',
              name: 'demographics'
            }
          ]
        },
        {
          name: 'Advertisement Copy Generator',
          desc: 'Craft engaging and effective ad copy for your campaigns.',
          category: 'Marketing',
          icon: '/advertisement.svg',
          pro:true,
          aiPrompt: 'Generate ad copy based on the provided product and target audience.',
          slug: 'advertisement-copy-generator',
          form: [
            {
              label: 'Enter your product or service',
              field: 'input',
              name: 'product',
              required: true
            },
            {
              label: 'Enter your target audience',
              field: 'textarea',
              name: 'audience'
            }
          ]
        },
        {
          name: 'Business Name Generator',
          desc: 'Generate unique and catchy names for your new business.',
          category: 'Branding',
          icon: '/business-name.svg',
          aiPrompt: 'Generate business name ideas based on the provided industry and target audience.',
          slug: 'business-name-generator',
          form: [
            {
              label: 'Enter your industry',
              field: 'input',
              name: 'industry',
              required: true
            },
            {
              label: 'Enter your target audience',
              field: 'textarea',
              name: 'audience'
            }
          ]
        },
        {
          name: 'Mission Statement Generator',
          desc: 'Craft a powerful mission statement for your brand.',
          category: 'Branding',
          icon: '/mission-statement.svg',
          aiPrompt: 'Write a mission statement based on the provided brand values and goals.',
          slug: 'mission-statement-generator',
          form: [
            {
              label: 'Enter your brand values',
              field: 'textarea',
              name: 'values',
              required: true
            },
            {
              label: 'Enter your brand goals',
              field: 'textarea',
              name: 'goals'
            }
          ]
        }
    
];