import { Track, Mentor, StudentProject, CodingChallenge } from '../types/campus';

export const CAMPUS_STATS = {
  placementRate: '94.8%',
  medianSalary: '$126,500',
  averageUplift: '+$58,000',
  alumniHired: '1,480+',
  partnerCompanies: '260+',
  satisfactionScore: '4.96/5.0',
  nextBatchCountdownDays: 14,
  nextCohortDate: 'November 17, 2026',
};

export const TRACKS: Track[] = [
  {
    id: 'ai-agents',
    slug: 'ai-systems-autonomous-agents',
    title: 'Autonomous AI Systems & LLM Agents',
    category: 'ai',
    badge: {
      text: 'New Bootcamp',
      variant: 'cyan',
    },
    headline: 'Build multi-agent frameworks, neuro-symbolic RAG, and production LLM orchestrations.',
    description: 'Transition from basic prompting to engineering resilient, self-healing autonomous AI agents. Master LangGraph, DSPy, fine-tuning, latency optimization, and production evaluation loops.',
    rating: 4.98,
    reviewsCount: 142,
    durationWeeks: 24,
    hoursPerWeek: '20-25 hrs/wk',
    avgStartingSalary: '$148,000',
    salaryUplift: '+$64,000',
    nextCohortDate: 'Nov 17, 2026',
    seatsLeft: 4,
    totalSeats: 30,
    tuition: {
      upfront: 12500,
      monthly: 1150,
      isaAvailable: true,
    },
    techStack: ['Python', 'LangGraph', 'DSPy', 'PyTorch', 'FastAPI', 'Qdrant Vector DB', 'vLLM', 'Docker'],
    careerRoles: ['AI Systems Engineer', 'LLM Infrastructure Architect', 'Agentic AI Developer', 'Applied ML Specialist'],
    featuredProject: {
      title: 'Synthetix: Autonomous Code Refactoring Swarm',
      description: 'Distributed multi-agent pipeline that ingests legacy codebases, maps call graphs, executes regression benchmarks, and submits validated pull requests.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    },
    curriculum: [
      {
        id: 'ai-m1',
        weekNumber: 'Weeks 01-04',
        phase: 'Phase 1: Foundations',
        title: 'Deep Transformer Architectures & Embeddings',
        durationHours: 80,
        status: 'completed',
        tags: ['Attention Mechanisms', 'Tokenizers', 'Embeddings', 'PyTorch'],
        summary: 'Dissect the attention matrix mathematically and implement rotary positional encodings (RoPE), tokenizer token counting, and custom embedding similarity engines.',
        lessons: [
          {
            id: 'l1',
            title: 'Deconstructing Multi-Head Self Attention from Scratch',
            type: 'code-lab',
            duration: '4 hours',
            description: 'Implement scaled dot-product attention in pure PyTorch with tensor broadcasting.',
            deliverable: 'Custom Transformer Block Benchmark',
          },
          {
            id: 'l2',
            title: 'Vector Search Indexes: HNSW & Product Quantization',
            type: 'lecture',
            duration: '3 hours',
            description: 'Compare IVF, HNSW, and cosine vs dot product spaces under million-vector scale.',
            deliverable: 'Vector Benchmarking Report',
          },
          {
            id: 'l3',
            title: 'Hands-on Lab: Embedding Alignment & Dimensionality Reduction',
            type: 'code-lab',
            duration: '5 hours',
            description: 'Fine-tune modern embedding models using triplet margin loss for domain-specific retrieval.',
            deliverable: 'Domain Vector Classifier',
          },
        ],
        capstoneProject: {
          title: 'Semantic Radar: Real-Time Paper Classifier',
          description: 'A vector-indexed pipeline that ingests arXiv preprints, generates hierarchical embeddings, and alerts researchers to breakthrough citations.',
          techStack: ['PyTorch', 'Qdrant', 'FastAPI'],
        },
      },
      {
        id: 'ai-m2',
        weekNumber: 'Weeks 05-10',
        phase: 'Phase 2: Core Engineering',
        title: 'Production RAG, Graph Retrieval & Structured Outputs',
        durationHours: 120,
        status: 'in-progress',
        tags: ['Hybrid Search', 'Knowledge Graphs', 'Pydantic Guardrails', 'DSPy'],
        summary: 'Transcend standard naive RAG. Build hybrid sparse-dense retrievers with BM25 fusion, rerankers, and graph databases for multi-hop semantic reasoning.',
        lessons: [
          {
            id: 'l4',
            title: 'Hybrid Fusion: Reciprocal Rank Fusion (RRF) at Scale',
            type: 'code-lab',
            duration: '4 hours',
            description: 'Combine BM25 keyword matching with dense embeddings with reciprocal rank fusion.',
            deliverable: 'RRF Retriever Engine',
          },
          {
            id: 'l5',
            title: 'Reliable Structured Output Enforcement & JSON Schema Repairs',
            type: 'code-lab',
            duration: '4 hours',
            description: 'Utilize Instructor and schema validators to guarantee deterministic typed responses.',
            deliverable: 'Pydantic API Gateway',
          },
          {
            id: 'l6',
            title: 'GraphRAG: Entity Extraction with Neo4j & Cypher Queries',
            type: 'project',
            duration: '8 hours',
            description: 'Extract entities and relations from unstructured enterprise manuals and query via multi-hop paths.',
            deliverable: 'Knowledge Graph Enterprise Search',
          },
        ],
        capstoneProject: {
          title: 'OmniKnowledge: Enterprise Graph-RAG Engine',
          description: 'Zero-hallucination citation engine with automated cross-document verification and certainty scoring.',
          techStack: ['LangGraph', 'Neo4j', 'FastAPI', 'DSPy'],
        },
      },
      {
        id: 'ai-m3',
        weekNumber: 'Weeks 11-18',
        phase: 'Phase 3: Agentic Swarms',
        title: 'Multi-Agent Frameworks, Tool Use & Reflection',
        durationHours: 160,
        status: 'locked',
        tags: ['LangGraph', 'ReAct Pattern', 'Tool Calling', 'Sandboxed Execution'],
        summary: 'Architect cyclical state graphs, plan-and-solve agent patterns, self-correction memory stores, and sandboxed Docker tool execution environments.',
        lessons: [
          {
            id: 'l7',
            title: 'LangGraph State Machines & Checkpointing',
            type: 'code-lab',
            duration: '6 hours',
            description: 'Construct stateful acyclic and cyclical agent networks with human-in-the-loop overrides.',
            deliverable: 'Autonomous Bug Triager',
          },
          {
            id: 'l8',
            title: 'Secure Tool Execution in Ephemeral Micro-VMs',
            type: 'project',
            duration: '8 hours',
            description: 'Execute arbitrary Python code and bash commands in firewalled Firecracker / Docker sandboxes.',
            deliverable: 'Sandboxed Python Interpreter Service',
          },
        ],
        capstoneProject: {
          title: 'AgentMatrix: Collaborative Financial Analyst Swarm',
          description: 'Trio of specialized agents (Macro Analyst, Earnings Auditor, and Risk Hedger) debating trade ideas in real-time.',
          techStack: ['LangGraph', 'FastAPI', 'Docker', 'Streamlit'],
        },
      },
      {
        id: 'ai-m4',
        weekNumber: 'Weeks 19-24',
        phase: 'Phase 4: Capstone & Hiring',
        title: 'Inference Optimization, vLLM & Production Deployment',
        durationHours: 120,
        status: 'locked',
        tags: ['vLLM', 'PagedAttention', 'Quantization (AWQ/GPTQ)', 'Evals'],
        summary: 'Scale models on GPU clusters with vLLM, continuous batching, streaming token protocols, and automated CI/CD synthetic evaluation suites.',
        lessons: [
          {
            id: 'l9',
            title: 'Deploying Self-Hosted Models with vLLM & AWQ Quantization',
            type: 'code-lab',
            duration: '6 hours',
            description: 'Maximize token/sec throughput using PagedAttention and speculative decoding.',
            deliverable: 'Production Model Endpoint Cluster',
          },
          {
            id: 'l10',
            title: 'Automated LLM-as-a-Judge Evaluation Matrices',
            type: 'project',
            duration: '10 hours',
            description: 'Deploy prompt regression testing in GitHub Actions before deploying any model prompt changes.',
            deliverable: 'Continuous AI Quality Dashboard',
          },
        ],
        capstoneProject: {
          title: 'High-Concurrency Agent Gateway for Enterprise Scale',
          description: 'Production-ready gateway handling 10,000+ streaming agent sessions with dynamic load-shedding and audit telemetry.',
          techStack: ['vLLM', 'Kubernetes', 'FastAPI', 'Redis'],
        },
      },
    ],
  },
  {
    id: 'fullstack-cloud',
    slug: 'fullstack-typescript-cloud-architecture',
    title: 'Full-Stack TypeScript & Cloud Architecture',
    category: 'fullstack',
    badge: {
      text: 'Cohort Filling Fast',
      variant: 'amber',
    },
    headline: 'Build hyperscale React 19 apps, event-driven backends, and serverless edge clouds.',
    description: 'Master strict TypeScript end-to-end, Next.js App Router internals, Kafka event streams, high-concurrency PostgreSQL, and infrastructure-as-code.',
    rating: 4.95,
    reviewsCount: 310,
    durationWeeks: 18,
    hoursPerWeek: '20-25 hrs/wk',
    avgStartingSalary: '$134,000',
    salaryUplift: '+$52,000',
    nextCohortDate: 'Nov 17, 2026',
    seatsLeft: 3,
    totalSeats: 35,
    tuition: {
      upfront: 10800,
      monthly: 990,
      isaAvailable: true,
    },
    techStack: ['TypeScript', 'React 19', 'Next.js', 'Node.js', 'PostgreSQL', 'Prisma/Drizzle', 'Kafka', 'Terraform', 'AWS'],
    careerRoles: ['Senior Full-Stack Engineer', 'Frontend Platform Architect', 'Cloud Application Engineer'],
    featuredProject: {
      title: 'StreamPulse: Real-Time Collaborative Canvas',
      description: 'Zero-latency vector multiplayer canvas utilizing CRDTs, WebSockets, and Redis pub/sub with sub-15ms broadcast times.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    curriculum: [
      {
        id: 'fs-m1',
        weekNumber: 'Weeks 01-04',
        phase: 'Phase 1: Foundations',
        title: 'Deep TypeScript & React 19 Concurrency',
        durationHours: 80,
        status: 'completed',
        tags: ['TypeScript Typesystem', 'React 19 Actions', 'Server Components', 'Optimistic UI'],
        summary: 'Unravel advanced conditional types, template literals, React 19 hooks (useTransition, useActionState, useOptimistic), and micro-frontend boundaries.',
        lessons: [
          {
            id: 'fs-l1',
            title: 'Type-Level Programming: Generics, Mapped & Conditional Types',
            type: 'code-lab',
            duration: '4 hours',
            description: 'Write type-safe schema validation generators without runtime overhead.',
            deliverable: 'Zero-Overhead Schema Validator',
          },
          {
            id: 'fs-l2',
            title: 'React 19 Server Components & Streaming Architecture',
            type: 'lecture',
            duration: '4 hours',
            description: 'Deep dive into Suspense boundaries, async server functions, and chunked HTTP response streaming.',
            deliverable: 'Streaming E-Commerce Shell',
          },
        ],
        capstoneProject: {
          title: 'HyperFast: Headless High-Concurrency Commerce Platform',
          description: 'Sub-100ms globally distributed catalog with instant optimistic cart updates and real-time inventory locking.',
          techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Redis'],
        },
      },
      {
        id: 'fs-m2',
        weekNumber: 'Weeks 05-09',
        phase: 'Phase 2: Core Engineering',
        title: 'Relational DB Mastery, Drizzle & Query Optimization',
        durationHours: 100,
        status: 'in-progress',
        tags: ['PostgreSQL', 'Drizzle ORM', 'Connection Pooling', 'Indexing'],
        summary: 'Master B-tree indexing strategies, EXPLAIN ANALYZE execution plans, zero-downtime schema migrations, and connection pooling with PgBouncer.',
        lessons: [
          {
            id: 'fs-l3',
            title: 'Diagnosing Slow Queries with EXPLAIN ANALYZE',
            type: 'code-lab',
            duration: '5 hours',
            description: 'Refactor complex analytical queries from 4.2 seconds to 8 milliseconds with composite indexes.',
            deliverable: 'DB Performance Audit Suite',
          },
        ],
        capstoneProject: {
          title: 'LedgerLock: High-Throughput Financial Ledger',
          description: 'Double-entry accounting engine handling 5,000 transfers/sec with ACID compliance and idempotency guarantees.',
          techStack: ['PostgreSQL', 'Drizzle', 'Node.js', 'Docker'],
        },
      },
      {
        id: 'fs-m3',
        weekNumber: 'Weeks 10-14',
        phase: 'Phase 3: Distributed Systems',
        title: 'Event-Driven Architectures & WebSockets',
        durationHours: 100,
        status: 'locked',
        tags: ['Apache Kafka', 'BullMQ', 'WebSockets', 'CQRS'],
        summary: 'Decouple monoliths with Kafka event streams, durable message queues, and WebSocket clusters backed by Redis pub/sub.',
        lessons: [
          {
            id: 'fs-l4',
            title: 'Designing Resilient Event Streams with Kafka & BullMQ',
            type: 'code-lab',
            duration: '6 hours',
            description: 'Handle backpressure, dead-letter queues, and exactly-once processing semantics.',
            deliverable: 'Distributed Notification Pipeline',
          },
        ],
        capstoneProject: {
          title: 'PulseDispatch: Mission-Critical Logistics Dispatcher',
          description: 'Live geolocation dispatch tracking thousands of delivery fleets in real-time with event replay.',
          techStack: ['Kafka', 'WebSockets', 'Redis', 'React'],
        },
      },
      {
        id: 'fs-m4',
        weekNumber: 'Weeks 15-18',
        phase: 'Phase 4: Capstone & Hiring',
        title: 'Terraform, Docker & Production Cloud Infrastructure',
        durationHours: 80,
        status: 'locked',
        tags: ['Terraform', 'AWS ECS', 'CloudFront', 'Datadog'],
        summary: 'Provision production AWS infrastructure via Terraform, establish zero-trust IAM roles, configure automated canary rollouts and Datadog APM.',
        lessons: [
          {
            id: 'fs-l5',
            title: 'Zero-Downtime Infrastructure as Code with Terraform',
            type: 'project',
            duration: '8 hours',
            description: 'Spin up multi-region VPCs, RDS replicas, and containerized task definitions declaratively.',
            deliverable: 'Automated Terraform Cloud Template',
          },
        ],
        capstoneProject: {
          title: 'Global SaaS Multi-Tenant Cloud Deployment',
          description: 'Complete production multi-tenant SaaS deployment with per-tenant isolation and automated provisioning.',
          techStack: ['Terraform', 'AWS', 'Docker', 'GitHub Actions'],
        },
      },
    ],
  },
  {
    id: 'rust-systems',
    slug: 'rust-high-performance-distributed-systems',
    title: 'Rust & High-Performance Systems',
    category: 'systems',
    badge: {
      text: 'Hiring / Placement',
      variant: 'emerald',
    },
    headline: 'Write memory-safe, ultra-low latency distributed engines and network protocols.',
    description: 'Dive deep into ownership, zero-cost abstractions, Tokio asynchronous runtimes, SIMD vectorization, and building Raft consensus algorithms from scratch.',
    rating: 4.99,
    reviewsCount: 188,
    durationWeeks: 20,
    hoursPerWeek: '20-25 hrs/wk',
    avgStartingSalary: '$155,000',
    salaryUplift: '+$72,000',
    nextCohortDate: 'Nov 17, 2026',
    seatsLeft: 2,
    totalSeats: 25,
    tuition: {
      upfront: 13200,
      monthly: 1200,
      isaAvailable: true,
    },
    techStack: ['Rust', 'Tokio', 'Async/Await', 'gRPC/Protobuf', 'WebAssembly', 'Linux eBPF', 'Raft Consensus'],
    careerRoles: ['Distributed Systems Engineer', 'Rust Backend Engineer', 'Infrastructure Software Engineer', 'Database Kernel Developer'],
    featuredProject: {
      title: 'TitanKV: Distributed LSM-Tree Key-Value Store',
      description: 'High-throughput persistent key-value engine with Raft consensus, Write-Ahead Logging (WAL), and zero-copy io_uring disk IO.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    },
    curriculum: [
      {
        id: 'rs-m1',
        weekNumber: 'Weeks 01-05',
        phase: 'Phase 1: Foundations',
        title: 'Borrow Checker, Lifetimes & Zero-Cost Abstractions',
        durationHours: 100,
        status: 'completed',
        tags: ['Ownership', 'Lifetimes', 'Smart Pointers', 'Unsafe Rust'],
        summary: 'Master memory layout, interior mutability (RefCell, Arc, Mutex), custom allocators, and auditing unsafe blocks.',
        lessons: [
          {
            id: 'rs-l1',
            title: 'Deconstructing Ownership, Borrowing & Stack vs Heap',
            type: 'code-lab',
            duration: '5 hours',
            description: 'Implement a lock-free singly linked list using atomic pointers.',
            deliverable: 'Lock-Free Data Structure Library',
          },
        ],
        capstoneProject: {
          title: 'Custom Memory Allocator & Profiler',
          description: 'A bump and arena allocator tailored for ultra-fast ephemeral cache allocations without heap fragmentation.',
          techStack: ['Rust', 'GDB/Valgrind'],
        },
      },
      {
        id: 'rs-m2',
        weekNumber: 'Weeks 06-11',
        phase: 'Phase 2: Asynchronous Runtimes',
        title: 'Tokio Async Internals, Network Protocols & gRPC',
        durationHours: 120,
        status: 'in-progress',
        tags: ['Tokio', 'Futures', 'io_uring', 'Tonic gRPC'],
        summary: 'Build a custom cooperative task scheduler and implement custom binary framing protocols with Tonic gRPC.',
        lessons: [
          {
            id: 'rs-l2',
            title: 'Building a Redis-Compatible Server from Scratch',
            type: 'code-lab',
            duration: '8 hours',
            description: 'Parse RESP protocol, handle concurrent connections with Tokio, and implement TTL expiration.',
            deliverable: 'Mini-Redis In-Memory Engine',
          },
        ],
        capstoneProject: {
          title: 'HyperKite: High-Throughput Reverse Proxy',
          description: 'L7 load balancer supporting HTTP/2 multiplexing, active health checks, and round-robin connection pooling.',
          techStack: ['Rust', 'Tokio', 'Hyper'],
        },
      },
      {
        id: 'rs-m3',
        weekNumber: 'Weeks 12-16',
        phase: 'Phase 3: Distributed Consensus',
        title: 'Raft Consensus Protocol & Distributed Storage',
        durationHours: 100,
        status: 'locked',
        tags: ['Raft Consensus', 'Leader Election', 'Log Replication', 'Snapshots'],
        summary: 'Implement leader election, heartbeat RPCs, log replication, split-brain recovery, and compaction under simulated network partitions.',
        lessons: [
          {
            id: 'rs-l3',
            title: 'Handling Split-Brain & Partition Testing via Jepsen',
            type: 'project',
            duration: '10 hours',
            description: 'Stress test your consensus engine under packet dropping and clock skew.',
            deliverable: 'Fault-Tolerant Consensus Cluster',
          },
        ],
        capstoneProject: {
          title: 'Distributed State Machine with Raft',
          description: 'Linearizable distributed store passing 100% of network failure test cases.',
          techStack: ['Rust', 'Tonic', 'Tokio'],
        },
      },
      {
        id: 'rs-m4',
        weekNumber: 'Weeks 17-20',
        phase: 'Phase 4: Capstone & Kernel',
        title: 'Linux eBPF & High-Speed Packet Filtering',
        durationHours: 80,
        status: 'locked',
        tags: ['Aya', 'eBPF', 'XDP', 'Kernel Probing'],
        summary: 'Attach eBPF programs to Linux kernel sockets for nanosecond packet filtering and observability.',
        lessons: [
          {
            id: 'rs-l4',
            title: 'Zero-Copy XDP Firewalls with Rust Aya Framework',
            type: 'code-lab',
            duration: '6 hours',
            description: 'Drop malicious SYN flood packets at the network card driver layer before kernel socket processing.',
            deliverable: 'Kernel-Level DDoS Mitigation Engine',
          },
        ],
        capstoneProject: {
          title: 'ApexShield: Cloud-Native eBPF Security Monitor',
          description: 'Real-time container network monitor detecting suspicious syscalls and unauthorized DNS queries.',
          techStack: ['Rust', 'Aya eBPF', 'Linux'],
        },
      },
    ],
  },
  {
    id: 'cyber-defense',
    slug: 'next-gen-cyber-defense-zero-trust',
    title: 'Cyber Defense & Zero-Trust Engineering',
    category: 'security',
    badge: {
      text: 'New Bootcamp',
      variant: 'cyan',
    },
    headline: 'Defend cloud perimeter architectures, master offensive red-teaming and zero-trust.',
    description: 'Learn modern adversary emulation, identity-based zero trust, memory exploitation defense, cloud SIEM automation, and cryptographically verifiable audits.',
    rating: 4.92,
    reviewsCount: 94,
    durationWeeks: 18,
    hoursPerWeek: '20-25 hrs/wk',
    avgStartingSalary: '$142,000',
    salaryUplift: '+$60,000',
    nextCohortDate: 'Nov 17, 2026',
    seatsLeft: 5,
    totalSeats: 25,
    tuition: {
      upfront: 11800,
      monthly: 1050,
      isaAvailable: true,
    },
    techStack: ['Python', 'Go', 'Kubernetes Security', 'AWS GuardDuty', 'Splunk/Wazuh', 'Tenable', 'OpenID Connect', 'OIDC'],
    careerRoles: ['Cloud Security Architect', 'Security Operations Engineer', 'Zero-Trust Systems Engineer'],
    featuredProject: {
      title: 'AegisZero: Continuous Cloud Posture Auditor',
      description: 'Automated remediation engine that scans Kubernetes pods, revokes misconfigured IAM credentials, and triggers SOC alert tickets in under 2 seconds.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    },
    curriculum: [
      {
        id: 'cd-m1',
        weekNumber: 'Weeks 01-04',
        phase: 'Phase 1: Foundations',
        title: 'Adversary Tactics & MITRE ATT&CK Matrix',
        durationHours: 80,
        status: 'completed',
        tags: ['Threat Modeling', 'MITRE ATT&CK', 'Packet Analysis', 'Wireshark'],
        summary: 'Deconstruct real APT campaigns, analyze packet captures, and map incident timelines to MITRE ATT&CK techniques.',
        lessons: [
          {
            id: 'cd-l1',
            title: 'Deconstructing Supply Chain Attacks & Dependency Poisoning',
            type: 'code-lab',
            duration: '4 hours',
            description: 'Audit npm/PyPI malicious packages and set up cryptographic SLSA provenance checks.',
            deliverable: 'Software Supply Chain Security Harness',
          },
        ],
        capstoneProject: {
          title: 'Threat Hunter Lab: Malware Traffic Analysis',
          description: 'Isolate and extract encrypted C2 beacon channels from simulated enterprise network captures.',
          techStack: ['Wireshark', 'Python', 'Zeek'],
        },
      },
      {
        id: 'cd-m2',
        weekNumber: 'Weeks 05-09',
        phase: 'Phase 2: Cloud & Identity',
        title: 'Zero-Trust Architecture & Ephemeral Credentials',
        durationHours: 100,
        status: 'in-progress',
        tags: ['OIDC', 'SPIFFE/SPIRE', 'Mutual TLS', 'IAM Policy Auditing'],
        summary: 'Eliminate static API keys. Implement mutual TLS, cryptographic workload identities via SPIFFE/SPIRE, and automated IAM least-privilege scoping.',
        lessons: [
          {
            id: 'cd-l2',
            title: 'Deploying Workload Identity with SPIFFE/SPIRE on Kubernetes',
            type: 'project',
            duration: '8 hours',
            description: 'Establish cryptographic X.509 SVID credentials for inter-service communication without secrets.',
            deliverable: 'Zero-Secrets Service Mesh Lab',
          },
        ],
        capstoneProject: {
          title: 'GateKeeper: Ephemeral Just-in-Time Access Broker',
          description: 'Self-service CLI that grants 30-minute cloud admin access with automatic revocation and biometric WebAuthn verification.',
          techStack: ['Go', 'WebAuthn', 'AWS IAM', 'PostgreSQL'],
        },
      },
      {
        id: 'cd-m3',
        weekNumber: 'Weeks 10-18',
        phase: 'Phase 3: Blue Team Defense',
        title: 'SIEM Automation, EDR & Incident Response',
        durationHours: 140,
        status: 'locked',
        tags: ['Detection as Code', 'Sigma Rules', 'Automated Containment'],
        summary: 'Deploy modern Detection-as-Code pipelines, write custom Sigma detection rules, and trigger automated quarantine runbooks upon threat detection.',
        lessons: [
          {
            id: 'cd-l3',
            title: 'Automated Ransomware Containment Runbooks',
            type: 'code-lab',
            duration: '6 hours',
            description: 'Write serverless workflows that isolate compromised VMs, revoke tokens, and take forensic memory dumps.',
            deliverable: 'Automated SOC Playbook Engine',
          },
        ],
        capstoneProject: {
          title: 'SentinelSOC: Cloud-Native SIEM & Defense Hub',
          description: 'Scalable detection pipeline processing 50k logs/sec with AI-assisted alert deduplication and correlation.',
          techStack: ['Python', 'Elasticsearch', 'AWS Lambda'],
        },
      },
    ],
  },
];

export const MENTORS: Mentor[] = [
  {
    id: 'm-1',
    name: 'Dr. Elena Rostova',
    role: 'Principal AI Architect',
    company: 'OpenAI Ecosystem Partner',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    trackSpecialty: 'Autonomous AI Systems',
    experienceYears: 12,
    bio: 'Ex-Google Brain researcher specializing in neuro-symbolic reasoning, LLM fine-tuning, and scalable agentic swarms.',
    availableSlots: ['Today, 4:00 PM', 'Tomorrow, 10:30 AM', 'Thursday, 2:00 PM'],
    topics: ['Agent Architecture Review', 'RAG Retrieval Tuning', 'Career Positioning in AI'],
  },
  {
    id: 'm-2',
    name: 'Marcus Vance',
    role: 'Staff Systems Engineer',
    company: 'Cloudflare / Rust Foundation',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    trackSpecialty: 'Rust & Systems',
    experienceYears: 14,
    bio: 'Core contributor to low-latency edge runtimes, io_uring abstractions, and zero-allocation network daemons.',
    availableSlots: ['Tomorrow, 3:00 PM', 'Friday, 11:00 AM', 'Monday, 1:00 PM'],
    topics: ['Tokio Concurrency Pitfalls', 'Zero-Copy IO Optimization', 'Distributed Consensus'],
  },
  {
    id: 'm-3',
    name: 'Sarah Chen-Kapoor',
    role: 'VP of Platform Engineering',
    company: 'Stripe',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    trackSpecialty: 'Full-Stack TypeScript & Cloud',
    experienceYears: 10,
    bio: 'Led high-scale distributed commerce engines processing millions of API calls per second with 99.999% uptime.',
    availableSlots: ['Wednesday, 9:00 AM', 'Thursday, 5:30 PM', 'Saturday, 11:00 AM'],
    topics: ['PostgreSQL Indexing & Partitioning', 'System Design Interviews', 'Next.js App Router Scaling'],
  },
  {
    id: 'm-4',
    name: 'Tariq Al-Mansoor',
    role: 'Head of Cloud Security & Red Team',
    company: 'Datadog',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    trackSpecialty: 'Cyber Defense & Zero-Trust',
    experienceYears: 11,
    bio: 'Specialist in zero-trust mesh architectures, container escape defense, and Detection-as-Code infrastructure.',
    availableSlots: ['Today, 6:00 PM', 'Friday, 2:00 PM', 'Sunday, 10:00 AM'],
    topics: ['Cloud Perimeter Hardening', 'Kubernetes Security Auditing', 'Threat Emulation'],
  },
];

export const CODING_CHALLENGES: CodingChallenge[] = [
  {
    id: 'c-1',
    trackId: 'ai-agents',
    title: 'Agentic Tool Router & Fallback Chain',
    difficulty: 'Intermediate',
    language: 'python',
    scenario: 'Implement an autonomous query dispatcher that classifies an incoming user query, attempts tool execution, and falls back gracefully to a search engine agent if arguments are missing or malformed.',
    starterCode: `# Neo-Campus Kinetic AI Agent Lab
# Implement the resilient dispatch function

def dispatch_tool(query: str, available_tools: list[dict]) -> dict:
    """
    Returns a dict with:
      - 'tool_name': str
      - 'arguments': dict
      - 'fallback_triggered': bool
    """
    # TODO: Parse query intent and return matched tool
    if "weather" in query.lower():
        city = query.split()[-1].strip("?.")
        return {"tool_name": "get_weather", "arguments": {"city": city}, "fallback_triggered": False}
    elif "calculate" in query.lower() or "multiply" in query.lower():
        return {"tool_name": "math_eval", "arguments": {"expr": "42 * 10"}, "fallback_triggered": False}
    else:
        # Fallback to general web search
        return {"tool_name": "web_search", "arguments": {"query": query}, "fallback_triggered": True}
`,
    expectedOutput: 'Output: {"tool_name": "get_weather", "arguments": {"city": "Tokyo"}, "fallback_triggered": False}',
    hints: [
      'Extract entity parameters from user input strings before assigning arguments.',
      'Always include the fallback_triggered boolean flag in the resulting payload.',
      'Check whether the intent exists in available_tools.',
    ],
    tests: [
      { name: 'Weather Intent Routing', passed: true, assertion: 'dispatch_tool("What is the weather in Tokyo?", tools)["tool_name"] == "get_weather"' },
      { name: 'Calculation Intent Routing', passed: true, assertion: 'dispatch_tool("calculate 42 * 10", tools)["tool_name"] == "math_eval"' },
      { name: 'Unknown Intent Fallback', passed: true, assertion: 'dispatch_tool("tell me a philosophy joke", tools)["fallback_triggered"] == True' },
    ],
  },
  {
    id: 'c-2',
    trackId: 'fullstack-cloud',
    title: 'React 19 Optimistic Mutation & Rollback',
    difficulty: 'Intermediate',
    language: 'typescript',
    scenario: 'Write an optimistic state updater that immediately renders a task completion state and triggers a rollback transaction if the backend HTTP request rejects.',
    starterCode: `// Neo-Campus Kinetic Full-Stack Lab
export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function applyOptimisticToggle(
  currentTasks: Task[],
  targetId: string
): Task[] {
  // Return the immutably updated array with targetId flipped
  return currentTasks.map(task => 
    task.id === targetId ? { ...task, isCompleted: !task.isCompleted } : task
  );
}
`,
    expectedOutput: 'Tasks updated optimistically: target completed state inverted without mutating original array.',
    hints: [
      'Ensure strict immutability by creating a new copy via Array.prototype.map.',
      'Handle non-existent task IDs without throwing errors.',
    ],
    tests: [
      { name: 'Immutability Guarantee', passed: true, assertion: 'currentTasks !== nextTasks' },
      { name: 'Correct Toggle State', passed: true, assertion: 'nextTasks.find(t => t.id === "1").isCompleted === true' },
      { name: 'Preserve Other Elements', passed: true, assertion: 'nextTasks[1].isCompleted === false' },
    ],
  },
  {
    id: 'c-3',
    trackId: 'rust-systems',
    title: 'Zero-Copy Token Stream Parser',
    difficulty: 'Advanced',
    language: 'rust',
    scenario: 'Implement a zero-allocation token frame decoder in Rust using borrowed slices (&str) to achieve sub-microsecond throughput.',
    starterCode: `// Neo-Campus Kinetic Systems Lab
#[derive(Debug, PartialEq)]
pub struct Frame<'a> {
    pub opcode: &'a str,
    pub payload: &'a str,
}

pub fn parse_frame<'a>(input: &'a str) -> Result<Frame<'a>, &'static str> {
    // Expected protocol format: "OPCODE:PAYLOAD"
    let mut parts = input.splitn(2, ':');
    let opcode = parts.next().ok_or("Missing opcode")?;
    let payload = parts.next().ok_or("Missing payload")?;
    
    Ok(Frame { opcode, payload })
}
`,
    expectedOutput: 'Parsed Frame: opcode="SET", payload="user:101=active" in 14 nanoseconds.',
    hints: [
      'Borrow directly from input slice without calling .to_string() or allocating on heap.',
      'Use splitn(2, ":") for single pass scanning.',
    ],
    tests: [
      { name: 'Protocol Frame Splitting', passed: true, assertion: 'parse_frame("PING:HEARTBEAT").is_ok()' },
      { name: 'Zero Heap Allocations', passed: true, assertion: 'allocations_count == 0' },
      { name: 'Malformed Frame Rejection', passed: true, assertion: 'parse_frame("CORRUPT").is_err()' },
    ],
  },
];

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: 'sp-1',
    title: 'AuraRAG: Multi-Modal Medical Imaging RAG',
    author: 'Kavita Nair',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    cohort: 'Cohort #12 Alumni',
    trackTitle: 'Autonomous AI Systems',
    tagline: 'Dual vision-language query engine cross-referencing DICOM scans with peer-reviewed medical publications.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    stars: 342,
    tags: ['Vision Transformers', 'FastAPI', 'Qdrant'],
    hiredAt: 'Hired as Senior AI Engineer at Anthropic Partner',
  },
  {
    id: 'sp-2',
    title: 'GhostMesh: Microsecond P2P Gossip Protocol',
    author: 'Liam O’Connor',
    authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    cohort: 'Cohort #13 Alumni',
    trackTitle: 'Rust & High-Performance Systems',
    tagline: 'Decentralized peer node coordination library achieving 800,000 heartbeats/sec on commodity hardware.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    stars: 521,
    tags: ['Rust', 'Tokio', 'eBPF'],
    hiredAt: 'Hired at Cloudflare Systems Core Team',
  },
  {
    id: 'sp-3',
    title: 'OmniFlow: Zero-Latency Collaborative Whiteboard',
    author: 'Zoe Deschanel',
    authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    cohort: 'Cohort #14 Student',
    trackTitle: 'Full-Stack TypeScript & Cloud',
    tagline: 'Spatial multi-user canvas with real-time vector path simplifications and CRDT persistence.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    stars: 219,
    tags: ['Next.js 19', 'Yjs', 'WebSockets', 'Tailwind'],
    hiredAt: 'Interviewing at Linear & Figma',
  },
];

export const HIRING_PARTNERS = [
  { name: 'OpenAI', logo: '⚡ OpenAI' },
  { name: 'Stripe', logo: '💳 Stripe' },
  { name: 'Vercel', logo: '▲ Vercel' },
  { name: 'Figma', logo: '❖ Figma' },
  { name: 'Datadog', logo: '🐕 Datadog' },
  { name: 'Linear', logo: '◈ Linear' },
  { name: 'Cloudflare', logo: '☁ Cloudflare' },
  { name: 'Anthropic', logo: '✻ Anthropic' },
  { name: 'GitHub', logo: '🐙 GitHub' },
  { name: 'Supabase', logo: '⚡ Supabase' },
];

export const DEMO_STUDENT = {
  name: 'Alex Rivera',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  cohort: 'AI Systems Engineering • Cohort #14',
  startDate: 'September 2026',
  expectedGraduation: 'February 2027',
  overallProgress: 68,
  currentSprint: 'Sprint 08: Multi-Agent Tool Sandboxing',
  streakDays: 19,
  completedLabs: 26,
  upcomingMasterclass: {
    title: 'Building Production Agent Evaluators with LangSmith & DSPy',
    instructor: 'Dr. Elena Rostova',
    date: 'Wednesday, Nov 4 • 6:00 PM EST',
    rsvpStatus: true,
  },
  certificateStatus: {
    isUnlocked: true,
    certificateId: 'NEO-KC-2026-8891-ALX',
    issueDate: 'October 28, 2026',
    skillsVerified: ['LangGraph Workflows', 'DSPy Optimization', 'Vector Index Tuning', 'vLLM Serving'],
  },
};
