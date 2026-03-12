import workspace_img_default from "./workspace_img_default.png";
import profile_img_a from "./profile_img_a.svg";
import profile_img_o from "./profile_img_o.svg";
import profile_img_j from "./profile_img_j.svg";

export const assets = {
  workspace_img_default,
  profile_img_a,
  profile_img_o,
  profile_img_j,
};

export const dummyUsers = [
  {
    id: "user_1",
    name: "Alex",
    email: "alex@test.com",
    image: profile_img_a,
  },
  {
    id: "user_2",
    name: "John",
    email: "john@test.com",
    image: profile_img_j,
  },
  {
    id: "user_3",
    name: "Oliver",
    email: "oliver@test.com",
    image: profile_img_o,
  },
];

export const dummyWorkspaces = [
  // Site 1 - 4 Projects Pune
  {
    id: "site1",
    name: "Pune Construction Site 1",
    image_url: workspace_img_default,
    projects: [
      {
        id: "p1",
        name: "Foundation Work",
        description: "Initial foundation digging and setup",
        status: "ACTIVE",
        priority: "HIGH",
        progress: 40,
        location: "Pune",
        startDate: "2026-01-10",
      },
      {
        id: "p2",
        name: "Concrete Structure",
        description: "Building concrete pillars and base",
        status: "PLANNING",
        priority: "MEDIUM",
        progress: 10,
        location: "Pune",
        startDate: "2026-02-01",
      },
      {
        id: "p3",
        name: "Electrical Setup",
        description: "Electrical wiring installation",
        status: "ACTIVE",
        priority: "MEDIUM",
        progress: 60,
        location: "Pune",
        startDate: "2026-01-25",
      },
      {
        id: "p4",
        name: "Plumbing",
        description: "Water and sewage system installation",
        status: "ACTIVE",
        priority: "HIGH",
        progress: 30,
        location: "Pune",
        startDate: "2026-02-10",
      },
    ],
  },

  // Site 2 - 3 Projects Mumbai
  {
    id: "site2",
    name: "Mumbai Construction Site 2",
    image_url: workspace_img_default,
    projects: [
      {
        id: "p5",
        name: "Bridge Construction",
        description: "Highway bridge project",
        status: "ACTIVE",
        priority: "HIGH",
        progress: 35,
        location: "Mumbai",
        startDate: "2026-02-15",
      },
      {
        id: "p6",
        name: "Steel Framework",
        description: "Steel beam installation",
        status: "PLANNING",
        priority: "HIGH",
        progress: 15,
        location: "Mumbai",
        startDate: "2026-03-01",
      },
      {
        id: "p7",
        name: "Drainage Work",
        description: "Water drainage construction",
        status: "COMPLETED",
        priority: "LOW",
        progress: 100,
        location: "Mumbai",
        startDate: "2025-10-10",
      },
    ],
  },

  // Site 3 - 5 Projects Nagpur
  {
    id: "site3",
    name: "Nagpur Construction Site 3",
    image_url: workspace_img_default,
    projects: [
      {
        id: "p8",
        name: "Tower A Construction",
        description: "Residential tower building",
        status: "ACTIVE",
        priority: "HIGH",
        progress: 45,
        location: "Nagpur",
        startDate: "2026-01-05",
      },
      {
        id: "p9",
        name: "Tower B Construction",
        description: "Second residential tower",
        status: "PLANNING",
        priority: "HIGH",
        progress: 20,
        location: "Nagpur",
        startDate: "2026-02-20",
      },
      {
        id: "p10",
        name: "Parking Basement",
        description: "Basement parking development",
        status: "ACTIVE",
        priority: "MEDIUM",
        progress: 55,
        location: "Nagpur",
        startDate: "2026-01-15",
      },
      {
        id: "p11",
        name: "Water Pipeline",
        description: "Underground water pipeline",
        status: "ACTIVE",
        priority: "LOW",
        progress: 30,
        location: "Nagpur",
        startDate: "2026-03-10",
      },
      {
        id: "p12",
        name: "Security Gate Setup",
        description: "Entrance gate installation",
        status: "COMPLETED",
        priority: "LOW",
        progress: 100,
        location: "Nagpur",
        startDate: "2025-11-15",
      },
    ],
  },
];