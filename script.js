(() => {
  "use strict";

  const CATEGORY_LABELS = {
            "wealth": "💰 Wealth",
            "developer": "💻 Developer",
            "ai-developer": "🤖 AI Developer",
            "ai-receptionist": "☎️ AI Receptionist",
            "founder": "💼 Founder",
            "sales": "🤝 Sales",
            "professional-growth": "📈 Professional Growth",
            "resilience": "🌱 Resilience",
            "future": "🌟 Future Self",
            "transformation": "🦋 Transformation",
            "self-love": "❤️ Self Love",
            "lovable": "💗 I Am Lovable",
            "forgiveness": "🕊️ Forgiveness",
            "healing": "🌿 Healing",
            "true-love": "💕 True Love",
            "boundaries": "🛡️ Boundaries",
            "peace": "🌸 Inner Peace",
            "confidence": "👑 Confidence",
            "new-beginnings": "🌅 New Beginnings",
            "whole-life": "💖 Whole Life"
};
  const BASE_AFFIRMATIONS = [
            {
                        "id": "base-1",
                        "text": "I am open to receiving abundance in all areas of my life.",
                        "category": "wealth"
            },
            {
                        "id": "base-2",
                        "text": "I attract wealth and prosperity effortlessly.",
                        "category": "wealth"
            },
            {
                        "id": "base-3",
                        "text": "My mindset is that of a millionaire, and my actions align with my financial goals.",
                        "category": "wealth"
            },
            {
                        "id": "base-4",
                        "text": "I am a magnet for financial opportunities, and I embrace them with confidence.",
                        "category": "wealth"
            },
            {
                        "id": "base-5",
                        "text": "Every day, I am moving closer to my goal of becoming a millionaire.",
                        "category": "wealth"
            },
            {
                        "id": "base-6",
                        "text": "I am worthy of financial success and all the benefits it brings.",
                        "category": "wealth"
            },
            {
                        "id": "base-7",
                        "text": "Money flows to me easily and abundantly.",
                        "category": "wealth"
            },
            {
                        "id": "base-8",
                        "text": "I am grateful for the abundance that is already present in my life.",
                        "category": "wealth"
            },
            {
                        "id": "base-9",
                        "text": "I am a master of creating wealth, and I use my skills to generate prosperity.",
                        "category": "wealth"
            },
            {
                        "id": "base-10",
                        "text": "My thoughts are aligned with the energy of abundance and wealth.",
                        "category": "wealth"
            },
            {
                        "id": "base-11",
                        "text": "I deserve financial freedom, and I allow it to unfold in my life.",
                        "category": "wealth"
            },
            {
                        "id": "base-12",
                        "text": "My wealth grows as I continue creating value for others.",
                        "category": "wealth"
            },
            {
                        "id": "base-13",
                        "text": "I attract lucrative opportunities that contribute to my financial goals.",
                        "category": "wealth"
            },
            {
                        "id": "base-14",
                        "text": "I am constantly learning and improving my financial intelligence.",
                        "category": "wealth"
            },
            {
                        "id": "base-15",
                        "text": "My actions are aligned with my financial goals.",
                        "category": "wealth"
            },
            {
                        "id": "base-16",
                        "text": "I release limiting beliefs about money and embrace my potential for wealth.",
                        "category": "wealth"
            },
            {
                        "id": "base-17",
                        "text": "I surround myself with influences that support my growth and success.",
                        "category": "wealth"
            },
            {
                        "id": "base-18",
                        "text": "I make wise financial decisions that strengthen my future.",
                        "category": "wealth"
            },
            {
                        "id": "base-19",
                        "text": "I am open to creating multiple streams of income.",
                        "category": "wealth"
            },
            {
                        "id": "base-20",
                        "text": "Each day, I become more skilled, confident, disciplined, and successful.",
                        "category": "wealth"
            },
            {
                        "id": "base-21",
                        "text": "I am a software developer.",
                        "category": "developer"
            },
            {
                        "id": "base-22",
                        "text": "I started with little knowledge, and I built my skills one project at a time.",
                        "category": "developer"
            },
            {
                        "id": "base-23",
                        "text": "I am proud of how far I have come.",
                        "category": "developer"
            },
            {
                        "id": "base-24",
                        "text": "Everything I know today was once something I did not know how to do.",
                        "category": "developer"
            },
            {
                        "id": "base-25",
                        "text": "I can learn difficult technical concepts.",
                        "category": "developer"
            },
            {
                        "id": "base-26",
                        "text": "I become a stronger developer every time I build something.",
                        "category": "developer"
            },
            {
                        "id": "base-27",
                        "text": "Every project I complete adds to my experience.",
                        "category": "developer"
            },
            {
                        "id": "base-28",
                        "text": "Every bug I solve makes me a better developer.",
                        "category": "developer"
            },
            {
                        "id": "base-29",
                        "text": "Errors are information, not evidence that I cannot code.",
                        "category": "developer"
            },
            {
                        "id": "base-30",
                        "text": "I do not need to know everything to be a successful software developer.",
                        "category": "developer"
            },
            {
                        "id": "base-31",
                        "text": "I know how to research what I do not know.",
                        "category": "developer"
            },
            {
                        "id": "base-32",
                        "text": "I know how to break complicated problems into manageable steps.",
                        "category": "developer"
            },
            {
                        "id": "base-33",
                        "text": "I trust myself to figure things out.",
                        "category": "developer"
            },
            {
                        "id": "base-34",
                        "text": "I am developing professional software engineering habits.",
                        "category": "developer"
            },
            {
                        "id": "base-35",
                        "text": "I understand that great software is built through planning, testing, iteration, and improvement.",
                        "category": "developer"
            },
            {
                        "id": "base-36",
                        "text": "I am becoming stronger in frontend development, backend development, databases, APIs, testing, deployment, and maintenance.",
                        "category": "developer"
            },
            {
                        "id": "base-37",
                        "text": "My portfolio is evidence of my growth.",
                        "category": "developer"
            },
            {
                        "id": "base-38",
                        "text": "I turn ideas into working software.",
                        "category": "developer"
            },
            {
                        "id": "base-39",
                        "text": "I am capable of building software people will pay to use.",
                        "category": "developer"
            },
            {
                        "id": "base-40",
                        "text": "I am building skills that can support me for the rest of my career.",
                        "category": "developer"
            },
            {
                        "id": "base-41",
                        "text": "I am a software developer, and I build things that matter.",
                        "category": "developer"
            },
            {
                        "id": "base-42",
                        "text": "I started from nothing, and I built everything I have with my own hands and mind.",
                        "category": "developer"
            },
            {
                        "id": "base-43",
                        "text": "I am a self-taught developer, and my journey proves that anything is possible.",
                        "category": "developer"
            },
            {
                        "id": "base-44",
                        "text": "I think like an engineer: I break down problems and solve them one step at a time.",
                        "category": "developer"
            },
            {
                        "id": "base-45",
                        "text": "I am capable of learning any technology, language, or framework I set my mind to.",
                        "category": "developer"
            },
            {
                        "id": "base-46",
                        "text": "Every line of code I write makes me a stronger developer.",
                        "category": "developer"
            },
            {
                        "id": "base-47",
                        "text": "I belong in the tech industry, and I bring unique value that no one else can.",
                        "category": "developer"
            },
            {
                        "id": "base-48",
                        "text": "I am proud of how far I've come, and excited for how far I'll go.",
                        "category": "developer"
            },
            {
                        "id": "base-49",
                        "text": "Challenges in code are opportunities for me to grow and level up.",
                        "category": "developer"
            },
            {
                        "id": "base-50",
                        "text": "I am disciplined, focused, and committed to mastering my craft.",
                        "category": "developer"
            },
            {
                        "id": "base-51",
                        "text": "I debug problems with patience and confidence, knowing every issue has a solution.",
                        "category": "developer"
            },
            {
                        "id": "base-52",
                        "text": "I build software that solves real problems for real people.",
                        "category": "developer"
            },
            {
                        "id": "base-53",
                        "text": "I am constantly improving my skills, one project at a time.",
                        "category": "developer"
            },
            {
                        "id": "base-54",
                        "text": "I turn ideas into working software — that is my superpower.",
                        "category": "developer"
            },
            {
                        "id": "base-55",
                        "text": "I am the developer I once dreamed of becoming.",
                        "category": "developer"
            },
            {
                        "id": "base-56",
                        "text": "I am building my career at the intersection of software development and artificial intelligence.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-57",
                        "text": "I know how to turn AI technology into useful business solutions.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-58",
                        "text": "I create AI-powered software that solves real problems.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-59",
                        "text": "I understand how AI can automate repetitive business processes.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-60",
                        "text": "I build intelligent systems that help businesses operate more efficiently.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-61",
                        "text": "I continue learning new AI technologies and applying them to practical products.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-62",
                        "text": "I am not just consuming AI technology; I am building with it.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-63",
                        "text": "AI expands what I am capable of creating.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-64",
                        "text": "My technical skills and creativity give me an advantage.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-65",
                        "text": "I am becoming an expert in building practical AI-powered business software.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-66",
                        "text": "I am the founder and creator of custom AI receptionist software that transforms businesses.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-67",
                        "text": "I sell AI solutions that save people time, money, and stress — and I am paid well for it.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-68",
                        "text": "Business owners trust me with their technology, and I deliver excellence.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-69",
                        "text": "I create AI software that helps individuals and businesses thrive.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-70",
                        "text": "Every client I serve is a testament to my skill, vision, and hard work.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-71",
                        "text": "I am a builder of intelligent systems and a creator of real-world impact.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-72",
                        "text": "I attract ideal clients who value my AI receptionist software and pay me what I'm worth.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-73",
                        "text": "My AI software runs reliably, scales effortlessly, and serves clients around the clock.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-74",
                        "text": "I am a tech entrepreneur — I create value, solve problems, and generate income.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-75",
                        "text": "I confidently sell my software because I know it works and it helps people.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-76",
                        "text": "I am pioneering AI solutions that make businesses more efficient and profitable.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-77",
                        "text": "My customers win because I win — and we grow together.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-78",
                        "text": "I am building a legacy as a developer, founder, and creator of intelligent software.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-79",
                        "text": "I turn my technical skills into products that generate recurring revenue.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-80",
                        "text": "I am not just writing code — I am building a future of freedom and wealth.",
                        "category": "ai-developer"
            },
            {
                        "id": "base-81",
                        "text": "I build and sell custom AI receptionist software.",
                        "category": "ai-receptionist"
            },
            {
                        "id": "base-82",
                        "text": "My AI receptionists help businesses answer customers, capture leads, schedule appointments, and automate communication.",
                        "category": "ai-receptionist"
            },
            {
                        "id": "base-83",
                        "text": "My software solves real business problems.",
                        "category": "ai-receptionist"
            },
            {
                        "id": "base-84",
                        "text": "Businesses are willing to pay for software that saves them time and helps them make money.",
                        "category": "ai-receptionist"
            },
            {
                        "id": "base-85",
                        "text": "I confidently explain the value of my AI receptionist solutions.",
                        "category": "ai-receptionist"
            },
            {
                        "id": "base-86",
                        "text": "I customize my software around the needs of each client.",
                        "category": "ai-receptionist"
            },
            {
                        "id": "base-87",
                        "text": "Every client teaches me how to make my products better.",
                        "category": "ai-receptionist"
            },
            {
                        "id": "base-88",
                        "text": "I am building repeatable systems for selling and deploying AI receptionist software.",
                        "category": "ai-receptionist"
            },
            {
                        "id": "base-89",
                        "text": "My AI receptionist business creates recurring revenue opportunities.",
                        "category": "ai-receptionist"
            },
            {
                        "id": "base-90",
                        "text": "I turn client problems into profitable software solutions.",
                        "category": "ai-receptionist"
            },
            {
                        "id": "base-91",
                        "text": "I create software that works for businesses even when they are closed.",
                        "category": "ai-receptionist"
            },
            {
                        "id": "base-92",
                        "text": "My products create value around the clock.",
                        "category": "ai-receptionist"
            },
            {
                        "id": "base-93",
                        "text": "I am building technology that businesses can depend on.",
                        "category": "ai-receptionist"
            },
            {
                        "id": "base-94",
                        "text": "I am not only a developer; I am a technology entrepreneur.",
                        "category": "founder"
            },
            {
                        "id": "base-95",
                        "text": "I know how to transform an idea into a product.",
                        "category": "founder"
            },
            {
                        "id": "base-96",
                        "text": "I know how to transform a product into an offer.",
                        "category": "founder"
            },
            {
                        "id": "base-97",
                        "text": "I know how to transform an offer into a business.",
                        "category": "founder"
            },
            {
                        "id": "base-98",
                        "text": "I create solutions instead of waiting for opportunities.",
                        "category": "founder"
            },
            {
                        "id": "base-99",
                        "text": "I am building intellectual property that I own.",
                        "category": "founder"
            },
            {
                        "id": "base-100",
                        "text": "My code, systems, templates, components, and processes become reusable business assets.",
                        "category": "founder"
            },
            {
                        "id": "base-101",
                        "text": "Every project makes my business stronger.",
                        "category": "founder"
            },
            {
                        "id": "base-102",
                        "text": "I am creating systems that allow me to serve more clients without starting over each time.",
                        "category": "founder"
            },
            {
                        "id": "base-103",
                        "text": "I price my work according to the value I create.",
                        "category": "founder"
            },
            {
                        "id": "base-104",
                        "text": "I do not have to compete by being the cheapest developer.",
                        "category": "founder"
            },
            {
                        "id": "base-105",
                        "text": "The right customers value my expertise.",
                        "category": "founder"
            },
            {
                        "id": "base-106",
                        "text": "I confidently communicate what my services are worth.",
                        "category": "founder"
            },
            {
                        "id": "base-107",
                        "text": "I am learning how to sell technology as well as build it.",
                        "category": "founder"
            },
            {
                        "id": "base-108",
                        "text": "I attract clients who need the solutions I know how to create.",
                        "category": "founder"
            },
            {
                        "id": "base-109",
                        "text": "My business becomes more professional with every project.",
                        "category": "founder"
            },
            {
                        "id": "base-110",
                        "text": "I am building a real software company, one system at a time.",
                        "category": "founder"
            },
            {
                        "id": "base-111",
                        "text": "There are businesses right now that need solutions I can build.",
                        "category": "sales"
            },
            {
                        "id": "base-112",
                        "text": "I confidently introduce my services to potential customers.",
                        "category": "sales"
            },
            {
                        "id": "base-113",
                        "text": "I am comfortable talking about my software and its value.",
                        "category": "sales"
            },
            {
                        "id": "base-114",
                        "text": "Selling is simply helping the right customer understand how my solution can help them.",
                        "category": "sales"
            },
            {
                        "id": "base-115",
                        "text": "Rejection does not determine my value or my ability.",
                        "category": "sales"
            },
            {
                        "id": "base-116",
                        "text": "Every conversation improves my sales skills.",
                        "category": "sales"
            },
            {
                        "id": "base-117",
                        "text": "I consistently create opportunities instead of waiting for customers to find me.",
                        "category": "sales"
            },
            {
                        "id": "base-118",
                        "text": "My work speaks for itself, and I learn to communicate its value clearly.",
                        "category": "sales"
            },
            {
                        "id": "base-119",
                        "text": "I build relationships with customers based on trust, professionalism, and results.",
                        "category": "sales"
            },
            {
                        "id": "base-120",
                        "text": "Satisfied clients create referrals, testimonials, and future opportunities.",
                        "category": "sales"
            },
            {
                        "id": "base-121",
                        "text": "I am building a reputation for solving problems with technology.",
                        "category": "sales"
            },
            {
                        "id": "base-122",
                        "text": "I approach my projects like a professional software engineer.",
                        "category": "professional-growth"
            },
            {
                        "id": "base-123",
                        "text": "I plan before I build.",
                        "category": "professional-growth"
            },
            {
                        "id": "base-124",
                        "text": "I document my requirements.",
                        "category": "professional-growth"
            },
            {
                        "id": "base-125",
                        "text": "I use version control.",
                        "category": "professional-growth"
            },
            {
                        "id": "base-126",
                        "text": "I test my software.",
                        "category": "professional-growth"
            },
            {
                        "id": "base-127",
                        "text": "I fix defects instead of ignoring them.",
                        "category": "professional-growth"
            },
            {
                        "id": "base-128",
                        "text": "I protect customer information and take security seriously.",
                        "category": "professional-growth"
            },
            {
                        "id": "base-129",
                        "text": "I document my systems so they can be maintained and improved.",
                        "category": "professional-growth"
            },
            {
                        "id": "base-130",
                        "text": "I continuously improve my development process.",
                        "category": "professional-growth"
            },
            {
                        "id": "base-131",
                        "text": "I finish projects instead of endlessly chasing new ideas.",
                        "category": "professional-growth"
            },
            {
                        "id": "base-132",
                        "text": "I deploy what I build.",
                        "category": "professional-growth"
            },
            {
                        "id": "base-133",
                        "text": "I learn from real users.",
                        "category": "professional-growth"
            },
            {
                        "id": "base-134",
                        "text": "I improve my software based on evidence and feedback.",
                        "category": "professional-growth"
            },
            {
                        "id": "base-135",
                        "text": "My discipline is becoming as powerful as my creativity.",
                        "category": "professional-growth"
            },
            {
                        "id": "base-136",
                        "text": "I started from nothing, but I did not stay there.",
                        "category": "resilience"
            },
            {
                        "id": "base-137",
                        "text": "I built knowledge where there was once uncertainty.",
                        "category": "resilience"
            },
            {
                        "id": "base-138",
                        "text": "I built skills where there was once inexperience.",
                        "category": "resilience"
            },
            {
                        "id": "base-139",
                        "text": "I built projects where there were once only ideas.",
                        "category": "resilience"
            },
            {
                        "id": "base-140",
                        "text": "I can look at my progress as proof that I am capable of changing my life.",
                        "category": "resilience"
            },
            {
                        "id": "base-141",
                        "text": "I have already learned things that once seemed impossible.",
                        "category": "resilience"
            },
            {
                        "id": "base-142",
                        "text": "When I do not know something, I learn it.",
                        "category": "resilience"
            },
            {
                        "id": "base-143",
                        "text": "When something breaks, I investigate it.",
                        "category": "resilience"
            },
            {
                        "id": "base-144",
                        "text": "When something fails, I improve it.",
                        "category": "resilience"
            },
            {
                        "id": "base-145",
                        "text": "When I make a mistake, I use it as data.",
                        "category": "resilience"
            },
            {
                        "id": "base-146",
                        "text": "I do not need perfect circumstances to continue progressing.",
                        "category": "resilience"
            },
            {
                        "id": "base-147",
                        "text": "Consistency compounds.",
                        "category": "resilience"
            },
            {
                        "id": "base-148",
                        "text": "Small improvements made every day create extraordinary results.",
                        "category": "resilience"
            },
            {
                        "id": "base-149",
                        "text": "My past does not determine the limits of my future.",
                        "category": "resilience"
            },
            {
                        "id": "base-150",
                        "text": "I am building the life I once imagined.",
                        "category": "resilience"
            },
            {
                        "id": "base-151",
                        "text": "I wake up knowing that I have valuable skills.",
                        "category": "future"
            },
            {
                        "id": "base-152",
                        "text": "I earn money using my knowledge, creativity, and technology.",
                        "category": "future"
            },
            {
                        "id": "base-153",
                        "text": "I build software from anywhere.",
                        "category": "future"
            },
            {
                        "id": "base-154",
                        "text": "I have customers who trust me to solve their technology problems.",
                        "category": "future"
            },
            {
                        "id": "base-155",
                        "text": "My software generates income.",
                        "category": "future"
            },
            {
                        "id": "base-156",
                        "text": "My business generates recurring revenue.",
                        "category": "future"
            },
            {
                        "id": "base-157",
                        "text": "My skills create opportunities wherever I go.",
                        "category": "future"
            },
            {
                        "id": "base-158",
                        "text": "I have multiple ways to generate income with technology.",
                        "category": "future"
            },
            {
                        "id": "base-159",
                        "text": "I own valuable software products and digital assets.",
                        "category": "future"
            },
            {
                        "id": "base-160",
                        "text": "I am financially independent because I learned how to create value.",
                        "category": "future"
            },
            {
                        "id": "base-161",
                        "text": "I am building something bigger than a job.",
                        "category": "future"
            },
            {
                        "id": "base-162",
                        "text": "I am creating a career, a company, and a body of work that belongs to me.",
                        "category": "future"
            },
            {
                        "id": "base-163",
                        "text": "I remember when I was trying to figure out where to begin.",
                        "category": "transformation"
            },
            {
                        "id": "base-164",
                        "text": "Now I know how to design, build, test, document, and improve software.",
                        "category": "transformation"
            },
            {
                        "id": "base-165",
                        "text": "I remember when these technologies were unfamiliar to me.",
                        "category": "transformation"
            },
            {
                        "id": "base-166",
                        "text": "Now I use them to turn ideas into real applications.",
                        "category": "transformation"
            },
            {
                        "id": "base-167",
                        "text": "I started as a beginner.",
                        "category": "transformation"
            },
            {
                        "id": "base-168",
                        "text": "I became a builder.",
                        "category": "transformation"
            },
            {
                        "id": "base-169",
                        "text": "I became a software developer.",
                        "category": "transformation"
            },
            {
                        "id": "base-170",
                        "text": "I became a business owner.",
                        "category": "transformation"
            },
            {
                        "id": "base-171",
                        "text": "I became someone who creates solutions.",
                        "category": "transformation"
            },
            {
                        "id": "base-172",
                        "text": "I started from nothing, and I built something real.",
                        "category": "transformation"
            },
            {
                        "id": "base-173",
                        "text": "I started from nothing, and now I have skills nobody can take away from me.",
                        "category": "transformation"
            },
            {
                        "id": "base-174",
                        "text": "I started from nothing, and now I have products I can sell.",
                        "category": "transformation"
            },
            {
                        "id": "base-175",
                        "text": "I started from nothing, and now I have a business I can grow.",
                        "category": "transformation"
            },
            {
                        "id": "base-176",
                        "text": "I started from nothing, and now I know how to create my own opportunities.",
                        "category": "transformation"
            },
            {
                        "id": "base-177",
                        "text": "I am living proof that consistent learning can completely change a person's direction.",
                        "category": "transformation"
            },
            {
                        "id": "base-178",
                        "text": "And I am still getting started.",
                        "category": "transformation"
            },
            {
                        "id": "base-179",
                        "text": "I love and accept myself as I am today.",
                        "category": "self-love"
            },
            {
                        "id": "base-180",
                        "text": "I am worthy of my own love, patience, and compassion.",
                        "category": "self-love"
            },
            {
                        "id": "base-181",
                        "text": "I am enough without proving myself to anyone.",
                        "category": "self-love"
            },
            {
                        "id": "base-182",
                        "text": "I speak to myself with kindness.",
                        "category": "self-love"
            },
            {
                        "id": "base-183",
                        "text": "I deserve the same love that I so freely give to others.",
                        "category": "self-love"
            },
            {
                        "id": "base-184",
                        "text": "I choose myself without guilt.",
                        "category": "self-love"
            },
            {
                        "id": "base-185",
                        "text": "I am learning to become my own safe place.",
                        "category": "self-love"
            },
            {
                        "id": "base-186",
                        "text": "I enjoy becoming the woman I am meant to be.",
                        "category": "self-love"
            },
            {
                        "id": "base-187",
                        "text": "I honor my needs, feelings, dreams, and boundaries.",
                        "category": "self-love"
            },
            {
                        "id": "base-188",
                        "text": "I treat myself with dignity and respect.",
                        "category": "self-love"
            },
            {
                        "id": "base-189",
                        "text": "I am proud of myself for continuing to grow.",
                        "category": "self-love"
            },
            {
                        "id": "base-190",
                        "text": "I do not have to be perfect to love myself.",
                        "category": "self-love"
            },
            {
                        "id": "base-191",
                        "text": "My value does not decrease because someone fails to recognize it.",
                        "category": "self-love"
            },
            {
                        "id": "base-192",
                        "text": "I am worthy simply because I exist.",
                        "category": "self-love"
            },
            {
                        "id": "base-193",
                        "text": "I am becoming more comfortable being completely myself.",
                        "category": "self-love"
            },
            {
                        "id": "base-194",
                        "text": "I deserve a life that feels peaceful, meaningful, and fulfilling.",
                        "category": "self-love"
            },
            {
                        "id": "base-195",
                        "text": "I am building a loving relationship with myself.",
                        "category": "self-love"
            },
            {
                        "id": "base-196",
                        "text": "I trust myself more every day.",
                        "category": "self-love"
            },
            {
                        "id": "base-197",
                        "text": "I am worthy of happiness.",
                        "category": "self-love"
            },
            {
                        "id": "base-198",
                        "text": "I am worthy of peace.",
                        "category": "self-love"
            },
            {
                        "id": "base-199",
                        "text": "I am worthy of being treated well.",
                        "category": "self-love"
            },
            {
                        "id": "base-200",
                        "text": "I choose to be on my own side.",
                        "category": "self-love"
            },
            {
                        "id": "base-201",
                        "text": "I am lovable exactly as I am.",
                        "category": "lovable"
            },
            {
                        "id": "base-202",
                        "text": "I do not have to earn love by abandoning myself.",
                        "category": "lovable"
            },
            {
                        "id": "base-203",
                        "text": "I deserve love that feels safe, honest, consistent, and mutual.",
                        "category": "lovable"
            },
            {
                        "id": "base-204",
                        "text": "I am worthy of being chosen and appreciated.",
                        "category": "lovable"
            },
            {
                        "id": "base-205",
                        "text": "I deserve affection that does not come with fear or confusion.",
                        "category": "lovable"
            },
            {
                        "id": "base-206",
                        "text": "I deserve someone who is happy to love me.",
                        "category": "lovable"
            },
            {
                        "id": "base-207",
                        "text": "I am worthy of tenderness.",
                        "category": "lovable"
            },
            {
                        "id": "base-208",
                        "text": "I am worthy of emotional safety.",
                        "category": "lovable"
            },
            {
                        "id": "base-209",
                        "text": "I deserve to be listened to and understood.",
                        "category": "lovable"
            },
            {
                        "id": "base-210",
                        "text": "I deserve a relationship where my feelings matter.",
                        "category": "lovable"
            },
            {
                        "id": "base-211",
                        "text": "I am worthy of loyalty and honesty.",
                        "category": "lovable"
            },
            {
                        "id": "base-212",
                        "text": "I deserve love that adds peace to my life.",
                        "category": "lovable"
            },
            {
                        "id": "base-213",
                        "text": "I am worthy of a partner who respects my boundaries.",
                        "category": "lovable"
            },
            {
                        "id": "base-214",
                        "text": "I do not have to shrink myself to be loved.",
                        "category": "lovable"
            },
            {
                        "id": "base-215",
                        "text": "I do not have to chase love.",
                        "category": "lovable"
            },
            {
                        "id": "base-216",
                        "text": "I do not have to convince someone of my worth.",
                        "category": "lovable"
            },
            {
                        "id": "base-217",
                        "text": "The right love will not require me to betray myself.",
                        "category": "lovable"
            },
            {
                        "id": "base-218",
                        "text": "I can be deeply loved while remaining completely myself.",
                        "category": "lovable"
            },
            {
                        "id": "base-219",
                        "text": "I forgive myself for the choices I made when I knew less than I know today.",
                        "category": "forgiveness"
            },
            {
                        "id": "base-220",
                        "text": "I forgive myself for staying in situations longer than I wish I had.",
                        "category": "forgiveness"
            },
            {
                        "id": "base-221",
                        "text": "I forgive myself for ignoring my own needs.",
                        "category": "forgiveness"
            },
            {
                        "id": "base-222",
                        "text": "I forgive myself for every time I doubted my worth.",
                        "category": "forgiveness"
            },
            {
                        "id": "base-223",
                        "text": "I forgive myself for mistakes I made while trying to survive.",
                        "category": "forgiveness"
            },
            {
                        "id": "base-224",
                        "text": "I release the need to punish myself for my past.",
                        "category": "forgiveness"
            },
            {
                        "id": "base-225",
                        "text": "I cannot change yesterday, but I can choose differently today.",
                        "category": "forgiveness"
            },
            {
                        "id": "base-226",
                        "text": "My mistakes are lessons, not my identity.",
                        "category": "forgiveness"
            },
            {
                        "id": "base-227",
                        "text": "I give myself permission to move forward.",
                        "category": "forgiveness"
            },
            {
                        "id": "base-228",
                        "text": "I release shame that no longer belongs in my future.",
                        "category": "forgiveness"
            },
            {
                        "id": "base-229",
                        "text": "I choose understanding over self-criticism.",
                        "category": "forgiveness"
            },
            {
                        "id": "base-230",
                        "text": "I am allowed to outgrow old versions of myself.",
                        "category": "forgiveness"
            },
            {
                        "id": "base-231",
                        "text": "I honor the person I was while becoming the person I choose to be.",
                        "category": "forgiveness"
            },
            {
                        "id": "base-232",
                        "text": "I am learning from my past without living inside it.",
                        "category": "forgiveness"
            },
            {
                        "id": "base-233",
                        "text": "I forgive myself for not knowing then what I know now.",
                        "category": "forgiveness"
            },
            {
                        "id": "base-234",
                        "text": "I release guilt and make room for growth.",
                        "category": "forgiveness"
            },
            {
                        "id": "base-235",
                        "text": "I deserve another chapter.",
                        "category": "forgiveness"
            },
            {
                        "id": "base-236",
                        "text": "I give myself permission to begin again.",
                        "category": "forgiveness"
            },
            {
                        "id": "base-237",
                        "text": "I release what I cannot change.",
                        "category": "healing"
            },
            {
                        "id": "base-238",
                        "text": "I release relationships that require me to lose myself.",
                        "category": "healing"
            },
            {
                        "id": "base-239",
                        "text": "I let go of the need for closure from people who cannot give it to me.",
                        "category": "healing"
            },
            {
                        "id": "base-240",
                        "text": "I do not need another person's apology in order to move forward.",
                        "category": "healing"
            },
            {
                        "id": "base-241",
                        "text": "I release the need to replay old conversations.",
                        "category": "healing"
            },
            {
                        "id": "base-242",
                        "text": "I release the need to understand every hurtful action.",
                        "category": "healing"
            },
            {
                        "id": "base-243",
                        "text": "I choose my future over repeatedly reliving my past.",
                        "category": "healing"
            },
            {
                        "id": "base-244",
                        "text": "I am allowed to miss someone and still choose not to return.",
                        "category": "healing"
            },
            {
                        "id": "base-245",
                        "text": "I can love someone and still recognize that they are not right for my life.",
                        "category": "healing"
            },
            {
                        "id": "base-246",
                        "text": "I release emotional attachments that disturb my peace.",
                        "category": "healing"
            },
            {
                        "id": "base-247",
                        "text": "I am making room for healthier experiences.",
                        "category": "healing"
            },
            {
                        "id": "base-248",
                        "text": "I am becoming emotionally free.",
                        "category": "healing"
            },
            {
                        "id": "base-249",
                        "text": "My healing does not require anyone else's participation.",
                        "category": "healing"
            },
            {
                        "id": "base-250",
                        "text": "I give myself permission to stop carrying what has already happened.",
                        "category": "healing"
            },
            {
                        "id": "base-251",
                        "text": "I am creating new memories that belong to the life I am building.",
                        "category": "healing"
            },
            {
                        "id": "base-252",
                        "text": "I choose peace over emotional chaos.",
                        "category": "healing"
            },
            {
                        "id": "base-253",
                        "text": "I am moving forward one day at a time.",
                        "category": "healing"
            },
            {
                        "id": "base-254",
                        "text": "My life is bigger than what I have been through.",
                        "category": "healing"
            },
            {
                        "id": "base-255",
                        "text": "I believe healthy love exists.",
                        "category": "true-love"
            },
            {
                        "id": "base-256",
                        "text": "I am open to receiving genuine love.",
                        "category": "true-love"
            },
            {
                        "id": "base-257",
                        "text": "I am attracting a relationship built on honesty, respect, friendship, and trust.",
                        "category": "true-love"
            },
            {
                        "id": "base-258",
                        "text": "I deserve love that feels peaceful instead of confusing.",
                        "category": "true-love"
            },
            {
                        "id": "base-259",
                        "text": "I welcome a partner who communicates openly and respectfully.",
                        "category": "true-love"
            },
            {
                        "id": "base-260",
                        "text": "I am available for emotionally mature love.",
                        "category": "true-love"
            },
            {
                        "id": "base-261",
                        "text": "I deserve someone who can disagree with me without disrespecting me.",
                        "category": "true-love"
            },
            {
                        "id": "base-262",
                        "text": "I welcome a relationship where both people take accountability.",
                        "category": "true-love"
            },
            {
                        "id": "base-263",
                        "text": "I am worthy of consistency.",
                        "category": "true-love"
            },
            {
                        "id": "base-264",
                        "text": "I am worthy of commitment.",
                        "category": "true-love"
            },
            {
                        "id": "base-265",
                        "text": "I am worthy of reciprocal love.",
                        "category": "true-love"
            },
            {
                        "id": "base-266",
                        "text": "I welcome someone who appreciates both my strength and my softness.",
                        "category": "true-love"
            },
            {
                        "id": "base-267",
                        "text": "I am attracting someone who celebrates my success instead of competing with it.",
                        "category": "true-love"
            },
            {
                        "id": "base-268",
                        "text": "I deserve someone who supports my dreams.",
                        "category": "true-love"
            },
            {
                        "id": "base-269",
                        "text": "I welcome a partner who brings stability, affection, laughter, and companionship into my life.",
                        "category": "true-love"
            },
            {
                        "id": "base-270",
                        "text": "I am becoming the kind of partner I would also want to receive.",
                        "category": "true-love"
            },
            {
                        "id": "base-271",
                        "text": "I trust myself to recognize healthy love.",
                        "category": "true-love"
            },
            {
                        "id": "base-272",
                        "text": "I will not mistake intensity for intimacy.",
                        "category": "true-love"
            },
            {
                        "id": "base-273",
                        "text": "I will not mistake attention for commitment.",
                        "category": "true-love"
            },
            {
                        "id": "base-274",
                        "text": "I will not mistake jealousy for love.",
                        "category": "true-love"
            },
            {
                        "id": "base-275",
                        "text": "I will not mistake control for protection.",
                        "category": "true-love"
            },
            {
                        "id": "base-276",
                        "text": "I choose relationships where love and respect exist together.",
                        "category": "true-love"
            },
            {
                        "id": "base-277",
                        "text": "I am open to a love greater and healthier than anything I have experienced before.",
                        "category": "true-love"
            },
            {
                        "id": "base-278",
                        "text": "My boundaries protect the life I am building.",
                        "category": "boundaries"
            },
            {
                        "id": "base-279",
                        "text": "Saying no does not make me unkind.",
                        "category": "boundaries"
            },
            {
                        "id": "base-280",
                        "text": "I do not owe everyone access to me.",
                        "category": "boundaries"
            },
            {
                        "id": "base-281",
                        "text": "I decide who receives my time, attention, and energy.",
                        "category": "boundaries"
            },
            {
                        "id": "base-282",
                        "text": "I can love people without allowing them to mistreat me.",
                        "category": "boundaries"
            },
            {
                        "id": "base-283",
                        "text": "I do not negotiate my basic dignity.",
                        "category": "boundaries"
            },
            {
                        "id": "base-284",
                        "text": "I listen when someone's behavior shows me who they are.",
                        "category": "boundaries"
            },
            {
                        "id": "base-285",
                        "text": "I trust patterns more than promises.",
                        "category": "boundaries"
            },
            {
                        "id": "base-286",
                        "text": "I am allowed to leave situations that repeatedly hurt me.",
                        "category": "boundaries"
            },
            {
                        "id": "base-287",
                        "text": "I do not need permission to protect my peace.",
                        "category": "boundaries"
            },
            {
                        "id": "base-288",
                        "text": "I refuse to abandon myself to keep someone else comfortable.",
                        "category": "boundaries"
            },
            {
                        "id": "base-289",
                        "text": "I choose relationships where respect goes both ways.",
                        "category": "boundaries"
            },
            {
                        "id": "base-290",
                        "text": "I am not responsible for fixing everyone.",
                        "category": "boundaries"
            },
            {
                        "id": "base-291",
                        "text": "I protect my emotional energy.",
                        "category": "boundaries"
            },
            {
                        "id": "base-292",
                        "text": "My peace is valuable.",
                        "category": "boundaries"
            },
            {
                        "id": "base-293",
                        "text": "I can walk away without hatred.",
                        "category": "boundaries"
            },
            {
                        "id": "base-294",
                        "text": "I can forgive someone without giving them access to me again.",
                        "category": "boundaries"
            },
            {
                        "id": "base-295",
                        "text": "I choose peace today.",
                        "category": "peace"
            },
            {
                        "id": "base-296",
                        "text": "I breathe deeply and return to the present moment.",
                        "category": "peace"
            },
            {
                        "id": "base-297",
                        "text": "I am safe inside my own company.",
                        "category": "peace"
            },
            {
                        "id": "base-298",
                        "text": "I do not have to solve my entire life today.",
                        "category": "peace"
            },
            {
                        "id": "base-299",
                        "text": "I give myself permission to rest.",
                        "category": "peace"
            },
            {
                        "id": "base-300",
                        "text": "I release thoughts that do not deserve my energy.",
                        "category": "peace"
            },
            {
                        "id": "base-301",
                        "text": "I allow silence to be peaceful.",
                        "category": "peace"
            },
            {
                        "id": "base-302",
                        "text": "I enjoy spending time with myself.",
                        "category": "peace"
            },
            {
                        "id": "base-303",
                        "text": "My home, mind, and life are becoming more peaceful.",
                        "category": "peace"
            },
            {
                        "id": "base-304",
                        "text": "I am learning how good calm can feel.",
                        "category": "peace"
            },
            {
                        "id": "base-305",
                        "text": "I do not need chaos to feel alive.",
                        "category": "peace"
            },
            {
                        "id": "base-306",
                        "text": "I protect the peace I worked hard to create.",
                        "category": "peace"
            },
            {
                        "id": "base-307",
                        "text": "I allow today to be a new day.",
                        "category": "peace"
            },
            {
                        "id": "base-308",
                        "text": "I am present for the life happening in front of me.",
                        "category": "peace"
            },
            {
                        "id": "base-309",
                        "text": "I choose what deserves my attention.",
                        "category": "peace"
            },
            {
                        "id": "base-310",
                        "text": "I know who I am.",
                        "category": "confidence"
            },
            {
                        "id": "base-311",
                        "text": "I know what I bring to the table.",
                        "category": "confidence"
            },
            {
                        "id": "base-312",
                        "text": "I do not measure my worth by another person's opinion.",
                        "category": "confidence"
            },
            {
                        "id": "base-313",
                        "text": "I trust my judgment.",
                        "category": "confidence"
            },
            {
                        "id": "base-314",
                        "text": "I trust myself to make good decisions.",
                        "category": "confidence"
            },
            {
                        "id": "base-315",
                        "text": "I can handle difficult situations.",
                        "category": "confidence"
            },
            {
                        "id": "base-316",
                        "text": "I am intelligent, capable, creative, and resourceful.",
                        "category": "confidence"
            },
            {
                        "id": "base-317",
                        "text": "I carry myself with confidence.",
                        "category": "confidence"
            },
            {
                        "id": "base-318",
                        "text": "I do not need external validation to know my value.",
                        "category": "confidence"
            },
            {
                        "id": "base-319",
                        "text": "I am becoming increasingly confident in my voice.",
                        "category": "confidence"
            },
            {
                        "id": "base-320",
                        "text": "I deserve to take up space.",
                        "category": "confidence"
            },
            {
                        "id": "base-321",
                        "text": "I deserve to be heard.",
                        "category": "confidence"
            },
            {
                        "id": "base-322",
                        "text": "I am allowed to have standards.",
                        "category": "confidence"
            },
            {
                        "id": "base-323",
                        "text": "I am allowed to change my mind.",
                        "category": "confidence"
            },
            {
                        "id": "base-324",
                        "text": "I am allowed to want more for my life.",
                        "category": "confidence"
            },
            {
                        "id": "base-325",
                        "text": "I refuse to make myself smaller to make others comfortable.",
                        "category": "confidence"
            },
            {
                        "id": "base-326",
                        "text": "I am becoming more secure in who I am.",
                        "category": "confidence"
            },
            {
                        "id": "base-327",
                        "text": "I respect the woman I see in the mirror.",
                        "category": "confidence"
            },
            {
                        "id": "base-328",
                        "text": "My life is not over; another chapter is beginning.",
                        "category": "new-beginnings"
            },
            {
                        "id": "base-329",
                        "text": "I am allowed to reinvent myself.",
                        "category": "new-beginnings"
            },
            {
                        "id": "base-330",
                        "text": "I can build a completely different life from the one I had before.",
                        "category": "new-beginnings"
            },
            {
                        "id": "base-331",
                        "text": "My best experiences do not have to be behind me.",
                        "category": "new-beginnings"
            },
            {
                        "id": "base-332",
                        "text": "There are people I have not met yet who will become important parts of my life.",
                        "category": "new-beginnings"
            },
            {
                        "id": "base-333",
                        "text": "There are opportunities I cannot see yet that are already possible.",
                        "category": "new-beginnings"
            },
            {
                        "id": "base-334",
                        "text": "There are places I have not visited, accomplishments I have not achieved, and memories I have not created yet.",
                        "category": "new-beginnings"
            },
            {
                        "id": "base-335",
                        "text": "I am excited to discover who I become next.",
                        "category": "new-beginnings"
            },
            {
                        "id": "base-336",
                        "text": "I am creating a future that feels like mine.",
                        "category": "new-beginnings"
            },
            {
                        "id": "base-337",
                        "text": "I welcome new friendships, opportunities, experiences, and love.",
                        "category": "new-beginnings"
            },
            {
                        "id": "base-338",
                        "text": "I am no longer waiting for my life to begin.",
                        "category": "new-beginnings"
            },
            {
                        "id": "base-339",
                        "text": "My life is happening now.",
                        "category": "new-beginnings"
            },
            {
                        "id": "base-340",
                        "text": "I give myself permission to enjoy it.",
                        "category": "new-beginnings"
            },
            {
                        "id": "base-341",
                        "text": "I can be successful and soft.",
                        "category": "whole-life"
            },
            {
                        "id": "base-342",
                        "text": "I can be ambitious and peaceful.",
                        "category": "whole-life"
            },
            {
                        "id": "base-343",
                        "text": "I can build wealth without sacrificing my wellbeing.",
                        "category": "whole-life"
            },
            {
                        "id": "base-344",
                        "text": "I can love someone without losing myself.",
                        "category": "whole-life"
            },
            {
                        "id": "base-345",
                        "text": "I can build a business and still make time for my life.",
                        "category": "whole-life"
            },
            {
                        "id": "base-346",
                        "text": "I can become financially successful while remaining true to myself.",
                        "category": "whole-life"
            },
            {
                        "id": "base-347",
                        "text": "I am creating success in my career, finances, relationships, health, and personal life.",
                        "category": "whole-life"
            },
            {
                        "id": "base-348",
                        "text": "I am building a life I do not need to escape from.",
                        "category": "whole-life"
            },
            {
                        "id": "base-349",
                        "text": "I want more than money; I want freedom, peace, love, purpose, health, and joy.",
                        "category": "whole-life"
            },
            {
                        "id": "base-350",
                        "text": "I deserve to experience success in every area of my life.",
                        "category": "whole-life"
            },
            {
                        "id": "base-351",
                        "text": "I am becoming financially stronger and emotionally healthier.",
                        "category": "whole-life"
            },
            {
                        "id": "base-352",
                        "text": "I am becoming professionally successful and personally fulfilled.",
                        "category": "whole-life"
            },
            {
                        "id": "base-353",
                        "text": "I am creating a beautiful life one decision at a time.",
                        "category": "whole-life"
            },
            {
                        "id": "base-354",
                        "text": "I am proud of the life I am building.",
                        "category": "whole-life"
            },
            {
                        "id": "base-355",
                        "text": "I started from nothing, and I am creating something extraordinary.",
                        "category": "whole-life"
            }
];

  const KEYS = {
    favorites: "affirmBecomeFavorites",
    custom: "affirmBecomeCustom",
    journal: "affirmBecomeJournal",
    streak: "affirmBecomeStreak"
  };

  const prompts = [
    "What do I appreciate about myself today?",
    "What am I ready to forgive myself for?",
    "What does loving myself look like in action today?",
    "What kind of love do I want to welcome into my life?",
    "What boundary would protect my peace?",
    "What am I proud of myself for surviving, learning, or building?",
    "What old belief about myself am I ready to replace?",
    "What would I say to myself if I spoke like someone who deeply loved me?",
    "What part of my future am I excited to become?",
    "What proof do I already have that I can create a better life?"
  ];

  let customAffirmations = load(KEYS.custom, []);
  let favorites = new Set(load(KEYS.favorites, []));
  let selectedCategory = "all";
  let view = [];
  let currentIndex = 0;
  let sessionItems = null;
  let isAutoPlaying = false;
  let repeatMode = false;
  let autoTimer = null;
  let countdownTimer = null;
  let speechToken = 0;
  let editingCustomId = null;

  const SPEECH_RATE = 0.76;
  const PAUSE_BETWEEN = 1800;
  const REPEAT_SECONDS = 5;

  const $ = id => document.getElementById(id);
  const splash = $("splash"), card = $("affirmationCard"), cardText = $("cardText"),
        cardNumber = $("cardNumber"), cardCategory = $("cardCategory"), favoriteBtn = $("favoriteBtn"),
        progressBar = $("progressBar"), progressLabel = $("progressLabel"), categoryStrip = $("categoryStrip"),
        autoBtn = $("autoBtn"), readBtn = $("readBtn"), repeatBtn = $("repeatBtn"), autoStatus = $("autoStatus"),
        repeatBanner = $("repeatBanner"), repeatCountdown = $("repeatCountdown"), favCount = $("favCount"),
        favoritesSection = $("favoritesSection"), favoritesList = $("favoritesList"), customList = $("customList"),
        customText = $("customText"), customCategory = $("customCategory"), sessionCategory = $("sessionCategory"),
        sessionLength = $("sessionLength"), startSessionBtn = $("startSessionBtn"), endSessionBtn = $("endSessionBtn"),
        streakCount = $("streakCount"), favoriteStat = $("favoriteStat"), customStat = $("customStat"),
        journalPrompt = $("journalPrompt"), journalText = $("journalText"), journalList = $("journalList"),
        toast = $("toast");

  function load(key, fallback) {
    try { const v = JSON.parse(localStorage.getItem(key)); return v ?? fallback; } catch { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  }
  function allAffirmations() { return [...BASE_AFFIRMATIONS, ...customAffirmations]; }
  function labelFor(cat) { return CATEGORY_LABELS[cat] || "✍️ My Affirmation"; }
  function showToast(msg) {
    toast.textContent = msg; toast.classList.add("show");
    clearTimeout(showToast.t); showToast.t = setTimeout(() => toast.classList.remove("show"), 2100);
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  function hideSplash() { splash.classList.add("hide"); setTimeout(() => splash.remove(), 850); }
  splash.addEventListener("click", hideSplash);
  setTimeout(() => { if (document.body.contains(splash)) hideSplash(); }, 6000);

  function buildCategoryUI() {
    categoryStrip.innerHTML = "";
    const allChip = document.createElement("button");
    allChip.className = "chip active"; allChip.dataset.category = "all"; allChip.textContent = "✨ All";
    categoryStrip.appendChild(allChip);

    Object.entries(CATEGORY_LABELS).forEach(([key, label]) => {
      const b = document.createElement("button");
      b.className = "chip"; b.dataset.category = key; b.textContent = label;
      categoryStrip.appendChild(b);
    });
    categoryStrip.addEventListener("click", e => {
      const b = e.target.closest(".chip"); if (!b) return;
      endSession(false); stopAutoPlay(false);
      selectedCategory = b.dataset.category;
      categoryStrip.querySelectorAll(".chip").forEach(x => x.classList.toggle("active", x === b));
      rebuildView(); currentIndex = 0; renderCard(false);
    });

    const options = Object.entries(CATEGORY_LABELS).map(([k,v]) => `<option value="${k}">${v}</option>`).join("");
    sessionCategory.innerHTML = options;
    customCategory.innerHTML = options;
  }

  function rebuildView() {
    const all = allAffirmations();
    if (sessionItems) view = sessionItems;
    else if (selectedCategory === "all") view = all;
    else view = all.filter(a => a.category === selectedCategory);
    if (currentIndex >= view.length) currentIndex = Math.max(0, view.length - 1);
  }

  function current() { return view[currentIndex]; }

  function renderCard(animate = true) {
    rebuildView();
    if (!view.length) {
      cardText.textContent = "No affirmations in this category yet.";
      cardCategory.textContent = ""; cardNumber.textContent = ""; progressLabel.textContent = "0 / 0";
      progressBar.style.width = "0%"; favoriteBtn.textContent = "♡"; return;
    }
    const item = current();
    if (animate) { cardText.style.opacity = "0"; setTimeout(() => { cardText.textContent = item.text; cardText.style.opacity = "1"; }, 150); }
    else cardText.textContent = item.text;
    cardCategory.textContent = labelFor(item.category);
    cardNumber.textContent = sessionItems ? `SESSION ${currentIndex+1} OF ${view.length}` : `AFFIRMATION ${currentIndex+1} OF ${view.length}`;
    progressLabel.textContent = `${currentIndex+1} / ${view.length}`;
    progressBar.style.width = `${((currentIndex+1)/view.length)*100}%`;
    const on = favorites.has(item.id);
    favoriteBtn.textContent = on ? "♥" : "♡"; favoriteBtn.classList.toggle("on", on);
    if (animate) spawnHearts(5);
    updateStats();
  }

  function spawnHearts(count=5) {
    const chars = ["❤️","💗","💕","💖","✨"];
    for (let i=0;i<count;i++) {
      const s=document.createElement("span"); s.className="sparkle"; s.textContent=chars[Math.floor(Math.random()*chars.length)];
      s.style.left=(15+Math.random()*70)+"%"; s.style.top=(48+Math.random()*34)+"%";
      s.style.fontSize=(13+Math.random()*17)+"px"; s.style.animationDelay=(Math.random()*.25)+"s";
      card.appendChild(s); s.addEventListener("animationend",()=>s.remove());
    }
  }

  function go(index) {
    if (!view.length) return;
    currentIndex=(index+view.length)%view.length; renderCard(true);
    if (!isAutoPlaying) window.speechSynthesis?.cancel();
  }
  function next() { go(currentIndex+1); }
  function prev() { go(currentIndex-1); }
  function shuffle() {
    if (view.length < 2) return;
    let n; do { n=Math.floor(Math.random()*view.length); } while(n===currentIndex);
    go(n); showToast("💕 New affirmation");
  }

  function toggleFavorite() {
    const item=current(); if (!item) return;
    if (favorites.has(item.id)) { favorites.delete(item.id); showToast("Removed from favorites"); }
    else { favorites.add(item.id); spawnHearts(8); showToast("❤️ Added to favorites"); }
    save(KEYS.favorites,[...favorites]); renderCard(false); renderFavorites(); updateStats();
  }

  function renderFavorites() {
    const items=allAffirmations().filter(a=>favorites.has(a.id));
    favoritesSection.style.display = items.length ? "block" : "none";
    if (!items.length) { favoritesList.innerHTML='<div class="empty">No favorites yet.</div>'; return; }
    favoritesList.innerHTML=items.map(a=>`<div class="list-item">
      <div class="grow"><small>${escapeHtml(labelFor(a.category))}</small><p>${escapeHtml(a.text)}</p></div>
      <button class="mini" data-fav="${a.id}">Open</button></div>`).join("");
    favoritesList.querySelectorAll("[data-fav]").forEach(b=>b.onclick=()=>openById(b.dataset.fav));
  }
  function openById(id) {
    endSession(false); selectedCategory="all";
    categoryStrip.querySelectorAll(".chip").forEach(x=>x.classList.toggle("active",x.dataset.category==="all"));
    rebuildView(); const idx=view.findIndex(a=>a.id===id); if(idx>=0){currentIndex=idx;renderCard(true);}
  }

  function speak(text, onEnd) {
    if (!("speechSynthesis" in window)) { showToast("Speech is not supported in this browser"); return; }
    const token=++speechToken; window.speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text); u.lang="en-US"; u.rate=SPEECH_RATE; u.pitch=1; u.volume=1;
    u.onend=()=>{if(token===speechToken&&onEnd)onEnd();};
    u.onerror=e=>{if(!["canceled","interrupted"].includes(e.error))showToast("Speech could not be played");};
    window.speechSynthesis.speak(u);
  }
  function readCurrent() {
    const item=current();
    if(!item) return;
    if(isAutoPlaying) stopAutoPlay(false);
    speak(item.text);
  }

  function startAutoPlay() {
    if(isAutoPlaying||!current()) return;
    if(!("speechSynthesis" in window)) { showToast("Speech is not supported in this browser"); return; }
    isAutoPlaying=true; autoBtn.textContent="⏸ Stop Auto"; autoBtn.classList.add("active"); autoStatus.classList.add("show");
    showToast("▶ Auto-play started"); playCurrent();
  }
  function stopAutoPlay(show=true) {
    isAutoPlaying=false; ++speechToken; clearTimeout(autoTimer); clearInterval(countdownTimer);
    window.speechSynthesis?.cancel(); repeatBanner.classList.remove("show");
    autoBtn.textContent="▶ Auto-Play"; autoBtn.classList.remove("active"); autoStatus.classList.remove("show");
    if(show) showToast("⏸ Auto-play stopped");
  }
  function playCurrent() {
    if(!isAutoPlaying||!current())return;
    speak(current().text,()=>{
      if(!isAutoPlaying)return;
      if(repeatMode) startRepeatPause();
      else autoTimer=setTimeout(advanceAuto,PAUSE_BETWEEN);
    });
  }
  function startRepeatPause() {
    let remaining=REPEAT_SECONDS; repeatCountdown.textContent=remaining; repeatBanner.classList.add("show");
    clearInterval(countdownTimer);
    countdownTimer=setInterval(()=>{
      remaining--; repeatCountdown.textContent=Math.max(remaining,0);
      if(remaining<=0){clearInterval(countdownTimer);repeatBanner.classList.remove("show");advanceAuto();}
    },1000);
  }
  function advanceAuto() {
    if(!isAutoPlaying)return;
    if(sessionItems && currentIndex===view.length-1) {
      stopAutoPlay(false); showToast("❤️ Session complete — well done"); endSession(false); return;
    }
    currentIndex=(currentIndex+1)%view.length; renderCard(true); setTimeout(playCurrent,180);
  }
  function toggleRepeat() {
    repeatMode=!repeatMode; repeatBtn.classList.toggle("active",repeatMode);
    repeatBtn.textContent=repeatMode?"🎤 Repeat Mode On":"🎤 Repeat After Me";
    showToast(repeatMode?"🎤 Repeat After Me is on":"Repeat After Me is off");
  }

  function startSession() {
    stopAutoPlay(false);
    const cat=sessionCategory.value, amount=Number(sessionLength.value);
    const pool=allAffirmations().filter(a=>a.category===cat);
    sessionItems=[...pool].sort(()=>Math.random()-.5).slice(0,Math.min(amount,pool.length));
    currentIndex=0; endSessionBtn.style.display="inline-block"; renderCard(false); showToast("❤️ Daily session ready"); startAutoPlay();
  }
  function endSession(show=true) {
    sessionItems=null; endSessionBtn.style.display="none"; rebuildView(); currentIndex=0; renderCard(false);
    if(show) showToast("Session ended");
  }

  function addOrUpdateCustom() {
    const text=customText.value.trim(); if(!text){showToast("Write an affirmation first");return;}
    if(editingCustomId) {
      const item=customAffirmations.find(a=>a.id===editingCustomId);
      if(item){item.text=text;item.category=customCategory.value;}
      editingCustomId=null; $("saveCustomBtn").textContent="+ Add"; showToast("Affirmation updated");
    } else {
      customAffirmations.push({id:"custom-"+Date.now()+"-"+Math.random().toString(36).slice(2,7),text,category:customCategory.value});
      showToast("❤️ Your affirmation was added");
    }
    customText.value=""; save(KEYS.custom,customAffirmations); rebuildView(); renderCustom(); renderCard(false); updateStats();
  }
  function renderCustom() {
    if(!customAffirmations.length){customList.innerHTML='<div class="empty">Create your own affirmations here.</div>';return;}
    customList.innerHTML=customAffirmations.map(a=>`<div class="list-item">
      <div class="grow"><small>${escapeHtml(labelFor(a.category))}</small><p>${escapeHtml(a.text)}</p></div>
      <div class="mini-actions"><button class="mini" data-edit="${a.id}">Edit</button><button class="mini" data-del="${a.id}">Delete</button></div>
    </div>`).join("");
    customList.querySelectorAll("[data-edit]").forEach(b=>b.onclick=()=>{
      const a=customAffirmations.find(x=>x.id===b.dataset.edit); if(!a)return;
      editingCustomId=a.id; customText.value=a.text; customCategory.value=a.category; $("saveCustomBtn").textContent="Save";
      customText.focus();
    });
    customList.querySelectorAll("[data-del]").forEach(b=>b.onclick=()=>{
      const id=b.dataset.del;
      customAffirmations=customAffirmations.filter(a=>a.id!==id);
      favorites.delete(id);
      if(sessionItems) {
        sessionItems=sessionItems.filter(a=>a.id!==id);
        if(!sessionItems.length) { stopAutoPlay(false); endSession(false); }
      }
      if(editingCustomId===id) {
        editingCustomId=null; customText.value=""; $("saveCustomBtn").textContent="+ Add";
      }
      save(KEYS.custom,customAffirmations);save(KEYS.favorites,[...favorites]);rebuildView();renderCustom();renderFavorites();renderCard(false);updateStats();showToast("Affirmation deleted");
    });
  }

  function renderPrompt() { journalPrompt.textContent=prompts[Math.floor(Math.random()*prompts.length)]; }
  function saveJournal() {
    const text=journalText.value.trim(); if(!text){showToast("Write a reflection first");return;}
    const entries=load(KEYS.journal,[]); entries.unshift({id:Date.now(),date:new Date().toISOString(),prompt:journalPrompt.textContent,text});
    save(KEYS.journal,entries.slice(0,50)); journalText.value=""; renderJournal(); showToast("📓 Reflection saved");
  }
  function renderJournal() {
    const entries=load(KEYS.journal,[]);
    journalList.innerHTML=entries.length?entries.slice(0,8).map(e=>`<div class="list-item"><div class="grow">
      <small>${new Date(e.date).toLocaleDateString()}</small><p>${escapeHtml(e.text)}</p></div>
      <button class="mini" data-jdel="${e.id}">Delete</button></div>`).join(""):'<div class="empty">No saved reflections yet.</div>';
    journalList.querySelectorAll("[data-jdel]").forEach(b=>b.onclick=()=>{
      save(KEYS.journal,entries.filter(e=>String(e.id)!==b.dataset.jdel));renderJournal();
    });
  }

  function updateStreak() {
    const dateKey=date=>`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
    const today=new Date(); const key=dateKey(today);
    const data=load(KEYS.streak,{last:null,count:0});
    if(data.last!==key) {
      const yesterday=new Date(today); yesterday.setDate(today.getDate()-1);
      const ykey=dateKey(yesterday);
      data.count=data.last===ykey?data.count+1:1; data.last=key; save(KEYS.streak,data);
    }
    streakCount.textContent=data.count||1;
  }
  function updateStats() {
    favCount.textContent=favorites.size; favoriteStat.textContent=favorites.size; customStat.textContent=customAffirmations.length;
  }

  document.querySelectorAll(".panel-toggle[data-panel]").forEach(b=>b.onclick=()=>$(b.dataset.panel).classList.toggle("open"));
  $("favoritesToggle").onclick=()=>$("favoritesBody").classList.toggle("open");
  $("prevBtn").onclick=prev; $("nextBtn").onclick=next; $("shuffleBtn").onclick=shuffle;
  favoriteBtn.onclick=toggleFavorite; autoBtn.onclick=()=>isAutoPlaying?stopAutoPlay():startAutoPlay();
  readBtn.onclick=readCurrent; repeatBtn.onclick=toggleRepeat; $("favoritesBtn").onclick=()=>{
    renderFavorites(); favoritesSection.style.display=favorites.size?"block":"none";
    favoritesSection.scrollIntoView({behavior:"smooth",block:"center"});
  };
  startSessionBtn.onclick=startSession; endSessionBtn.onclick=()=>{stopAutoPlay(false);endSession();};
  $("saveCustomBtn").onclick=addOrUpdateCustom;
  customText.addEventListener("keydown",e=>{if(e.key==="Enter")addOrUpdateCustom();});
  $("saveJournalBtn").onclick=saveJournal; $("newPromptBtn").onclick=renderPrompt;

  window.addEventListener("keydown",e=>{
    if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName))return;
    if(e.key==="ArrowRight")next(); if(e.key==="ArrowLeft")prev(); if(e.key===" "){e.preventDefault();shuffle();}
  });

  let touchX=0;
  card.addEventListener("touchstart",e=>touchX=e.changedTouches[0].clientX,{passive:true});
  card.addEventListener("touchend",e=>{const dx=e.changedTouches[0].clientX-touchX;if(Math.abs(dx)>55)dx<0?next():prev();},{passive:true});

  function init() {
    buildCategoryUI(); rebuildView(); renderCard(false); renderFavorites(); renderCustom(); renderPrompt(); renderJournal(); updateStreak(); updateStats();
  }
  init();
})();
