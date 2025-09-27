// seed data: 12 tickets
const tickets = [
  {
    id: "T-1001",
    title: "Login Issues - Can't Access Account",
    description: "Customer reports they're unable to login using their email.",
    customer: "John Peterson",
    priority: "High",
    status: "open",
    createdAt: "2025-09-01"
  },
  {
    id: "T-1002",
    title: "Payment Failed - Card Declined",
    description: "Payment declined during checkout for order #4532.",
    customer: "Anna Gomez",
    priority: "High",
    status: "open",
    createdAt: "2025-09-02"
  },
  {
    id: "T-1003",
    title: "Unable to Download Invoice",
    description: "Invoice link returns 404 error on the billing page.",
    customer: "Michael Barry",
    priority: "Medium",
    status: "open",
    createdAt: "2025-09-02"
  },
  {
    id: "T-1004",
    title: "Incorrect Billing Address",
    description: "Customer's invoice shows wrong city in billing address.",
    customer: "Sally Doe",
    priority: "Low",
    status: "open",
    createdAt: "2025-09-03"
  },
  {
    id: "T-1005",
    title: "App Crash on Launch",
    description: "App crashes during startup on Android 12 devices.",
    customer: "David Wilson",
    priority: "High",
    status: "open",
    createdAt: "2025-09-04"
  },
  {
    id: "T-1006",
    title: "Refund Not Processed",
    description: "Refund for order #349 wasn't received.",
    customer: "Sophie Taylor",
    priority: "Medium",
    status: "open",
    createdAt: "2025-09-04"
  },
  {
    id: "T-1007",
    title: "Two-Factor Authentication Issue",
    description: "User not receiving 2FA codes on their phone.",
    customer: "James Anderson",
    priority: "High",
    status: "open",
    createdAt: "2025-09-05"
  },
  {
    id: "T-1008",
    title: "Unable to Update Profile Picture",
    description: "Upload fails with 'invalid image' error.",
    customer: "Olivia Martinez",
    priority: "Low",
    status: "open",
    createdAt: "2025-09-06"
  },
  {
    id: "T-1009",
    title: "Subscription Auto-Renewal",
    description: "Customer wants to cancel upcoming auto-renewal.",
    customer: "Liam Thomas",
    priority: "Medium",
    status: "open",
    createdAt: "2025-09-06"
  },
  {
    id: "T-1010",
    title: "Missing Order Confirmation Email",
    description: "Order completed but confirmation email never arrived.",
    customer: "Grace Lee",
    priority: "High",
    status: "open",
    createdAt: "2025-09-07"
  },
  {
    id: "T-1011",
    title: "Feature Request: Dark Mode",
    description: "Customer requests dark mode in mobile app.",
    customer: "Alex Kim",
    priority: "Low",
    status: "open",
    createdAt: "2025-09-08"
  },
  {
    id: "T-1012",
    title: "Slow Loading Dashboard",
    description: "Dashboard takes too long to load after login.",
    customer: "Priya Rao",
    priority: "Medium",
    status: "open",
    createdAt: "2025-09-08"
  }
];

export default tickets;
