import {
    BrainCircuit,
    Boxes,
    MoveUpRight,
    Cloudy,
    Globe,
    Smartphone,
    ShoppingCart,
    Database,
    Cpu,
    Trello,
    Blocks,
    Cloud,
    Code,
    Server,
    LineChart,
    Rocket,
    ShoppingBag,
    Clock,
    Joystick,
    Monitor,
    PenTool,
    Glasses,
    UserCheck,
    Signature,
    Currency,
    Wallet,
    MessageSquareLock,
    ServerIcon,
    Code2Icon,
    CodeSquareIcon,
    Shield,
    Palette,
    CreditCard,
    Layers,
    ChartBar,
} from "lucide-react";

import { FaAngular, FaBootstrap, FaReact, FaVuejs } from "react-icons/fa";

export const mainNavItems = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Services",
        href: "#",
        hasDropdown: true,
        dropdownType: "services",
    },
    {
        label: "Technology",
        href: "#",
        hasDropdown: true,
        dropdownType: "technology",
    },
    {
        label: "Products",
        href: "#",
        hasDropdown: true,
        dropdownType: "products",
    },
      
{
        label: "Industry",
        href: "#",
        hasDropdown: false,
        dropdownType: "industries",
    },
    {
        label: "Marketing",
        href: "/marketing"
    },
    {
        label: "Portfolio",
        href: "/portfolio",
    },
    // {
    //     label: "Blog",
    //     href: "/blog"
    // },
    {
        label: "About us",
        href: "/about-us"
    },
];

export const serviceCategories = [
    {
        id: "consulting",
        icon: Globe,
        title: "Consulting",
        color: "text-pink-500",
        description: "Modern web applications built with React, Next.js, and other cutting-edge technologies.",
        features: [
            {
                icon: Code,
                title: "Mobile & Web App Consulting",
                path: "/mobile-web-app-consulting-services"
            },
            {
                icon: Server,
                title: "Website Consulting",
                path: "/website-consulting-solutions"
            },
            {
                icon: Globe,
                title: "Salesforce Consulting",
                path: "/salesforce-consulting-company"
            },
            {
                icon: ShoppingBag,
                title: "DevOps Consulting",
                path: "/devops-consulting-services"
            },
            {
                icon: LineChart,
                title: "Testing Consulting",
                path: "/software-testing-consulting"
            },
            {
                icon: Clock,
                title: "AI Consulting",
                path: "/ai-consulting-experts"
            },
        ],
        image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "uiux",
        icon: Smartphone,
        title: "UI/UX",
        color: "text-blue-500",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        features: [
            {
                icon: Trello,
                title: "Brand Strategy",
                path: "/brand-strategy-consulting"
            },
            {
                icon: Smartphone,
                title: "Design Consulting",
                path: "/design-consulting-services"
            },
            {
                icon: Blocks,
                title: "Product Design",
                path: "/product-design-consulting"
            },
            {
                icon: Rocket,
                title: "UX Research",
                path: "/ux-research-services"
            },
            {
                icon: Code,
                title: "UI & Animation",
                path: "/ui-design-and-animation-services"
            },
            {
                icon: Cloud,
                title: "Design Testing",
                path: "/design-testing-services"
            },
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "custom-apps",
        icon: ShoppingCart,
        title: "Custom Apps",
        color: "text-green-500",
        description: "Full-featured e-commerce solutions with secure payment processing.",
        features: [
            {
                icon: ShoppingCart,
                title: "Mobile App Development",
                path: "/mobile-app-development"
            },
            {
                icon: Database,
                title: "Web Application Development",
                path: "/web-application-development"
            },
            {
                icon: ShoppingBag,
                title: "Website Development",
                path: "/website-development-services"
            },
            {
                icon: LineChart,
                title: "SaaS Development",
                path: "/saas-software-development"
            },
            {
                icon: Globe,
                title: "Blockchain Development",
                path: "/blockchain-development-services"
            },
            {
                icon: Server,
                title: "Integration and Migration",
                path: "/integration-and-migration-services"
            },
            {
                icon: Server,
                title: "CEM Development",
                path: "/customer-experience-management-development"
            },
        ],
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "testing",
        icon: Cpu,
        title: "Testing & QA",
        color: "text-yellow-500",
        description: "Cutting-edge solutions using AI, ML, and blockchain technologies.",
        features: [
            {
                icon: Cpu,
                title: "Software Test Management",
                path: "/software-test-management-services"
            },
            {
                icon: Database,
                title: "Test Automation",
                path: "/test-automation-services"
            },
            {
                icon: Code,
                title: "Performance Testing",
                path: "/performance-testing-services"
            },
            {
                icon: Server,
                title: "Security Testing Services",
                path: "/security-testing-services"
            },
            {
                icon: Globe,
                title: "Selenium Automation Testing",
                path: "/selenium-automation-testing-services"
            },
        ],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "cloud",
        icon: Cloudy,
        title: "Cloud",
        color: "text-[#00C8D5]",
        description: "Cloud services offer online computing resources like storage, servers, and software, enabling scalability and cost-efficiency.",
        features: [
            {
                icon: Cloud,
                title: "Google Cloud",
                path: "/google-cloud-platform-services"
            },
            {
                icon: Cloud,
                title: "Azure Cloud",
                path: "/microsoft-azure-cloud-services"
            },
            {
                icon: Server,
                title: "AWS",
                path: "/aws-cloud-services"
            },
            {
                icon: MoveUpRight,
                title: "Cloud Migration",
                path: "/legacy-to-cloud-migration-services"
            },
            {
                icon: MoveUpRight,
                title: "Intercloud Migration",
                path: "/intercloud-migration-solutions"
            },
            {
                icon: Boxes,
                title: "Cloud Native",
                path: "/cloud-native-development-services"
            },
            {
                icon: Database,
                title: "Cloud Optimization",
                path: "/cloud-optimization-services"
            },
        ],
        image: "https://img.freepik.com/premium-vector/cloud-computing-technology-with-circuit-cloud-white-background-vector-illustration_493806-13570.jpg",
    },
    {
        id: "ai",
        icon: BrainCircuit,
        title: "AI",
        color: "text-[#00C8D5]",
        description: "AI development involves machine learning, deep learning, NLP, and computer vision.",
        features: [
            {
                icon: Cloud,
                title: "AI App Development",
                path: "/ai-app-development"
            },
            {
                icon: Cloud,
                title: "AI Software Development",
                path: "/ai-software-development"
            },
            {
                icon: Cloud,
                title: "LLM Development",
                path: "/large-language-model-development"
            },
            {
                icon: Cloud,
                title: "AI Chatbot",
                path: "/enterprise-ai-chatbot-development"
            },
        ],
        image: "https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=",
    },
    {
        id: "blockchain",
        icon: Cpu,
        title: "Blockchain",
        color: "text-yellow-500",
        description: "Cutting-edge solutions using blockchain technologies.",
        features: [
            {
                icon: Cpu,
                title: "Exchange Software",
                path: "/crypto-exchange-software-development"
            },
            {
                icon: Database,
                title: "Initial Coin Offering",
                path: "/initial-coin-offering-ico-development"
            },
            {
                icon: Currency,
                title: "Cryptocurrency App",
                path: "/cryptocurrency-app-development"
            },
            {
                icon: Wallet,
                title: "Cryptocurrency Wallet",
                path: "/cryptocurrency-wallet-development"
            },
            {
                icon: Signature,
                title: "Smart Contract",
                path: "/smart-contract-development-services"
            },
            {
                icon: MessageSquareLock,
                title: "NFT Marketplace",
                path: "/nftmarketplacedevelopment"
            },
            {
                icon: ServerIcon,
                title: "DeFi Development Services",
                path: "/defidevelopmentservices"
            },
            {
                icon: ServerIcon,
                title: "Web3 Development",
                path: "/web3-development-services"
            },
        ],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "GameDev",
        icon: Joystick,
        title: "Game Development",
        color: "text-purple-500",
        description: "Immersive game development services for mobile, PC, and VR/AR experiences.",
        features: [
            {
                title: "Mobile Game Development",
                icon: Smartphone,
                path: "/mobile-game-development",
            },
            {
                title: "Unity3D Game Development",
                icon: Joystick,
                path: "/unity3d-game-development",
            },
            {
                title: "Unreal Game Development",
                icon: Joystick,
                path: "/unreal-game-development",
            },
            {
                title: "PC Game Development",
                icon: Monitor,
                path: "/pc-game-development-services",
            },
            {
                title: "Game Art Services",
                icon: PenTool,
                path: "/game-art-design-services",
            },
            {
                title: "VR/XR Simulation",
                icon: Glasses,
                path: "/vr-xr-simulation-development",
            },
            {
                title: "Resource Augmentation",
                icon: UserCheck,
                path: "/game-development-resource-augmentation",
            },
        ],
        image:
            "https://images.unsplash.com/photo-1556438064-2d7646166914?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "E-Commerce",
        title: "E-Commerce Development",
        icon: ShoppingCart, // Added missing icon
        color: "text-blue-600",
        description: "Cutting-edge solutions using blockchain technologies.",
        features: [
            {
                title: "Shopify Development",
                icon: ShoppingCart, // Added missing icon
                path: "/shopify-development-services",
            },
            {
                title: "WooCommerce Development",
                icon: ShoppingCart, // Added missing icon
                path: "/woocommerce-development-services",
            },
            {
                title: "OpenCart Development",
                icon: ShoppingCart, // Added missing icon
                path: "/opencart-development-services",
            },
            {
                title: "Magento Development",
                icon: ShoppingCart, // Added missing icon
                path: "/magento-development-services",
            },
            {
                title: "PrestaShop Development",
                icon: ShoppingCart, // Added missing icon
                path: "/prestashop-development-services",
            },
            {
                title: "Odoo Development",
                icon: ShoppingCart, // Added missing icon
                path: "/odoo-development-services",
            },

        ],
        image: 'https://i.pinimg.com/736x/81/12/a7/8112a764174b72479ac2afdd0a9fb458.jpg'
    },
    {
        id: "E-Commerce3",
        title: "E-Commerce Development3",
        icon: ShoppingCart, // Added missing icon
        color: "text-blue-600",
        description: "Cutting-edge solutions using blockchain technologies.",
        features: [
            {
                title: "Shopify Development",
                icon: ShoppingCart, // Added missing icon
                path: "/shopify-development-services",
            },
            {
                title: "WooCommerce Development",
                icon: ShoppingCart, // Added missing icon
                path: "/woocommerce-development-services",
            },
            {
                title: "OpenCart Development",
                icon: ShoppingCart, // Added missing icon
                path: "/opencart-development-services",
            },
            {
                title: "Magento Development",
                icon: ShoppingCart, // Added missing icon
                path: "/magento-development-services",
            },
            {
                title: "PrestaShop Development",
                icon: ShoppingCart, // Added missing icon
                path: "/prestashop-development-services",
            },
            {
                title: "Odoo Development",
                icon: ShoppingCart, // Added missing icon
                path: "/odoo-development-services",
            },

        ],
        image: 'https://i.pinimg.com/736x/81/12/a7/8112a764174b72479ac2afdd0a9fb458.jpg'
    },
    {
        id: "salesforce",
        icon: Database,
        title: "Salesforce",
        color: "text-indigo-500",
        description: "End-to-end Salesforce implementation and customization services.",
        features: [
            {
                icon: Database,
                title: "Application Architecture Design",
                path: "/application-architecture-design"
            },
            {
                icon: Database,
                title: "Consulting Assessment",
                path: "/salesforce-consulting-assessment"
            },
            {
                icon: Database,
                title: "DEVOPS & TEST AUTOMATION",
                path: "/devops-test-automation-services"
             },
            {
                icon: Server,
                title: "SALESFORCE DIGITAL 360",
                path: "/salesforce-digital-360-solutions"
            },
            {
                icon: Cloud,
                title: "NEW CLOUD ROLL OUT STRATEGY",
                path: "/new-cloud-rollout-strategy"
            },
            {
                icon: Cloud,
                title: "MAINTENANCE & SUPPORT",
                path: "/salesforce-maintenance-support-services"
            }
        ],
        image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=600&q=80",
    },


];

export const technologyCategories = [
    {
        id: "mobile-app",
        icon: Smartphone,
        title: "Mobile App",
        color: "text-indigo-500",
        description: "Building high-performance mobile applications for iOS and Android using the latest technologies.",
        features: [
            {
                icon: Smartphone,
                title: "iOS App Development",
                path: "/ios-app-development-services"
            },
            {
                icon: Smartphone,
                title: "Android App Development",
                path: "/android-app-development-services"
            },
            {
                icon: Layers,
                title: "React Native Development",
                path: "/react-native-app-development-services"
            },
            {
                icon: Layers,
                title: "Flutter Development",
                path: "/flutter-app-development-services"
            },
            {
                icon: Layers,
                title: "NativeScript Development",
                path: "/nativescript-app-development-services"
            },
            {
                icon: Layers,
                title: "Xamarin Development",
                path: "/xamarin-app-development-services"
            },
            {
                icon: Layers,
                title: "HTML5 Development",
                path: "/html5-app-development-services"
            }
        ],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "frontend-scripting",
        icon: Code,
        title: "Frontend",
        color: "text-orange-500",
        description: "Modern UI solutions using React, Vue, and advanced JavaScript frameworks.",
        features: [
            {
                icon: Code,
                title: "React Development",
                path: "/reactjs-development-services"
            },
            {
                icon: Code,
                title: "Angular Development",
                path: "/angular-development-services"
            },
            {
                icon: Code,
                title: "Vue.js Development",
                path: "/vuejs-development-services"
            },
            {
                icon: Code,
                title: "Bootstrap Development",
                path: "/bootstrap-development-services"
            },
            {
                icon: Code,
                title: "Knockout.js Development",
                path: "/knockoutjs-development-services"
            },
            {
                icon: Code,
                title: "Next.js Development",
                path: "/nextjs-development-services"
            }
        ],
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=600&q=80",
    },

    {
        id: "website-development",
        icon: Globe,
        title: "Website Development",
        color: "text-blue-500",
        description: "Full-stack website development using modern frameworks and languages.",
        features: [
            {
                icon: Globe,
                title: "MERN Stack",
                path: "/mern-stack-development"
            },
            {
                icon: Globe,
                title: "Java/J2EE",
                path: "/java-j2ee-development-services"
            },
            {
                icon: Globe,
                title: "Python",
                path: "/python-development-services"
            },
            // {
            //     icon: Globe,
            //     title: ".NET",
            //     path: "/dotnet-development-services"
            // },
            // {
            //     icon: Globe,
            //     title: "Ruby on Rails (ROR)",
            //     path: "/ruby-on-rails-development",
            // },
            // { icon: Globe, title: "Golang", path: "/golang-development-services" },
            // {
            //     icon: Globe,
            //     title: "PHP: Laravel",
            //     path: "/php-laravel-codeigniter-development",
            // },
            // {
            //     icon: Globe,
            //     title: "PHP: CodeIgniter",
            //     path: "/tech/web/codeigniter",
            // },
        ],
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
    },

    {
        id: "Devops",
        icon: Code,
        title: "Devops",
        color: "text-orange-500",
        description: "DevOps is a culture that unifies development and operations through automation, CI/CD, and monitoring for faster, reliable software delivery.",
        features: [
            {
                icon: Cloud, // Cloud-related icon for AWS
                title: "Amazon Web Services",
                path: "/amazon-web-services-consulting"
            },
            {
                icon: Server, // Server-related icon for Google App Engine
                title: "Google App Engine Services",
                path: "/google-app-engine-consulting"
            },
            {
                icon: Database, // Database-related icon for Azure
                title: "Windows Azure",
                path: "/windows-azure-consulting"
            },
            {
                icon: Rocket, // Rocket icon for CI/CD Automation
                title: "CI/CD Automation",
                path: "/ci-cd-automation-consulting"
            },
            {
                icon: Cloud, // Cloud icon for Serverless architecture
                title: "Serverless",
                path: "/serverless-architecture-consulting"
            }
        ],
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "salesforce-ideas-cloudified",
        icon: Globe,
        title: "SALESFORCE: IDEAS CLOUDIFIED",
        color: "text-blue-500",
        description: "Comprehensive Salesforce solutions to enhance business processes and customer engagement.",
        features: [
            { icon: Globe, title: "Sales Cloud", path: "/salesforce-sales-cloud-consulting" },
            { icon: Globe, title: "Marketing Cloud & Pardot", path: "/salesforce-marketing-cloud-pardot-consulting" },
            { icon: Globe, title: "Service Cloud", path: "/salesforce-service-cloud-consulting" },
            { icon: Globe, title: "Community/Experience Cloud", path: "/salesforce-community-experience-cloud-consulting" },
            { icon: Globe, title: "Force.com", path: "/force-com-development" },
            { icon: Globe, title: "Einstein Analytics & Discovery", path: "/einstein-analytics-discovery" },
            { icon: Globe, title: "Commerce Cloud", path: "/salesforce-commerce-cloud" },
            { icon: Globe, title: "Revenue Cloud/CPQ", path: "/revenue-cloud-cpq" },
            { icon: Globe, title: "Lightning Experience", path: "/salesforce-lightning-experience" },
            { icon: Globe, title: "Field Service Lightning", path: "/field-service-lightning" },
            { icon: Globe, title: "Non-Profit Cloud", path: "/salesforce-non-profit-cloud" },
            { icon: Globe, title: "AppExchange Apps", path: "/appexchange-apps" },
            { icon: Globe, title: "Financial Services Cloud", path: "/salesforce-financial-services-cloud" },
            { icon: Globe, title: "Education Cloud", path: "/salesforce-education-cloud" }
        ],
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
    }


];


export const productCategories = [
    {
        id: "mobile-app",
        icon: Smartphone,
        title: "White Lebal Products ",
        color: "text-indigo-500",
        description: "Building high-performance mobile applications for iOS and Android using the latest technologies.",
        features: [
            { icon: Smartphone, title: "ZILLOW CLONE REAL ESTATE", path: "zillow-clone-real-estate-platform" },
            { icon: Smartphone, title: "AIRBNB CLONE", path: "airbnb-clone-booking-platform" },
            { icon: Layers, title: "FIVERR CLONE", path: "fiverr-clone-freelance-marketplace" },
            { icon: Layers, title: "UPWORK CLONE", path: "upwork-clone-freelancer-platform" },
            { icon: Layers, title: "AMAZON CLONE", path: "amazon-clone-ecommerce-platform" },
            { icon: Layers, title: "ALIBABA CLONE", path: "alibaba-clone-b2b-platform" },
            { icon: Layers, title: "PINDUODUO CLONE", path: "pinduoduo-clone-social-commerce" },
            { icon: Layers, title: "NOON CLONE", path: "noon-clone-online-shopping-platform" },
            { icon: Layers, title: "TASKRABBIT CLONE", path: "taskrabbit-clone-task-management" },
            { icon: Layers, title: "BINANCE CLONE CRYPTO EXCHANGE", path: "binance-clone-crypto-exchange" },
            { icon: Layers, title: "PANCAKESWAP CLONE", path: "pancakeswap-clone-defi-platform" },
            { icon: Layers, title: "UNISWAP CLONE SWAP", path: "uniswap-clone-decentralized-exchange" },
            { icon: Layers, title: "LOCALCRYPTOS CLONE P2P EXCHANGE", path: "localcryptos-clone-p2p-exchange" },
            { icon: Layers, title: "OPENSEA CLONE", path: "opensea-clone-nft-marketplace" },
            { icon: Layers, title: "RARIBLE CLONE", path: "rarible-clone-nft-marketplace" },
            { icon: Layers, title: "GLOVO CLONE", path: "glovo-clone-on-demand-delivery" },
            { icon: Layers, title: "INSTACART CLONE", path: "instacart-clone-grocery-delivery" },
            { icon: Layers, title: "PAYPAL CLONE", path: "aypal-clone-payment-gateway" },
            { icon: Layers, title: "CASH APP CLONE", path: "cash-app-clone-mobile-payment" },
            { icon: Layers, title: "TWITTER CLONE MICROBLOGGING", path: "twitter-clone-microblogging-platform" },
            { icon: Layers, title: "TIKTOK CLONE", path: "tiktok-clone-video-sharing" },
            { icon: Layers, title: "FACEBOOK CLONE", path: "facebook-clone-social-network" },
            { icon: Layers, title: "NETFLIX CLONE OTT", path: "netflix-clone-ott-streaming" },
            { icon: Layers, title: "THREADS CLONE", path: "threads-clone-social-network" },
            { icon: Layers, title: "TINDER CLONE", path: "tinder-clone-dating-app" },
            { icon: Layers, title: "ONLYFANS CLONE", path: "onlyfans-clone-content-sharing" },
            { icon: Layers, title: "INDRIVER CLONE BID RIDES", path: "indriver-clone-ride-sharing" },
            { icon: Layers, title: "GOJEK CLONE", path: "gojek-clone-multi-service-app" },
            { icon: Layers, title: "UBER CLONE", path: "uber-clone-ride-hailing" },
            { icon: Layers, title: "CAREEM CLONE", path: "careem-clone-ride-hailing-app" },
            { icon: Layers, title: "UBEREATS CLONE", path: "ubereats-clone-food-delivery" },
            { icon: Layers, title: "DOORDASH CLONE", path: "doordash-clone-food-delivery" },
            { icon: Layers, title: "JUSTEAT CLONE", path: "justeat-clone-food-delivery" },
            { icon: Layers, title: "FOODPANDA CLONE", path: "foodpanda-clone-food-delivery" },
            { icon: Layers, title: "GRUBHUB CLONE", path: "grubhub-clone-food-delivery" }
        ],
        
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "ready-made",
      title: " Ready Made",
      hasDropdown: true,
      dropdownType: "ready-made",
      features: [
        {
          icon: Globe,
          title: "TRAVEL CRM",
          path: "/travel-crm-software",
        },
        {
          icon: Globe,
          title: "HOSPITAL CRM",
          path: "/hospital-crm-solutions",
        },
        {
          icon: Globe,
          title: "BOOKING ENGINE",
          path: "/booking-engine-software",
        },
        {
          icon: Globe,
          title: "B2B PORTAL",
          path: "/b2b-portal-solutions",
        },
        {
          icon: Globe,
          title: "SCHOOL MANAGEMENT CRM",
          path: "/school-management-crm",
        },
        {
          icon: Globe,
          title: "HRMS SOLUTION",
          path: "/hrms-software-solutions",
        },
        {
          icon: Globe,
          title: "REAL ESTATE CRM",
          path: "/real-estate-crm-software",
        },
      ],
      image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
    },
  ];
